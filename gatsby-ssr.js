/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import Main from "./src/components/Main";

export const wrapPageElement = ({ element, props }) => {
  return <Main {...props}>{element}</Main>;
};