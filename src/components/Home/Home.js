import React, { Component } from 'react'
import Cards from './Cards';
import HeaderElement from './HeaderElement';
import FooterElement from './FooterElement';
class Home extends Component {
  render() {
    return (
      <div id="Home">
          <HeaderElement text={`Home Page`}/>
          <Cards/>
          <FooterElement text={`Home Page Footer`}/>
      </div>
    )
  }
}

export default Home;