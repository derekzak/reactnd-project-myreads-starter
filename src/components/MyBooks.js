import React, { Component } from "react";
import PropTypes from "prop-types";
import ListBooks from "./ListBooks";

class MyBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onClickSearch: PropTypes.func.isRequired,
    refreshShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, onClickSearch, refreshShelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <ListBooks
              books={books.filter(book => book.shelf === "currentlyReading")}
              bookshelfTitle="Currently Reading"
              refreshShelf={refreshShelf}
            />
            <ListBooks
              books={books.filter(book => book.shelf === "wantToRead")}
              bookshelfTitle="Want to Read"
              refreshShelf={refreshShelf}
            />
            <ListBooks
              books={books.filter(book => book.shelf === "read")}
              bookshelfTitle="Read"
              refreshShelf={refreshShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <button onClick={onClickSearch}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default MyBooks;
