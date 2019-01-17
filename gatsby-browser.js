import React from "react";
import Footer from './src/components/Footer'
import Particles from "react-particles-js";
import particlesConfig from './src/config/particles'

export const wrapRootElement = ({ element }) => {
    return <div><Particles params={particlesConfig.params} style={particlesConfig.style} />{element}<Footer /></div>
}