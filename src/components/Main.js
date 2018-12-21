import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0 };
  to   { opacity: 1 };
`

const Main = styled.section`
  animation: ${fadeIn} 1.5s
`

export default ({children}) => (
    <Main>{children}</Main>
)