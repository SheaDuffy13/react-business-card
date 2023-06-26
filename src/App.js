import './App.css';
import React from 'react';
import CardDisplay from './components/CardDisplay';
import CardForm from './components/CardForm';

export default class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      linkedIn: "",
      gitHub: ""
    }
  }

  updateState = (stateKey, newValue) => {
    this.setState({[stateKey]: newValue})
  }

  render() {
    return (
      <div className="App">
        <CardForm card={this.state} updateState={this.updateState}/>
        <CardDisplay card={this.state}/>
      </div>
  )}
  }


// export default App;
