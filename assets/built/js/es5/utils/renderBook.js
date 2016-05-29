"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterPages = filterPages;
exports.htmlToPages = htmlToPages;
exports.pagesToHtml = pagesToHtml;
exports.getNodeHeights = getNodeHeights;
exports.percentageToPage = percentageToPage;
function filterPages(config) {
  var startPage = config.startPage;
  var quantity = config.quantity;
  var offset = config.offset;
  var pages = config.pages;

  var newPages = [];

  while (startPage - offset < 0) {
    offset--;
  }
  startPage = startPage - offset;

  for (var i = startPage; i < quantity + startPage && i < pages.length; i++) {
    var page = pages[i];
    newPages.push(page);
  }

  return newPages;
}

function htmlToPages(html, nodeHeights, view) {
  var pageHeight = view.pageHeight;
  var nodes = parseHTML(html);
  var pages = groupNodesByPage(nodes, nodeHeights, pageHeight);

  return {
    type: 'pages',
    props: {
      children: pages,
      view: view
    }
  };
}

function pagesToHtml(pages) {
  var nodes = pages.props.children.reduce(function (a, b) {
    return a.concat(b.props.children);
  }, []);
  var uniqueNodes = [];
  var realIndex = 0;

  // remove duplicate nodes
  for (var i = 0; i < nodes.length; i++) {
    nodes[i];
    if (nodes[i].props.index === realIndex) {
      uniqueNodes.push(nodes[i]);
      realIndex++;
    }
  }

  var html = parseNodes(uniqueNodes);

  return html;
}

function getNodeHeights(nodes) {
  var nodesHeight = [];

  Array.prototype.forEach.call(nodes, function (node, index) {
    if (node.tagName.toLowerCase() !== "p") {
      console.error("Unsupported content found!");
    }
    nodesHeight.push(node.clientHeight);
  });

  return nodesHeight;
}

function percentageToPage(p, pageSum) {
  if (p > 1) {
    console.error("Wrong parameter!");
    return null;
  } else {
    return parseInt(p * pageSum) + 1;
  }
}

// funcs used internally

function parseHTML(htmlString) {
  var nodes = [];
  var $html = document.createElement("div");

  $html.innerHTML = htmlString;
  $html = $html.childNodes;

  for (var i = 0; i < $html.length; i++) {
    if ($html[i].nodeType != 1) {
      continue;
    } else {
      nodes.push({
        type: $html[i].tagName.toLowerCase(),
        props: {
          children: $html[i].innerHTML
        }
      });
    }
  }
  return nodes;
}

function parseNodes(nodes) {
  var html = '';

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].type !== 'p') {
      console.error('Unsupported node found!');
      continue;
    } else {
      html += "<p>" + nodes[i].props.children + "</p>";
    }
  }

  return html;
}

function groupNodesByPage(nodes, nodeHeights, pageHeight) {
  var pages = [];
  var pageHeightSum = nodeHeights.reduce(function (a, b) {
    return a + b;
  }, 0);
  var pageSum = Math.ceil(pageHeightSum / pageHeight);

  nodes = nodes.map(function (node, index) {
    node.props.index = index;
    return node;
  });

  // long paragraph situation doesn't seem to affect this function
  // offset distance is always negtive or zero
  // the index will be of the paragraph with this offset at the end
  var getPageOffset = function getPageOffset(pageIndex) {
    var offset = 0;
    var i = 0;
    var index = void 0;

    if (pageIndex !== 0) {
      var nodeHeightSum = 0;
      while (nodeHeightSum <= pageHeight * pageIndex) {
        nodeHeightSum += nodeHeights[i];
        i++;
      }
      offset = nodeHeightSum - nodeHeights[i - 1] - pageIndex * pageHeight;
      index = i - 1;
    } else {
      index = 0;
    }

    return {
      offset: offset,
      index: index
    };
  };

  var getNodesOfPage = function getNodesOfPage(pageIndex) {
    var offsetObject = getPageOffset(pageIndex);
    var nodeStartIndex = offsetObject.index;
    var offset = offsetObject.offset;

    var i = nodeStartIndex;
    var nodeEndIndex = void 0;
    var pageNodes = [];

    var nodeHeightSum = offset + nodeHeights[nodeStartIndex];
    i++;

    if (nodeHeightSum < pageHeight) {
      while (nodeHeightSum <= pageHeight && i !== nodes.length) {
        nodeHeightSum += nodeHeights[i];
        i++;
      }
      nodeEndIndex = i - 1;
    } else {
      nodeEndIndex = nodeStartIndex;
    }

    for (var _i = nodeStartIndex; _i <= nodeEndIndex && _i <= nodes.length - 1; _i++) {
      pageNodes.push(nodes[_i]);
    }

    return [pageNodes, offset];
  };

  // finally
  for (var i = 0; i < pageSum; i++) {
    var array = getNodesOfPage(i);
    var _nodes = array[0];
    var offset = array[1];

    pages.push({
      props: {
        children: _nodes,
        style: {
          top: i * pageHeight,
          position: 'absolute',
          height: pageHeight
        },
        pageNo: i + 1,
        offset: offset
      },
      type: "page"
    });
  }

  return pages;
}