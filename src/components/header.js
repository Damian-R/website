import React from 'react'
import styled from 'styled-components'

const Header = styled.section`
  font-size: 4rem;
  font-family: 'Open Sans';
  letter-spacing: 3px;
  font-weight: 700;
`

export default ({ children }) => <Header>{children}</Header>
