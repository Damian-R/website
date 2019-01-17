import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import { ArrowReverse } from 'react-burgers'

const fadeInSlideUp = keyframes`
    from {
        opacity: 0;
        transform: translate(0, 10%);
    }

    to {
        opacity: 1;
        transform: translate(0, 0);
    }
`

const Container = styled.div`
    position: fixed;
    top: 7%;
    left: 10%;
    letter-spacing: 2px;
    animation: ${fadeInSlideUp} 1s;
`

const NavLinks = styled.div`
    display: inline;
    font-size: 1.1rem;
    transition: opacity 0.4s ease-out;
    vertical-align: text-bottom;
    opacity: ${props => props.active ? 1 : 0}
`

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    render() {
        return (
            <Container onMouseOver={() => this.setState({ active: true })}
                       onMouseOut={() => this.setState({ active: false })}>
                <ArrowReverse 
                    active={this.state.active} 
                    width={30}
                    lineHeight={2}
                />
                <NavLinks active={this.state.active}>
                    <b><Link to="/">home</Link> <Link to="/about">about</Link> <Link to="/projects">projects</Link> <Link to="/about">experience</Link></b>
                </NavLinks>
            </Container>
        )
    }
}

export default Nav