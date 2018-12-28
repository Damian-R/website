import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
`

const QuickFact = styled.section`

`

const Number = styled.section`
    font-size: 2rem;
    background-color: red
`

const Info = styled.section`
    max-width: 100px;
`

export default () => (
    <Wrapper>
        <Number>
            50
        </Number>
        <Info>
            these are some words
        </Info>
    </Wrapper>
)