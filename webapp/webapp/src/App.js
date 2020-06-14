import React , {Component} from 'react';
import './App.css';
import GetList from './components/getlist/getlist'
import Modify from './components/modify/modify'


class App extends Component {


  render(){
    return (
      <div>
        <GetList/>
        <Modify buttontitle={"modifier"}></Modify>
      </div>
       
    );
  }
  
}

export default App;
