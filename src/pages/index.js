// Components
import React from 'react'
import IntroText from '../components/IntroText'
import Particles from 'react-particles-js'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Name from '../components/Name'
import Text from '../components/Text'
import SlidingText from '../components/SlidingText'

// Configs
import particlesConfig from '../config/particles'

const funFacts = [
  'computer engineering student',
  'ex-volleyball player',
  'top 50 overwatch player',
  'aspiring software engineer',
  'another fact'
]

const IndexPage = () => (
    <Main>
      <Particles style={particlesConfig.style} params={particlesConfig.params} />
      <IntroText>
        <Text>my name is</Text>
        <Name>Damian</Name>
        <Text>and I am a...</Text>
        <SlidingText text='sliding text'></SlidingText>
      </IntroText>
      <Footer />
    </Main>
)

export default IndexPage
