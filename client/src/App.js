import React, { Component } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import API from "./API/API";
import "./App.css";

class App extends Component {
  state = {
    allUser: [],
    filterResults: [],
    searchTerm: "",
  };

  componentDidMount() {
    API.getUsers()
      .then((users) => {
        this.setState({
          allUser: users.data.results,
          filterResults: users.data.results,
        });
      })
      .catch((e) => console.log(e));
  }

  handleChange = (e) => {
    const searchTerm = e.target.value;
    const filtered = this.state.allUser.filter(
      //(user) => user.name.first.indexOf(searchTerm) >= 0
      (user) =>
        (user.name.first + user.name.last + user.email + user.phone + user.location.city + user.location.state)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    //  || user.name.last.indexOf(searchTerm)>=0 || user.email.indexOf(searchTerm)>=0 || user.phone.first.indexOf(searchTerm)>=0 || user.location.city.indexOf(searchTerm)>=0 || user.location.state.indexOf(searchTerm)>=0 );
    this.setState({ filterResults: filtered });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.value;
    const filtered = this.state.allUser.filter(
      (user) => user.name.first.indexOf(searchTerm) >= 0
    );
    this.setState({ filterResults: filtered });
  };

  render() {
    return (
      <div>
        <Form
          search={this.state.search}
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Results users={this.state.filterResults} />
      </div>
    );
  }
}

export default App;
