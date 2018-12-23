// Components
import React from 'react'
import IntroText from '../components/IntroText'
import Particles from 'react-particles-js'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Name from '../components/Name'
import Text from '../components/Text'
import FunFacts from '../components/FunFacts'

// Configs
import particlesConfig from '../config/particles'

const NUM_FACTS = 4

const IndexPage = () => (
    <Main>
      <Particles style={particlesConfig.style} params={particlesConfig.params} />
      <IntroText>
        <Text>my name is</Text>
        <Name>Damian</Name>
        <Text>and I am a...</Text>
        <FunFacts facts={NUM_FACTS} />
      </IntroText>
      <Footer />
    </Main>
)

export default IndexPage
