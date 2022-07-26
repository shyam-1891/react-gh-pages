import React from 'react'

function H2Heading(props) {
  return (    
    <h4 className="title">{props.heading}</h4>
  )
}

export default H2Heading

/* To set defaulf prop value */
H2Heading.defaultProps = {
    heading: "Your title default value"
}