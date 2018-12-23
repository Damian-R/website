import React from 'react'
import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
    from {
        transform: translate(0, 5%);
    }

    to {
        transform: translate(0, 0);
    }
`

const Wrapper = styled.section`
    padding: 4rem;
    position: fixed;
    width: 650px;
    top: 10%;
    left: 10%;
    letter-spacing: 2px;
    animation: ${slideUp} 1s ease-out;
`

export default ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
)
