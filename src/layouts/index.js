import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import PageTransition from "../components/PageTransition"
import Nav from '../components/Nav'

import styled, { keyframes } from 'styled-components'

const fadeInSlideUp = keyframes`
    from {
        opacity: 0;
        transform: translate(0, 5%);
    }

    to {
        opacity: 1;
        transform: translate(0, 0);
    }
`

const Wrapper = styled.div`
    position: absolute;
    top: 15%;
    right: 15%;
    left: 15%;
    bottom: 10%;
    display: flex;
    flex-flow: column;
    animation: ${fadeInSlideUp} 0.7s ease-out
`

const TemplateWrapper = ({ props, children, location }) => (
    <div>
        <Nav fadeIn={true} />
        <Wrapper>
            <PageTransition location={location}>{children}</PageTransition>
        </Wrapper>
    </div>
    
)

export default TemplateWrapper;

