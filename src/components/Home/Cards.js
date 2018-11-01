import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';

class Cards extends Component {
  constructor() {
    super();
    (() => {
      // API key for alpha vintage : MF092CWY8ROD
      // component will mount is depricated so it's suggested to do this in intial setstate in constructor
      // IIFE is used for data sanitization
      // bearertoken : "AAAAAAAAAAAAAAAAAAAAAGwx8wAAAAAAAdQnIR1RfF2iPbKV8hJcgEfKc80%3Dltm2VZlUJqgubBS0DOBQudPzZC1pAv18glqtXdWLbE19VlvdHz",
      // axios({
      //   method: 'get',
      //   url: 'https://api.twitter.com/1.1/search/tweets.json?q=trending&untill=29-10-2018/',
      //   headers: {
      //     'Authorization': "AAAAAAAAAAAAAAAAAAAAAGwx8wAAAAAAAdQnIR1RfF2iPbKV8hJcgEfKc80%3Dltm2VZlUJqgubBS0DOBQudPzZC1pAv18glqtXdWLbE19VlvdHz",
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Headers': 'Content-Type',
      //   }
      // })
        axios({
          method: 'get',
          url: 'https://api.coinmarketcap.com/v2/listings/',
          responseType: 'json'
        })
        .then(fetchedData => {
          let data = fetchedData.data.data;
          this.setState({ completeData: data, data: data});
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
    return this.state.data.map((e, i) => <Link to={`/currency/${e.id}`} key={i}><div className="cardStyle">{e.name}</div></Link>)
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