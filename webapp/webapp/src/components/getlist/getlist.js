import React, { Component } from "react";
import "./getlist.css";
import ReactDOM from 'react-dom';




export default class getlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.Delete = this.Delete.bind(this)
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
  Delete(index) {
    fetch("/delete", {
      method: "POST",
      mode: "cors",
      body: {
        "index": 1,
      },
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
    
    
    const SimpleList = () => (
      <ul>
        
        {this.state.list?.map((item , indeX) => {
          return (
            <div>
              <li key={item}>
                Name : {item.name} - Price : {item.price} - Rating :{" "}
                {item.rating} - Warranty Years : {item.warranty_years}
              </li>
              <button onClick={this.Delete(indeX)}>DELETE :</button>
            </div>
          );
        })
        }
      </ul>
    );

    

    return (
     
      <div className="list">
            <SimpleList/>
      </div>
    );
  }
}
