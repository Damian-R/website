import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'

const ProjectGrid = styled.div`
    margin: 1em 2em 0 2em;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 3em;
    grid-row-gap: 1em;
`

export default () => (
    <ProjectGrid>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </ProjectGrid>
)