import React from 'react'
import { Link } from 'gatsby'
import TextWrapper from '../components/TextWrapper'
import Text from '../components/Text'
import Header from '../components/Header'
import QuickFacts from '../components/QuickFacts'

const AboutPage = () => (
  <TextWrapper>
    <Header>About Me</Header>
    <QuickFacts />
    <Text>abcd</Text>
    <Link to="/">Home</Link>
  </TextWrapper>
)

export default AboutPage
