import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: fixed;
  top: 10%;
  bottom: 0;
  left: 15%;
  right: 15%
`

export default ({ children }) => <Wrapper>{children}</Wrapper>
