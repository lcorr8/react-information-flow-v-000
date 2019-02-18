import React from 'react'


const Tier3 = (props) => (
  // this component does not need to change (but feel free to change however you like!)
  <div className="tier3" 
  style={{backgroundColor: props.color, color: props.color}}
  onClick={props.handleClick}
  ></div>
)

export default Tier3
