import React from 'react'

function H2Heading(props) {
  return (
    <h2 className='cusheadingh2'>{props.heading}</h2>
  )
}

export default H2Heading

/* To set defaulf prop value */
H2Heading.defaultProps = {
    heading: "Your title default value"
}