import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class Cards extends Component {
  constructor() {
    super();
    (() => {
      // component will mount is depricated so it's suggested to do this in intial setstate in constructor
      // IIFE is used for data sanitization
      // bearertoken : "AAAAAAAAAAAAAAAAAAAAAGwx8wAAAAAAAdQnIR1RfF2iPbKV8hJcgEfKc80%3Dltm2VZlUJqgubBS0DOBQudPzZC1pAv18glqtXdWLbE19VlvdHz",
      // axios({
      //   method: 'get',
      //   url: 'https://api.twitter.com/1.1/search/tweets.json?q=trending&untill=29-10-2018',
      //   headers: {
      //     'Authorization': "AAAAAAAAAAAAAAAAAAAAAGwx8wAAAAAAAdQnIR1RfF2iPbKV8hJcgEfKc80%3Dltm2VZlUJqgubBS0DOBQudPzZC1pAv18glqtXdWLbE19VlvdHz",
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Headers': 'Content-Type',
      //   }
      // })
        axios({
          method: 'get',
          url: 'https://jsonplaceholder.typicode.com/posts',
          responseType: 'json'
        })
        .then(data => {
          this.setState({ completeData: data.request.response, data: data.request.response.splice(data.request.response.length - 25) });
        })
      return [];
    })();
    this.state = {
      completeData: [],
      data: [],
    }
    this.cardBuilder = this.cardBuilder.bind(this);
  }
  cardBuilder() {
    return this.state.data.map((e, i) => <a key={i} href={e.title} onClick={(event) => this.clickHandler(e, event)}><div className="cardStyle">{e.body.substr(0, 30) + '....'}</div></a>)
  }

  clickHandler(e, event) {
    event.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <div id="Cards">
        {this.cardBuilder()}
      </div>
    )
  }
}

export default Cards;