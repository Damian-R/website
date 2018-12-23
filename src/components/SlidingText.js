import React from 'react'
import posed from 'react-pose'

const FADE_TIME = 500

const texts = [
  'some text',
  'more text',
  'random stuff'
]

const getRandomText = (previous, first) => {
  const index = Math.floor(Math.random() * texts.length)
  const newText = texts[index]
  if (newText == previous) {
    if (index > 0) return texts[index-1]
    return texts[texts.length-1]
  }
  return newText
}

const Text = posed.div({
  visible: {
    opacity: 1,
    transition: { duration: FADE_TIME }
  },
  hidden: {
    opacity: 0,
    transition: { duration: FADE_TIME }
  }
})

class SlidingText extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: true, text: getRandomText(null, true) }
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  componentDidMount() {
    this.visibleTimer = setInterval(this.toggleVisibility, 3000)
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible, text: this.state.text })
    if (this.state.visible == false)
      setTimeout(() => {
        this.setState({ visible: this.state.visible, text: getRandomText(this.state.text) })
      }, FADE_TIME)
  }

  render() {
      return (
        <Text pose={this.state.visible ? 'visible' : 'hidden'}>{this.state.text}</Text>
      )
  }
}

export default SlidingText
