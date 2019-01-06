import React from 'react'
import { Link } from 'gatsby'
import PageWrapper from '../components/PageWrapper'
import Header from '../components/Header'
import QuickFacts from '../components/QuickFacts'

const AboutPage = () => (
  <PageWrapper>
    <Header>About Me</Header>
    <QuickFacts />
  </PageWrapper>
)

export default AboutPage
