import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    padding: 4rem
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 2px
`

export default ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
)