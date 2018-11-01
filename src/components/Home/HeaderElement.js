import React, { Component } from 'react'

class HeaderElement extends Component {
  render() {
    return (
      <div id="HeaderElement">
        {this.props.text}
      </div>
    )
  }
}

export default HeaderElement;