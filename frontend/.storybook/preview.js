import React from "react";

import { GlobalStyle } from "../src/global-styles";

const withGlobalStyles = (Story, context) => {
  return (
    <>
      <GlobalStyle />
      <Story />
    </>
  );
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [withGlobalStyles]