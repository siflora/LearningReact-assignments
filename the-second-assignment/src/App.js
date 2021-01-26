import React, { Component } from 'react';
import './App.css';

class App extends Component {

	state = {
		input: ''
	}

  updateInputHandler = (event) => {
		const userInput = event.target.value;
		this.setState({input: userInput})
	};

	deleteCharHandler = (event, index) => {
		const charactors = [...this.state.input.split('')];
		charactors.splice(index, 1);
		this.setState({input:charactors.join('')})
	}

  render() {

		const stringArray = this.state.input.split('');

		let chars = (
			<div>
			{stringArray.map((char,index)=>{
			 return <CharComponent 
			 output={char}
			 index={index}
			 delete={this.deleteCharHandler}/>
			})
			}
			</div>
		)
    return (
      <div className="App">
			  <h1>It works!</h1>
        <input type='text' onChange={this.updateInputHandler} value={this.state.input}/>
				<p>{this.state.input.length}</p>
				<ValidationComponent length={this.state.input.length}/>
				{chars}
      </div>
    );
  }
}


const ValidationComponent = (props) => {
		return (
			props.length > 4 ? (
				<p>text long enough</p>
			) : (<p>text too short</p>))
		
}



const CharComponent = (props) => {

  const style = {
			display: 'inline-block',
			padding: '16px',
			textAlign: 'center',
			margin: '16px',
			border: '1px, solid, black'
	};

	return (
		
		<div style={style}>
		<p onClick={props.delete}>{props.output}</p>
		</div>
	)
}

export default App;
