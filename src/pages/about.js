import React from 'react'
import PageWrapper from '../components/PageWrapper'
import Header from '../components/Header'
import QuickFacts from '../components/QuickFacts'
import FactList from '../components/FactList'

const AboutPage = () => (
  <PageWrapper>
    <Header>About Me</Header>
    <QuickFacts />
    <FactList />
  </PageWrapper>
)

export default AboutPage
