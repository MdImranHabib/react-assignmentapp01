import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{
  state = {
    username: "Nahidul Islam Prince"
  };

  userNameChagedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return(
      <div className='App'>
        <ol>
          <li>Create two new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragrangs</li>
          <li>Output multiple UserOutput components in the App component (any paragrangh text of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>pass the event-handler method referemce to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput nameChanged = {this.userNameChagedHandler} currentName = {this.state.username} />
        <UserOutput userName = "Md. Imran Habib" />
        <UserOutput userName = "Md. Zahidul Islam" />
        <UserOutput userName = {this.state.username} />
      </div>
    );
  }
}

export default App;
