import React from 'react'
import IntroText from '../components/IntroText'
import Particles from 'react-particles-js'
import particlesConfig from '../config/particles'
import Footer from '../components/Footer'
import Main from '../components/Main'

const IndexPage = () => (
    <Main>
      <Particles style={particlesConfig.style} params={particlesConfig.params} />
      <IntroText>
        <h1>Something is coming</h1>
        <p>Under construction</p>
        <p></p>
      </IntroText>
      <Footer />
    </Main>
)

export default IndexPage
