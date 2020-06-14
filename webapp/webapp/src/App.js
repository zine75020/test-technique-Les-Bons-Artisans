import React , {Component} from 'react';
import './App.css';
import Modify from './components/modify/modify'
import GetList from './components/getlist/getlist'

class App extends Component {

  constructor(props){
    super(props);
    this.state={apiResponse:""}
  }
  apiModify = () => {
    fetch("http://localhost:8080/modify")
  }
  


  render(){
    return (
      <div>
        <p>{this.state.apiResponse}</p>
        <GetList/>
      <Modify click={this.apiModify}/>
      </div>
       
    );
  }
  
}

export default App;
