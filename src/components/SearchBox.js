import React, { Component } from "react";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(e) {
    e.preventDefault();
    this.props.callBack(e.target.value);
    //  console.log(e.target.value);
  }

  render() {
    return (
      <div className="form-group ">

        <input
          type="text"
          className="form-control col-lg-1"
          id="SearchBox"
          onChange={this.onSearchHandler}
        />

      </div>
    );
  }
}
