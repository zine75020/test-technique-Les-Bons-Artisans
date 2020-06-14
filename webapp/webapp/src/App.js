import React , {Component} from 'react';
import './App.css';
import GetList from './components/getlist/getlist'
import Delete from './components/delete/delete'

class App extends Component {

 
  

  render(){
    return (
      <div>
        <GetList/>
      </div>
       
    );
  }
  
}

export default App;
