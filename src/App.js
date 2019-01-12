import React from "react";
import "./App.css";
import * as BooksAPI from "./utils/BooksAPI";
import MyBooks from "./components/MyBooks";
import SearchBooks from "./components/SearchBooks";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.refreshShelf = this.refreshShelf.bind(this);
    this.state = {
      books: [],
      showSearchPage: false
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
        {this.state.showSearchPage ? (
          <SearchBooks
            onClickBack={() => this.setState({ showSearchPage: false })}
            refreshShelf={this.refreshShelf}
          />
        ) : (
          <MyBooks
            books={books}
            onClickSearch={() => this.setState({ showSearchPage: true })}
            refreshShelf={this.refreshShelf}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
