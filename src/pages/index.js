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
        <a href="https://damian-reiter.herokuapp.com" style={{ textDecoration: 'none' }}>visit old site</a>
      </IntroText>
      <Footer />
    </Main>
)

export default IndexPage
