import React from 'react'
import posed, { PoseGroup } from 'react-pose'

const Transition = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: 500 },
    delay: 500,
    beforeChildren: true
  },
  exit: { opacity: 0, transition: { duration: 500 } }
})

export default ({children, ...props}) => (
  <PoseGroup>
    <Transition key={props.location.pathname}>{children}</Transition>
  </PoseGroup>
)
