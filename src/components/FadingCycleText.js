import React from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

const FADE_TIME = 500

const PosedText = posed.div({
  visible: {
    opacity: 1,
    transition: { duration: FADE_TIME },
  },
  hidden: {
    opacity: 0,
    transition: { duration: FADE_TIME },
  },
})

const Text = styled(PosedText)`
  font-size: 1.5rem;
`

class FadingCycleText extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: true, text: this.getRandomText(null) }
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.getRandomText = this.getRandomText.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.visibleTimer = setInterval(this.toggleVisibility, 6000)
    }, this.props.delay)
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible, text: this.state.text })
    if (this.state.visible === false)
      setTimeout(() => {
        this.setState({
          visible: !this.state.visible,
          text: this.getRandomText(this.state.text),
        })
      }, FADE_TIME)
  }

  getRandomText(previous) {
    const index = Math.floor(Math.random() * this.props.texts.length)
    const newText = this.props.texts[index]
    if (newText === previous) {
      if (index > 0) return this.props.texts[index - 1]
      return this.props.texts[this.props.texts.length - 1]
    }
    return newText
  }

  render() {
    return (
      <Text pose={this.state.visible ? 'visible' : 'hidden'}>
        {this.state.text.title}
      </Text>
    )
  }
}

export default FadingCycleText
