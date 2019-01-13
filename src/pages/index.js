// Components
import React from 'react'
import IntroText from '../components/IntroText'
import Header from '../components/Header'
import PageWrapper from '../components/PageWrapper'
import Text from '../components/Text'
import FunFacts from '../components/FunFacts'

const NUM_FACTS = 4

const IndexPage = () => (
  <PageWrapper>
    <IntroText>
      <Text margin={0} size={'1.5rem'}>my name is</Text>
      <Header>Damian Reiter</Header>
      <Text margin={0} size={'1.5rem'}>and I am a...</Text>
      <FunFacts facts={NUM_FACTS} />
    </IntroText>
  </PageWrapper>
)

export default IndexPage
