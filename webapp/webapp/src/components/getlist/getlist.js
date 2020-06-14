import React, { Component } from "react";
import "./getlist.css";
import axios from "axios";

export default class getlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch("/getlist", {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          list: response,
        });
      });
  }

  render() {
    console.log(this.state.list);
    const SimpleList = () => (
      <ul>
        {this.state.list?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    );

    return (
      <div>
        <div>
          <SimpleList />
        </div>
      </div>
    );
  }
}

// in h1 (at getlist.js:26)
// in div (at getlist.js:24)
// in getlist (at App.js:22)
// in div (at App.js:20)
// in App (at src/index.js:9)
// in StrictMode (at src/index.js:8)
