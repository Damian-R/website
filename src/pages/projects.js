import React from 'react'
import Header from '../components/Header'
import Hexagon from 'react-hexagon'
import styled from 'styled-components'
import hexagonStyles from '../styles/hexagon.module.css'

const HexagonGrid = styled.div`
    padding: 0 15px;
    margin-top: 2em;
`

const ProjectsPage = () => (
    <div>
        <Header>Projects</Header>
        <HexagonGrid>
            <div className={hexagonStyles.row}>
                <Hexagon className={hexagonStyles.hexagon} flatTop={true} />
                <Hexagon className={hexagonStyles.hexagon} flatTop={true} />
            </div>
            <div className={hexagonStyles.row}>
                <Hexagon className={hexagonStyles.hexagon} flatTop={true} />
                <Hexagon className={hexagonStyles.hexagon} flatTop={true} />
            </div>
        </HexagonGrid>
    </div>
)

export default ProjectsPage