import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../utils/BooksAPI";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    refreshShelf: PropTypes.func.isRequired
  };
  state = {
    selectValue: this.props.book.shelf
  };
  handleChange = shelf => {
    BooksAPI.update(this.props.book, shelf).then(books => {
      this.setState(() => ({
        selectValue: shelf
      }));
    });
    this.props.refreshShelf();
  };

  render() {
    const { book } = this.props;
    const { selectValue } = this.state;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks &&
                  book.imageLinks.smallThumbnail})`
              }}
            />
            <div className="book-shelf-changer">
              <select
                onChange={event => this.handleChange(event.target.value)}
                value={selectValue || "none"}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors &&
              book.authors.map(author => (
                <div className="book-author" key={author}>
                  {author}
                </div>
              ))}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
