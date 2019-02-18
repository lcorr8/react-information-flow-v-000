import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.color)
    this.setState({color: nextProps.color, childColor: getReducedColor(nextProps.color)})
  }
  handleGrandchildClick = (event) => {
    event.stopPropagation()
    event.preventDefault()
    var second = getReducedColor(getRandomColor())
    this.setState({childColor: second})
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div className="tier2" style={{backgroundColor: this.state.color, color: this.state.childColor}}
      onClick={this.props.handleThisClick}
      >
        <Tier3 color={this.state.childColor} handleClick={this.handleGrandchildClick} />
        <Tier3 color={this.state.childColor} handleClick={this.handleGrandchildClick} />
      </div>
    )
  }
}
