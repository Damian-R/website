import React from 'react'
import styled from 'styled-components'

const HexImage = styled.div`
    position: relative;
    width: 300px; 
    height: 173.21px;
    margin: 86.60px 0;
    background-image: url(${props => props.url});
    background-size: auto 334.8632px;
    background-position: center;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
    border-left: solid 5px #333333;
    border-right: solid 5px #333333;
    margin-right: 2rem;
    transform: rotate(${props => -5 + props.index * 2}deg);
    transition: all 0.5s;
    
    &::after {
        content: "";
        position: absolute;
        top: 2.8868px;
        left: 0;
        width: 290.0000px;
        height: 167.4316px;
        z-index: 2;
        background: inherit;
    }
`

const HexTop = styled.div`
    position: absolute;
    z-index: 1;
    width: 212.13px;
    height: 212.13px;
    overflow: hidden;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background: inherit;
    left: 38.93px;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
    top: -106.0660px;
    border-top: solid 7.0711px #333333;
    border-right: solid 7.0711px #333333;

    &::after {
        content: "";
        position: absolute;
        width: 290.0000px;
        height: 167.4315780649915px;
        -webkit-transform:  rotate(45deg) scaleY(1.7321) translateY(-83.7158px);
        -ms-transform:      rotate(45deg) scaleY(1.7321) translateY(-83.7158px);
        transform:          rotate(45deg) scaleY(1.7321) translateY(-83.7158px);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        background: inherit;
        background-position: center top;
    }
`

const HexBottom = styled.div`
    position: absolute;
    z-index: 1;
    width: 212.13px;
    height: 212.13px;
    overflow: hidden;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background: inherit;
    left: 38.93px;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
    bottom: -106.0660px;
    border-bottom: solid 7.0711px #333333;
    border-left: solid 7.0711px #333333;

    &::after {
        content: "";
        position: absolute;
        width: 290.0000px;
        height: 167.4315780649915px;
        -webkit-transform:  rotate(45deg) scaleY(1.7321) translateY(-83.7158px);
        -ms-transform:      rotate(45deg) scaleY(1.7321) translateY(-83.7158px);
        transform:          rotate(45deg) scaleY(1.7321) translateY(-83.7158px);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        background: inherit;
        background-position: center bottom;
    }
`

export default (props) => (
    <HexImage index={props.index} url={props.url}><HexTop /><HexBottom /></HexImage>
)