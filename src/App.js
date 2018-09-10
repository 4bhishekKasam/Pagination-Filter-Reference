import React, { Component } from "react";
import SearchBox from "./components/SearchBox";
import customData from "../src/customData.json";
import ListComponent from "./components/ListComponent";
import PaginationComponent from "./components/PaginationComponent ";
import "./App.css";

const pageSize = 10;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageFromCallback: 1,
      searchQuery: ""
    };
    this.getSearch = this.getSearch.bind(this);
    this.getPageNo = this.getPageNo.bind(this);
  }

  getSearch(data) {
    this.setState({ searchQuery: data });
    console.log(this.state.searchQuery);
  }
  getPageNo(selectedPage) {
    this.setState({ pageFromCallback: selectedPage });
  }

  render() {
    function noOfPage() {
      return Math.ceil(customData.length / pageSize);
    }

    return (
      <div className="container">
        <SearchBox callBack={this.getSearch} />
        <ListComponent
          searchQuery={this.state.searchQuery}
          data={customData}
          pageSize={pageSize}
          currentPage={this.state.pageFromCallback}
        />
        <PaginationComponent
          pages={noOfPage()}
          callbackFromApp={this.getPageNo}
        />
      </div>
    );
  }
}

export default App;
