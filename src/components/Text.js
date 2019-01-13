import React from 'react'
import styled from 'styled-components'

const Text = styled.section`
  margin: ${props => props.margin};
  font-size: ${props => props.size};
`

export default (props) => <Text margin={props.margin} size={props.size}>{props.children}</Text>
