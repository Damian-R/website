import React from 'react'
import FadingCycleText from '../components/FadingCycleText'
import styled from 'styled-components'
import _ from 'lodash'

const SECONDS_TO_STAGGER = 0.75

const funFacts = [
  'computer engineering student',
  'ex-volleyball player',
  'top 50 overwatch player',
  'aspiring software engineer',
  'another fact',
  'more facts',
  'this is another thing'
]

const Wrapper = styled.section`
  padding: 5%
`

class FunFacts extends React.Component {
  constructor(props) {
    super(props)
    this.chunkedFacts = _.chunk(_.shuffle(funFacts), props.facts)
    console.log(this.chunkedFacts)
  }

  render() {
    return ( <Wrapper>
      {_.times(this.props.facts, i =>
        <FadingCycleText texts={this.chunkedFacts[i]} key={i} delay={SECONDS_TO_STAGGER*i*1000} />
      )}
    </Wrapper>)
  }
}

export default FunFacts
