import './App.css';
import { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render = () => {
    return (
      <div className="App">
        <Form />
      </div>
    )

  }
}

export default App;
