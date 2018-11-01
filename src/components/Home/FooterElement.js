import React, { Component } from 'react'

class FooterElement extends Component {
  render() {
    return (
      <div id="FooterElement">
        {this.props.text}
      </div>
    )
  }
}

export default FooterElement;