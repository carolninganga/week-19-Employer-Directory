import React, { Component } from 'react';
import Form from './components/Form';
import Results from './components/Results';
import API from './API/API'
import './App.css';

class App extends Component {
  state = {
   allUser: [],
   filterResults: [],
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
git 
handleChange = e => {
  const searchTerm = e.target.value;
  const filtered = this.state.allUser.filter( user => user.name.first.indexOf(searchTerm) >= 0);
      this.setState({filterResults:filtered})
} 

handleSubmit = event => {
  event.preventDefault();
  this.getUsers(this.state.search);
};


render(){
  return (
    <div>
     <Form search={this.state.search}
          handleChange={this.handleChange}
           handleSubmit={this.handleSubmit} /> 
     <Results users={this.state.filterResults} /> 
    </div>
  );
}
}


export default App;
