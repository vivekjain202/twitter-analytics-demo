import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HeaderElement from '../Home/HeaderElement';
import FooterElement from '../Home/FooterElement';
import './userStyle.css';
class User extends Component {
  constructor(props){
    super(props);
    (()=>{
      axios({
      method: 'get',
      url: `https://api.coinmarketcap.com/v2/ticker/${props.match.params.id}/`,
      responseType: 'json'
    }).then(fetchedData => {
      this.setState({...fetchedData.data.data})
    })})();
    this.state={
      analytics : ''
    };
    this.displayTicker = this.displayTicker.bind(this);
    this.displayAnalytics = this.displayAnalytics.bind(this);
  }

  displayTicker(){
    console.log(this.state);
    return (
      <table className='tableStyle'>
      <caption>Basic Product Information</caption>
        <tr>
          <td>Circulating Suppy</td>
          <td>{this.state.circulating_supply || "Null"}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{this.state.name}</td>
        </tr>
        <tr>
          <td>Rank</td>
          <td>{this.state.rank}</td>
        </tr>
        <tr>
          <td>Total Spply</td>
          <td>{this.state.total_supply}</td>
        </tr>
      </table>
    )
  }
  displayAnalytics(){
    this.setState({analytics:
      <table className="tableStyle">
        <tr>
          <td>Price</td>
          <td>{this.state.quotes.USD.price}</td>
        </tr>
        <tr>
          <td>Volume 24 hour</td>
          <td>{this.state.quotes.USD.volume_24h}</td>
        </tr>
        <tr>
          <td>Market Capital</td>
          <td>{this.state.quotes.USD.market_cap}</td>
        </tr>
        <tr>
          <td>Percentage Change in 1 hour</td>
          <td>{this.state.quotes.USD.percent_change_1h || 0}%</td>
        </tr>
        <tr>
          <td>Percentage Change in 24 hour</td>
          <td>{this.state.quotes.USD.percent_change_24h || 0}%</td>
        </tr>
        <tr>
          <td>Percentage Change in 7 day</td>
          <td>{this.state.quotes.USD.percent_change_7d || 0}%</td>
        </tr>
      </table>
    });
  }

  render() {
    return (
      <div id="User">
        <HeaderElement text={`Ticker Page Header`}/>
        <span><input type="button" value="Analytics" placeholder="Analytics" onClick={this.displayAnalytics}/><Link to="/" >Home</Link></span>        <div>{this.state.analytics}</div>
        <div id="DisplayTicker">{this.displayTicker()}</div>
        <FooterElement text={`Ticker Page Footer`}/>
      </div>
    )
  }
}

export default  User;