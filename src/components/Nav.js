import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { ArrowReverse } from 'react-burgers'

const Container = styled.div`
    position: fixed;
    top: 7%;
    left: 10%;
    letter-spacing: 2px;
`

const NavLinks = styled.div`
    display: inline;
    transition: opacity 0.4s ease-out;
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
                    <Link to="/">home</Link> <Link to="/about">about</Link>
                </NavLinks>
            </Container>
        )
    }
}

export default Nav