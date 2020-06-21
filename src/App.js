import React, { Component } from 'react';
import Form from './components/Form';
import API from './API/API'
import './App.css';

class App extends Component {
  state = {
   allUser: [{}],
   filterResults: [{}],
}
 
componentDidMount(){
  API.getUsers()
  .then( users => {
    this.setState({
      allUser: users.data.results,
      filterResults: users.data.results  
    });
  }).catch( e => console.log(e))
}

handleChange = e => {
  const searchTerm = e.target.value;
  const newFilteredUsers =
    this.state.allUser
      .filter( user => user.name.first.indexOf(searchTerm) >= 0);
      this.setState({filterResults:newFilteredUsers})
} 

render(){
  return (
    <div>
     <Form />  
    </div>
  );
}
}


export default App;
