import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookshelfTitle: PropTypes.string,
    refreshShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, bookshelfTitle, refreshShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books &&
              Array.isArray(books) &&
              books.map(book => (
                <Book key={book.id} book={book} refreshShelf={refreshShelf} />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default ListBooks;
