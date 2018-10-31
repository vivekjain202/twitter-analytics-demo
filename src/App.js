import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    // component will mount is depricated so it's suggested to do this in intial setstate in constructor
    // IIFE is used for data sanitization
    (() => {
      axios({
        method: 'get',
        url: 'https://api.twitter.com/1.1/search/tweets.json?q=%23superbowl&result_type=recent',
        responseType: 'json',
        auth : "AAAAAAAAAAAAAAAAAAAAAGwx8wAAAAAAAdQnIR1RfF2iPbKV8hJcgEfKc80%3Dltm2VZlUJqgubBS0DOBQudPzZC1pAv18glqtXdWLbE19VlvdHz",
      })
        .then(data => {
          this.setState({ data: data.request.response });
        })
      return [];
    })();
    this.state = {
      data: [],
    }
    this.func = this.func.bind(this);
  }

  func() {
    return this.state.data.map((e, i) => <h3 key={i}>{e.title}</h3>)
  }

  render() {
    return (
      <div className="App">
        <HomePage />
        {this.func()}
      </div>
    );
  }
}

export default App;
