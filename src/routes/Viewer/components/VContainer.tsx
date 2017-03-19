import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions'
import { bindActionCreators } from 'redux'
import * as selectors from '../../../selectors'
import BookContainer from './BookContainer'
import VPanel from './VPanel'
import ProgressLabel from './ProgressLabel'
import _ from 'lodash'
import Loading from '../../../components/Loading'
import utils from '../../../utils'


interface Props { }

interface LocalState {
  // showPageInfo?: boolean
}

interface OtherProps {
  bookId?: string
  book?: {
    title: string
  }
  bookContent?: {
    nav: any
    flesh: TBookFlesh
  }
  session?: {
    determined: boolean
    user: {
      role: string
    }
  }
  isFetchingProgress?: boolean
  computed?: TBookPage[]
  config?: Viewer.Config
  actions?: typeof actions
  cloudProgress?: number
  viewerPercentage?: number
  showPanel?: boolean
}

const mapStateToProps = (state, ownProps) => {
  const config = selectors.viewer.config(state)
  const bookId = selectors.viewer.id(state)
  const book = selectors.entity('books', bookId)(state)
  const bookContent = selectors.entity('bookContents', bookId)(state)
  const bookProgress = selectors.entity('bookProgress', bookId)(state)
  const cloudProgress = _.get(bookProgress, 'percentage', 0)
  const computed = selectors.viewer.computed(bookId)(state)
  const { percentage: viewerPercentage, isFetching } = selectors.viewer.progress(bookId)(state)
  const { showPanel } = selectors.viewer.components(state)

  return {
    bookId,
    book,
    bookContent,
    isFetchingProgress: isFetching,
    session: state.session,
    computed,
    config,
    cloudProgress,
    viewerPercentage,
    showPanel
  }
}

class VContainer extends Component<Props & OtherProps, LocalState> {

  resizeLazily: typeof _.debounce
  handleScrollLazily: any

  constructor(props) {
    super(props)
    // this.resizeLazily = _.debounce(this.handleResize, 500, {
    //   maxWait: 1000
    // })
    // this.handleViewerClick = this.handleViewerClick.bind(this)
    // this.handleResize = this.handleResize.bind(this)
    // this.resizeLazily = this.resizeLazily.bind(this)
    // this.handleRawDataMount = this.handleRawDataMount.bind(this)
    // this.handelViewerMouseMove = this.handelViewerMouseMove.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleScrollLazily = _.debounce(this.handleScroll, 200, {
      maxWait: 1000
    })
  }

  componentDidMount() {
    this.addEventListeners()
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  handleScroll() {
    const { computed, bookId, config: { pageHeight, isScrollMode } } = this.props
    const pageCount = computed.length
    const totalHeight = pageCount * pageHeight
    const scrollTop = document.body.scrollTop
    const percentage = scrollTop / totalHeight

    if (isScrollMode) {
      this.props.actions.updateLocalProgress(bookId, {
        percentage,
        pageCount,
        timestamp: new Date().valueOf().toString(),
        page: pageCount * percentage
      })

      this.props.actions.updateBookProgress(bookId, percentage)
    }
  }

  addEventListeners() {
    window.addEventListener('scroll', this.handleScrollLazily)
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.handleScrollLazily)
  }

  // handleForward() {
  //   const { allPages, pageNo } = this.props
  //   this.props.actions.viewerJumpTo(pageNo / allPages.length)
  //   document.body.scrollTop = 0
  // }

  // handlebackward() {
  //   const { allPages, pageNo } = this.props
  //   this.props.actions.viewerJumpTo((pageNo - 2) / allPages.length)
  //   document.body.scrollTop = 0
  // }

  // handleRawDataMount(ele: HTMLElement) {
  //   this.props.actions.calcBook(this.props.bookId, ele)
  // }

  // handleViewerClick() {
  //   const { config: { isTouchMode } } = this.props

  //   if (isTouchMode) {
  //     this.props.actions.toggleViewerPanel()
  //     this.props.actions.toggleViewerProgressInfo()
  //   }
  // }

  // handleResize() {
  //   this.props.actions.configViewer({
  //     isCalcMode: false
  //   })
  // }

  // handelViewerMouseMove(event) {
  //   let dToScreenRight = utils.getScreenInfo().view.width - event.pageX
  //   this.setState({
  //     showPageInfo: dToScreenRight < 100
  //   })
  // }

  // reinitializeViewer() {
  //   // const { bookId } = this.props

  //   this.props.actions.configViewer({
  //     isCalcMode: true
  //   })

  //   this.setState({
  //     showPageInfo: false,
  //   })
  //   this.props.actions.toggleViewerPanel(false)
  //   this.props.actions.toggleViewerProgressInfo(false)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const viewChanged = !_.isEqualWith(this.props.config, prevProps.config, (valA, valB, key) => {
  //     if (key === 'isTouchMode' || key === 'isCalcMode' || key === 'isScrollMode' || key === 'theme') {
  //       return true
  //     }
  //   })

  //   if (viewChanged) {
  //     this.reinitializeViewer()
  //   }
  // }

  // componentDidMount() {
  //   window.addEventListener('resize', this.resizeLazily)
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.resizeLazily)
  // }

  /*renderBook() {
    const { bookContent, computedPages,
      config: { isCalcMode, pageHeight } } = this.props

    if (!bookContent.flesh) {
      return <Loading text="书籍获取中" center />
    }

    if (isCalcMode) {
      return (
        <div>
          <Loading text="书籍排版中" center />
          <BookRaw
            bookFlesh={bookContent.flesh}
            onRawDataMount={this.handleRawDataMount}
          />
        </div>
      )
    } else if (computedPages.length !== 0) {
      return (
        <div onClick={this.handleViewerClick}>

        </div>
      )
    } else {
      return <Loading text="准备中" center />
    }
  }*/

  render() {
    const { bookId } = this.props

    return (
      // <div onMouseMove={this.handelViewerMouseMove} >
      <div>
        <VPanel />
        {
          bookId && (
            <BookContainer />
          )
        }
        {/*<ProgressLabel/>*/}
      </div>
    )
  }
}

export default connect<OtherProps, {}, Props>(
  mapStateToProps as any,
  dispatch => ({
    actions: bindActionCreators(actions as {}, dispatch)
  })
)(VContainer)
