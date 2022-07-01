import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./card-container";
import CardContainer from "./card-container";
export default {
  title: "Card/CardContainer",
  component: CardContainer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as ComponentMeta<typeof CardContainer>;

const Template: ComponentStory<typeof CardContainer> = () => /*   const [isEditMode, setIsEditMode] = useState(false);*/ (
  <div style={{ width: "200px", height: "350px", textAlign: "center" }}>
    <CardContainer justify="center" flexDirection="column" flex>
      Size of the card is according the parent
    </CardContainer>
  </div>
);

export const SimpleCardEditMode = Template.bind({});
Template.args = {};
