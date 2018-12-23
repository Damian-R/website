import React from 'react'
import { Link } from 'gatsby'
import Main from '../components/Main'
import Particles from 'react-particles-js'
import Footer from '../components/Footer'
import particlesConfig from '../config/particles'
import Text from '../components/Text'

const AboutPage = () => (
  <div>
    <Text>About Me</Text>
    <Link to="/">Home</Link>
    <Footer />
  </div>
)

export default AboutPage
