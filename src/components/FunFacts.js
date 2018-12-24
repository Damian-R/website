import React from 'react'
import FadingCycleText from '../components/FadingCycleText'
import styled from 'styled-components'
import _ from 'lodash'

const SECONDS_TO_STAGGER = 0.75

const funFacts = _.shuffle([
  'computer engineering student',
  'hackathon winner',
  'top 50 overwatch player',
  'aspiring software engineer',
  'clean coder',
  'dad joke lover',
  'amateur guitarist',
  'dog person',
  'thing',
])

const Wrapper = styled.section`
  padding: 5%;
`

// len / size = # sub arrays
class FunFacts extends React.Component {
  constructor(props) {
    super(props)
    this.chunkedFacts = []
    _.times(props.facts, () => this.chunkedFacts.push([]))
    for (let i = 0; i < funFacts.length; i++) {
      this.chunkedFacts[i % props.facts].push(funFacts[i])
    }
  }

  render() {
    return (
      <Wrapper>
        {_.times(this.props.facts, i => (
          <FadingCycleText
            texts={this.chunkedFacts[i]}
            key={i}
            delay={SECONDS_TO_STAGGER * i * 1000}
          />
        ))}
      </Wrapper>
    )
  }
}

export default FunFacts
