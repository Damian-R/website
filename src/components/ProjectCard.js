import React from 'react'
import styled from 'styled-components'

const ProjectWrapper = styled.div`
    margin: 0;
    border-radius: 9px;
    overflow: hidden;
    background-color: white;
    -webkit-box-shadow: 0px 0px 19px -1px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 19px -1px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 19px -1px rgba(0,0,0,0.3);
`

const ProjectImage = styled.div`
    background-image: url('/img/hackathon.jpg');
    height: 50%;
`

const ProjectTitle = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    padding: 0.5em;
`

export default () => (
    <ProjectWrapper>
        <ProjectImage />
        <ProjectTitle>Doctor DMs</ProjectTitle>
    </ProjectWrapper>
)