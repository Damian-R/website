import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: fixed;
  margin: 10% 15%;
`

export default ({ children }) => <Wrapper>{children}</Wrapper>
