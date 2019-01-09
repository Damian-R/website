import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

const quickFacts = [
    {
        text: 'years old',
        value: 19
    },
    {
        text: 'another fact',
        value: 88
    },
    {
        text: 'years old (in dog years)',
        value: 138
    }
]

const Wrapper = styled.section`
`

const QuickFactList = styled.section`
    display: grid;
    margin-left: 3%;
    grid-template-columns: repeat(3, 1fr);
`

const QuickFact = styled.section`
    display: grid;
    grid-template-columns: 1fr 5fr;
`

const Number = styled.section`
    font-size: 3rem;
    text-align: right;
`

const Info = styled.section`
    line-height: 1em;
    max-width: 7em;
    position: relative
`

const Text = styled.section`
    position: absolute;
    bottom: 1em;
    left: 5px;
`

// forEach didn't work as expected so I used lodash
export default () => (
    <Wrapper>
        <QuickFactList>
            {_.times(quickFacts.length, (i) => (
                <QuickFact>
                    <Number>{quickFacts[i].value}</Number>
                    <Info><Text>{quickFacts[i].text}</Text></Info>
                </QuickFact>
            ))}
        </QuickFactList>
    </Wrapper>
)