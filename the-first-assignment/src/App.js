import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput'

class App extends Component {
  state = {
      username: [
          {surname:'Han', firstName:'Flora'},
          {surname:'Guth', firstName:'Per'}
      ]
  };

  renderUsernameHandler (event) {
      this.setState({
          username: [
          {surname:'Han', firstName:event.target.value},
          {surname:'Guth', firstName:'Perper'}
          ]
      })
  }

  render() {
    return (
      <div className="App">
      <UnserOutput username='Flora'/>
      <UserInput username='Flora' input={this.renderUsernameHandler}>Or you want to use a different name?</UserInput>

      <UnserOutput username={this.state.username[1].firstName}/>
      <UserInput username={this.state.username[1].firstName} input={this.renderUsernameHandler}>Or you want to use a different name?</UserInput>

      <UnserOutput username={this.state.username[0].firstName}/>
      <UserInput username={this.state.username[0].firstName} input={this.renderUsernameHandler.bind(this)}>Or you want to use a different name?</UserInput>
      </div>
    );
  }
}

const UnserOutput = (props) =>{
    return (
    <div>
        <p>
    I do not really know what to say at this particular moment except that I hope this code would work.
    And I'd like to 
        </p>
        <p>And I'd like to put my name {props.username} on my work proudly.</p>
    </div>
    )}

export default App;
