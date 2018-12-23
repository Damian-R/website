import React from 'react'
import styled from 'styled-components'

const Name = styled.section`
  font-size: 3rem;
  font-weight: 900;
`

export default ({children}) => (
  <Name>{children}</Name>
)
