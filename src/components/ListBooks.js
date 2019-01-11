import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookshelfTitle: PropTypes.string
  };

  render() {
    const { books, bookshelfTitle } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books && books.map(book => <Book key={book.id} book={book} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default ListBooks;
