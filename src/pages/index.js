// Components
import React from 'react'
import { Link } from 'gatsby'
import IntroText from '../components/IntroText'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Text from '../components/Text'
import FunFacts from '../components/FunFacts'

const NUM_FACTS = 4

const IndexPage = () => (
  <div>
      <IntroText>
        <Text>my name is</Text>
        <Header>Damian</Header>
        <Text>and I am a...</Text>
        <FunFacts facts={NUM_FACTS} />
        <Link to="/about">about</Link>
      </IntroText>
      <Footer />
  </div>
)

export default IndexPage
