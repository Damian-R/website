import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  letter-spacing: 2px;
`

export default ({ children }) => <Wrapper>{children}</Wrapper>
