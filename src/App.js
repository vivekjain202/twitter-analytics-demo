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
        url: 'https://jsonplaceholder.typicode.com/posts',
        responseType: 'json'
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

  componentDidUpdate(){
    setInterval(()=>{
      console.log('here')
      axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts',
        responseType: 'json'
      })
        .then(data => {
          this.setState({ data: data.request.response });
        })
      return [];
    },5000)
  }

  func() {
    return this.state.data.map((e, i) => <h3 key={i}>{e.title}</h3>)
  }
  


  componentWillUpdate() {
    console.log('here')
    // setInterval(()=>{
    //   axios({
    //     method : 'get',
    //     url : 'https://jsonplaceholder.typicode.com/posts',
    //     responseType : 'json'
    //   })
    //   .then(data=>{
    //     this.setState({ data : data.request.response});
    //   })
    // },5000)  
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
