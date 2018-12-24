import React from "react";
import Main from "./src/components/Main";
import Footer from './src/components/Footer'
import Particles from "react-particles-js";
import particlesConfig from './src/config/particles'

export const wrapPageElement = ({ element, props }) => {
  return <Main {...props}>{element}</Main>;
}

export const wrapRootElement = ({ element }) => {
    return <div><Particles params={particlesConfig.params} style={particlesConfig.style} />{element}<Footer /></div>
}