import React, { Component } from "react";
import PropTypes from "prop-types";
import ListBooks from "./ListBooks";
import * as BooksAPI from "../utils/BooksAPI";

class SearchBooks extends Component {
  static propTypes = {
    onClickBack: PropTypes.func.isRequired,
    refreshShelf: PropTypes.func.isRequired
  };
  state = {
    books: [],
    query: ""
  };
  updateQuery = query => {
    BooksAPI.search(query).then(books => {
      this.setState(() => ({
        books,
        query: query
      }));
    });
  };

  render() {
    const { books, query } = this.state;
    const { onClickBack, refreshShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={onClickBack}>
            Close
          </button>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              className="search-books"
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ListBooks books={books} refreshShelf={refreshShelf} />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
