import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeInSlideUp = keyframes`
    from {
        opacity: 0;
        transform: translate(0, 5%);
    }

    to {
        opacity: 1;
        transform: translate(0, 0);
    }
`

const Wrapper = styled.div`
    position: fixed;
    top: 15%;
    right: 15%;
    left: 15%;
    animation: ${fadeInSlideUp} 0.7s ease-out
`

export default ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
)