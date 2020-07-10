
import React, { Component } from 'react';
import './App.css';
import API from './utils/API'
import Form from './components/Form';
import Results from './components/Results';


class App extends Component {

  state = {
    allUsers: [],
    filteredResults: [],
    searchTerm: ""
  }


  componentDidMount() {
    API.getUsers()
    .then(users => {
      this.setState({
        allUsers: users.data.results,
        filteredResults: users.data.results
      })
    })
  }

  handleChange = e => {
    const searchTerm = e.target.value;
    const newFilteredUsers = this.state.allUsers.filter(user => user.name.first.indexOf(searchTerm)>=0 || user.name.last.indexOf(searchTerm)>=0 || user.email.indexOf(searchTerm)>=0 || user.phone.indexOf(searchTerm)>=0 || user.location.city.indexOf(searchTerm)>=0 || user.location.country.indexOf(searchTerm)>=0);
    this.setState({filteredResults: newFilteredUsers})
  }

  handleFormSubmit = e => {
    const searchTerm = e.target.value;
    const newFilteredUsers = this.state.allUsers.filter(user => user.name.first.indexOf(searchTerm)>=0);
    this.setState({filteredResults: newFilteredUsers})
  }

  render() {
    return (
      <>
      <Form 
      handleChange={this.handleChange}
      searchTerm={this.state.searchTerm}
      handleFormSubmit={this.handleFormSubmit}
      />
      <Results users={this.state.filteredResults}/>
      </>
    );
  }

}

export default App;


















// import React, { Component } from "react";
// import Form from "./components/Form";
// import Results from "./components/Results";
// import API from "./API/API";
// import "./App.css";

// class App extends Component {
//   state = {
//     allUser: [],
//     filterResults: [],
//     searchTerm: "",
//   };

//   componentDidMount() {
//     API.getUsers()
//       .then((users) => {
//         this.setState({
//           allUser: users.data.results,
//           filterResults: users.data.results,
//         });
//       })
//       .catch((e) => console.log(e));
//   }

//   handleChange = e => {
//     const searchTerm = e.target.value;
//     const filtered = this.state.allUsers.filter(user => user.name.first.indexOf(searchTerm)>=0 || user.name.last.indexOf(searchTerm)>=0 || user.email.indexOf(searchTerm)>=0 || user.phone.indexOf(searchTerm)>=0 || user.location.city.indexOf(searchTerm)>=0 || user.location.country.indexOf(searchTerm)>=0);
//     this.setState({filteredResults: filtered})
//   }



//   // handleChange = e => {
//   //   const searchTerm = e.target.value;
//   //   const filtered = this.state.allUsers.filter(user => user.name.first.indexOf(searchTerm)>=0 || user.name.last.indexOf(searchTerm)>=0 || user.email.indexOf(searchTerm)>=0 || user.phone.indexOf(searchTerm)>=0 || user.location.city.indexOf(searchTerm)>=0 || user.location.country.indexOf(searchTerm)>=0);
//   //   this.setState({filteredResults: filtered})
//   // }
 

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const searchTerm = event.target.value;
//     const filtered = this.state.allUser.filter(
//       (user) => user.name.first.indexOf(searchTerm) >= 0
//     );
//     this.setState({ filterResults: filtered });
//   };

//   render() {
//     return (
//       <div>
//         <Form
//           search={this.state.search}
//           searchTerm={this.state.searchTerm}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         />
//         <Results users={this.state.filterResults} />
//       </div>
//     );
//   }
// }

// export default App;
