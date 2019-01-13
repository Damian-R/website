import React from 'react'
import styled, { keyframes } from 'styled-components'
import _ from 'lodash'
import funFacts from '../utils/funFacts'
import HexImage from '../components/HexImage'

const Wrapper = styled.div`

`

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

const FactContainer = styled.section`
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    row-gap: 1em
`

// probably have to make this a react component to use states n stuff
const Fact = styled.section`
    cursor: pointer;
    text-align: center;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

const ArrowBox = styled.div`
    position: relative;
    background: #ffffff;
    border: 1px solid #c2e1f5;
    margin-top: 2.5rem;
    padding: 2rem 3rem 2rem 3rem;
    border-radius: 5px;
    animation: ${fadeIn} 0.5s ease-out;
    display: grid;
    grid-template-columns: 3fr 1fr;

    &::after, &::before {
        bottom: 100%;
        left: ${props => 25 * (props.arrowPos - 1) + 12.5}%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        transition: all 1s ease 0s;
    }

    &::after {
        border-color: rgba(255, 255, 255, 0);
        border-bottom-color: #ffffff;
        border-width: 30px;
        margin-left: -30px;
    }

    &::before {
        border-color: rgba(194, 225, 245, 0);
        border-bottom-color: #c2e1f5;
        border-width: 31px;
        margin-left: -31px;
    }
`

class FactList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selectedFact: null, clickedIndex: null }
    }

    render() {
        return (
            <Wrapper>
                <FactContainer>
                    {_.times(funFacts.length, i => (
                        <Fact bold={this.state.clickedIndex === i} onClick={() => this.setState({ selectedFact: funFacts[i], clickedIndex: i }) }>{funFacts[i].title}</Fact>
                    ))}
                </FactContainer>
                {this.state.selectedFact &&
                    <ArrowBox arrowPos={this.state.selectedFact.offset}>
                        <Wrapper>
                            {_.times(this.state.selectedFact.desc.length, i => (
                                <div style={{margin: "1rem 0 0 0"}} 
                                     dangerouslySetInnerHTML={{ __html: this.state.selectedFact.desc[i] }} />
                            ))}
                        </Wrapper>
                        <HexImage url={this.state.selectedFact.image} index={this.state.selectedFact.offset} />
                    </ArrowBox>
                }
            </Wrapper>
        )
    }
}

export default FactList