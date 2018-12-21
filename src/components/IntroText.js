import React from 'react'
import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
    from {
        transform: translate(-50%, -43%);
    }

    to {
        transform: translate(-50%, -50%);
    }
`

const Wrapper = styled.section`
    padding: 4rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 2px;
    animation: ${slideUp} 1s ease-out;
`

export default ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
)