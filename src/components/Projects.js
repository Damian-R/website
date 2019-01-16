import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';

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
    <HexGrid width={"100%"} height={"100%"}>
        <Layout size={{ x: 27, y: 27 }} flat={true} spacing={1.1} origin={{ x: -20, y: 5 }}>
            <Hexagon q={0} r={0} s={0} />
            <Hexagon q={-1} r={0} s={0} />
            <Hexagon q={1} r={-1} s={0} />
            <Hexagon q={2} r={-1} s={0} />
        </Layout>
    </HexGrid>
)