import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import Nav from './Nav'

const Transition = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: 500 },
    delay: 500,
    beforeChildren: true,
  },
  exit: { opacity: 0, transition: { duration: 500 } },
})

export default ({ children, ...props }) => (
  <PoseGroup>
    <Transition key={props.location.pathname}>
      <Nav fadeIn={true} />
      {children}
    </Transition>
  </PoseGroup>
)
