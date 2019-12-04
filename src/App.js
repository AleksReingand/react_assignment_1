import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: "",
    password: ""
  }

  changeUserName = (event) => {
    this.setState ({
      userName: event.target.value
    })
  }

  changePassword = (event) => {
    this.setState ({
      password: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <p>Assignment 1</p>
        <UserInput
          changed={this.changeUserName}
          changedPassword={this.changePassword}/>
        <UserOutput 
          userName={this.state.userName}
          password={this.state.password}
          />
      </div>
    );
  }
}

export default App;
