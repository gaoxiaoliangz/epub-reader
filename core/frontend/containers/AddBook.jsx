import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'

import { API_ROOT } from 'constants/APIS'
import { fetchDoubanBookSearchResults, clearBookSearch, fetchUserAuthInfo, handleNotification } from 'actions'
import { callApi } from 'utils'

import Branding from 'components/Branding'
import Notification from 'components/Notification'

class AddBook extends Component {
  constructor(props) {
    super(props)
    this.defaultState = {
      searchQuery: "",
      currentBook: -1,
      previewIndex: -1,
      conformed: false
    }
    this.state = this.defaultState
  }

  componentDidMount() {
    this.props.fetchUserAuthInfo()
  }

  handleAddBook(event) {
    event.preventDefault()

    let currentBook = this.state.currentBook
    let dataToPost = {}
    let bookContent = ReactDOM.findDOMNode(this.refs.bookContent).childNodes[0].value
    let isValid = false

    while (true) {
      if(currentBook !== -1) {
        dataToPost.doubanBook = this.props.book.searchResults.books[currentBook]
      }else{
        this.props.handleNotification('未选择书籍！')
        break
      }

      if(bookContent) {
        dataToPost.bookContent = bookContent
      }else{
        this.props.handleNotification('请输入书籍内容！')
        break
      }

      isValid = true
      break
    }

    dataToPost.doubanBook = JSON.stringify(dataToPost.doubanBook)

    if(isValid) {
      callApi(`${API_ROOT}books`, 'post', dataToPost).then(res => {
        this.props.handleNotification('添加成功')
      }).catch((err) => {
        console.error(err)
        this.props.handleNotification(err.message)
      })
    }
  }

  search(event) {
    this.setState({searchQuery: event.target.value})
    this.props.fetchDoubanBookSearchResults('search?count=5&q=' + event.target.value)
  }

  conformResult(index) {
    this.setState({
      currentBook: index,
      conformed: true
    })
  }

  showBookCover(index) {
    this.setState({
      previewIndex: index
    })
  }

  removeResult() {
    this.setState(this.defaultState)
    this.props.clearBookSearch()
  }

  render() {
    let book = null

    if(this.state.currentBook !== -1) {
      book = this.props.book.searchResults.books[this.state.currentBook]
    }

    return (
      <div className="page-add-book">
        <Branding user={this.props.user} />
        <Container>
          <Form className="content-container" method="post">
            <Notification notification={this.props.notification} />
            <h1 className="page-title">添加书籍</h1>
            {
              !this.state.conformed?(
                <Input onChange={this.search.bind(this)} value={this.state.searchQuery} hint="输入书名或其他书籍相关信息"/>
              ):null
            }
            {
              !this.state.conformed && this.props.book.searchResults?(
                <div className="drop-down">
                  <ul>
                    {
                      this.props.book.searchResults.books.map((item, index)=>{
                        return (
                          <li onMouseOver={this.showBookCover.bind(this, index)} onClick={this.conformResult.bind(this, index)} key={index}>
                            {item.title} ({item.author})
                            {
                              this.state.previewIndex === index?(
                                <div><img src={item.image} /></div>
                              ):null
                            }
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              ):null
            }
            {
              book?(
                <div className="book">
                  <span onClick={this.removeResult.bind(this)} className="icon icon-close">重新选择</span>
                  <img src={book.image} />
                  <div className="book-name">{book.title}</div>
                  <div className="book-author">{book.author[0]}</div>
                </div>
              ):null
            }
            <Textarea hint="粘贴书籍的全部文本内容" style={{height: 200}} name="book_content" ref="bookContent" />
            <Button onClick={this.handleAddBook.bind(this)} variant="raised">确认添加</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.user,
    book: state.book,
    notification: state.notification
  }),
  { fetchUserAuthInfo, fetchDoubanBookSearchResults, clearBookSearch, handleNotification }
)(AddBook)