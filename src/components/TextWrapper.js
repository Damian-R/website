import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 2rem;
  position: fixed;
  top: 10%;
  left: 15%;
`

export default ({ children }) => <Wrapper>{children}</Wrapper>
