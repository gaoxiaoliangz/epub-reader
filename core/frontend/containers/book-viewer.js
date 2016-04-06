import React, { Component } from 'react'
import { Link } from 'react-router'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BookPageList from 'components/book-page-list'

import * as actions from 'actions'

import { genPageList } from 'utils/filters'
import { convertPercentageToPage } from 'utils/book'
import { delayStuff } from 'utils'
import configureStore from 'store/configureStore'

const store = configureStore()
import $ from 'jquery'



function loadBookContentFromCache(bookId) {
  return localStorage.getItem(`book${bookId}_content`)
}

function cacheBookContent(bookId, content) {
  console.log(typeof content);
  if(typeof content !== 'string' && typeof content === 'object') {
    content = JSON.stringify(content)
    localStorage.setItem(`book${bookId}_content`, content)
    return true
  }else if(typeof content === 'string'){
    localStorage.setItem(`book${bookId}_content`, content)
    return true
  }else{
    return false
  }
}



// if content not in cache, then fetched data will be cached
function mountBookContent(bookId, actions) {
  return new Promise(resolve => {
    actions.dispatchWrap((dispatch, getState) => {
      let bookContent = loadBookContentFromCache(bookId)
      if(bookContent) {
        actions.receiveBookContent(bookId, bookContent)
        resolve(getState)
      }else{
        actions.fetchBookContent(bookId).then(getState => {
          cacheBookContent(bookId, getState().book.content.nodes)
          resolve(getState)
        })
      }
    })
  })
}


function getUserReadingProgress(userId) {
  return {
    localProgress: '',
    cloudProgress: ''
  }
}

function getUserPreference(userId) {

}


class BookViewer extends Component {

  scrollToLoadPages() {
    let pageSum = this.props.book.content.pageSum
    let percentage = (document.body.scrollTop/(this.props.book.view.style.height*pageSum)).toFixed(4)

    this.props.actions.loadPages(convertPercentageToPage(percentage, pageSum))
  }

  // todo
  toggleBookPanel(e) {
    var y = e.pageY - $("body").scrollTop();
    var x = e.pageX;

    if(y < 90){
      $(".page-book-viewer .functions").slideDown();
    }else if($(".dia-wrap").length == 0){
      $(".page-book-viewer .functions").slideUp();
    }
  }

  constructor(props) {
    super(props)
    this.bookId = props.params.id
    this.state = {
      bookName: "loading ..."
    }
  }

  addEventListeners() {
    window.addEventListener("scroll", delayStuff(this.scrollToLoadPages, 100).bind(this))
    window.addEventListener("mousemove", this.toggleBookPanel.bind(this))
  }

  componentDidMount() {
    let mode = "VERTICAL"
    let screen = "HD"
    var book = this.props.book
    let actions = this.props.actions
    let bookId = this.bookId

    // todo
    let url = "/api/v0.1/books/" + bookId

    // get book info
    fetch(url).then(function(res){
      return res.json()
    }).then(function(json){
      this.setState({
        bookName: json.data[0].book_name
      })
    }.bind(this)).catch((err) => {
      console.log(err)
    })

    // todo: bug in mobile mode
    if($(window).width() < 768) {
      screen = "MOBILE"
    }

    actions.fetchBookContent3(bookId, state => {
      return `books/${state.book.id}/content`
    }).then(getState => {
      console.log(getState());
    })

    // mountBookContent(bookId, actions).then(getState => {

    // })
  }

  render() {
    let book = this.props.book
    let pages = []
    let quantity = 5
    let startPage = 1
    let offset = 2
    let height = "100%"

    if(book.content.nodes.length) {
      if(book.isPagesLoaded) {
        pages = genPageList(book.currentPage, quantity, offset, book.content.nodes, {pageHeight: book.view.style.height})
        height = book.content.pageSum * book.view.style.height
      }else{
        pages = [
          {
            props: {
              children: book.content.nodes,
              pageNo: "NA"
            },
            type: "page",
          }
        ]
      }
    }

    return (
      <div className="page-book-viewer">
        <div className="functions" style={{display: "none"}}>
          <div className="container">
            <span className="home">
              <Link to="/bookstore"></Link>
            </span>
            <span className="title">{this.state.bookName}</span>
            {
              (()=>{
                if(this.props.book.abc) {
                  return (
                    <span className="loc">{book.currentPage+"/"+book.content.pageSum}</span>
                  )
                }
              })()
            }
          </div>
        </div>
        <div>test</div>
        {
          (()=>{
            if(this.props.book.abc) {
              return (
                <BookPageList isCalculated={book.content.isCalculated} height={height} view={book.view} bookId={this.bookId} pages={pages} />
              )
            }
          })()
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.book
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookViewer)
