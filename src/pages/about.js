import React from 'react'
import { Link } from 'gatsby'
import TextWrapper from '../components/TextWrapper'
import Header from '../components/Header'
import QuickFacts from '../components/QuickFacts'

const AboutPage = () => (
  <TextWrapper>
    <Header>About Me</Header>
    <QuickFacts />
    <Link to="/">Home</Link>
  </TextWrapper>
)

export default AboutPage
