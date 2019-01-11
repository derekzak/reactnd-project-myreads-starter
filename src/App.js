import React from "react";
import "./App.css";
import * as BooksAPI from "./utils/BooksAPI";
import MyBooks from "./components/MyBooks";
import SearchBooks from "./components/SearchBooks";

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
            onClickBack={() => this.setState({ showSearchPage: false })}
          />
        ) : (
          <MyBooks
            books={books}
            onClickSearch={() => this.setState({ showSearchPage: true })}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
