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
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }
  refreshShelf() {
    BooksAPI.getAll().then(books => {
      this.setState(prevState => ({
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
            <SearchBooks refreshShelf={this.refreshShelf} />
          )}
        />
        }
      </div>
    );
  }
}

export default BooksApp;
