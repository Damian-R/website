import React from "react";
import Main from "./src/components/Main";

export const wrapPageElement = ({ element, props }) => {
  return <Main {...props}>{element}</Main>;
};