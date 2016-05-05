import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBookList } from 'actions'
import { Link } from 'react-router'

class ManageBooks extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBookList('newest')
  }

  render() {
    let bookListNewest = this.props.bookListNewest?this.props.bookListNewest:null

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Date created</td>
              <td>Actions</td>
            </tr>
            {bookListNewest?bookListNewest.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.dateCreated}</td>
                  <td><a href="#">Delete</a></td>
                </tr>
              )
            }):null}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { bookList },
    entities: { books }
  } = state

  const genList = (whichPagination) => (
    whichPagination?whichPagination.ids.map(id => books[id]):[]
  )

  return {
    bookListNewest: genList(bookList['newest'])
  }
}

export default connect(
  mapStateToProps,
  { fetchBookList }
)(ManageBooks)
