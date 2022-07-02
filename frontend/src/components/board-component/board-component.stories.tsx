import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { mainColors } from "../../design-system";
import BoardComponent from "./board-component";

export default {
  title: "Card/BoardComponent",
  component: BoardComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    backgrounds: {
      default: `greyletscode`,
      values: [
        { name: "greyletscode", value: `${mainColors.grey.letscode}` },
        { name: "white", value: "#fff" },
      ],
    },
  },
} as ComponentMeta<typeof BoardComponent>;

const Template: ComponentStory<typeof BoardComponent> = (args) => {
  // const [isEditMode, setIsEditMode] = useState(false);

  return <BoardComponent />;
};

export const SimpleCBoardComponent = Template.bind({});
