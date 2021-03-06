import React from "react";
import "./App.css";
import * as BooksAPI from "./utils/BooksAPI";
import MyBooks from "./components/MyBooks";
import SearchBooks from "./components/SearchBooks";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.refreshShelf = this.refreshShelf.bind(this);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    this.refreshShelf();
  }
  componentDidUpdate() {
    this.refreshShelf();
  }
  refreshShelf() {
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
        <Route
          exact
          path="/"
          render={({ history }) => (
            <MyBooks books={books} refreshShelf={this.refreshShelf} />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBooks shelfBooks={books} refreshShelf={this.refreshShelf} />
          )}
        />
        }
      </div>
    );
  }
}

export default BooksApp;
