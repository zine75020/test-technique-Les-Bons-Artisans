import React, { Component } from "react";
import "./delete.css";

export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: "",
    };
  }
  componentDidMount() {
    fetch("/delete", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        index : 1,
    }),
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
        console.log(
            "POST Response",
            "Response Body -> " + JSON.stringify(responseData)
        )
    })
      
  }

  render() {
    return <button onClick={this.componentDidMount}>DELETE</button>;
  }
}
