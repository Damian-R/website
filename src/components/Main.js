import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { createGlobalStyle } from 'styled-components'
import Nav from './Nav'

// global styles
const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
`

const Transition = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: 600, ease: 'easeInOut' },
    delay: 500,
    beforeChildren: true,
  },
  exit: { opacity: 0, transition: { duration: 600, ease: 'easeInOut' } },
})

export default ({ children, ...props }) => (
  <PoseGroup>
    <Transition key={props.location.pathname}>
      <Nav fadeIn={true} />
      {children}
      <GlobalStyle key={props.location.pathname} />
    </Transition>
  </PoseGroup>
)
