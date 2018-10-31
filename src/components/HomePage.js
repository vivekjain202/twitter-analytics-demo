import React, { Component } from 'react';
import axios from 'axios';
 class HomePage extends Component {
  constructor() {
    super();
    // component will mount is depricated so it's suggested to do this in intial setstate in constructor
    // IIFE is used for data sanitization
    // bearertoken : "AAAAAAAAAAAAAAAAAAAAAGwx8wAAAAAAAdQnIR1RfF2iPbKV8hJcgEfKc80%3Dltm2VZlUJqgubBS0DOBQudPzZC1pAv18glqtXdWLbE19VlvdHz",
    (() => {
      // axios({
      //   method: 'get',
      //   url: 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular',
      //   responseType: 'json',
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'Content-Type': 'application/json',
      //   },
      //   withCredentials: true,
      //   credentials:'same-origin',
      // })
      axios.get('https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular',{
        responseType:'json',
        headers:{
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      })
        .then(data => {
          this.setState({ data: data.request.response.splice(data.request.response.length-5)});
        })
      return [];
    })();
    this.state = {
      data: [],
    }
    this.func = this.func.bind(this);
  }

  func() {
    return this.state.data.map((e, i) => <li key={i}><a href={e.title}>{e.body}</a></li>)
  }

  render() {
    return (
      <div>
        <ul style={{listStyle:'none'}}>
        {this.func()}
        </ul>
      </div>
    )
  }
}

export default HomePage;