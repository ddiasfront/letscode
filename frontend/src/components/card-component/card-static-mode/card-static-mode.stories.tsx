import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardEditMode from "./card-static-mode";
import { mainColors } from "../../../design-system";
import CardStaticMode from "./card-static-mode";
export default {
  title: "Card/CardStaticMode",
  component: CardStaticMode,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered", 
    backgrounds: {
      default: `greyletscode`,
      values: [
        { name: 'greyletscode', value: `${mainColors.grey.letscode}`},
        { name: 'white', value: '#fff'},
      ],
    }
  },
} as ComponentMeta<typeof CardStaticMode>;

const Template: ComponentStory<typeof CardStaticMode> = (args) => {

  const [isEditMode, setIsEditMode] = useState(false);

  return <CardStaticMode {...args} title={"Title"} content={"Content is full content is full content is full content is full content is full content is full content is full content is full content is full content is full content is full content is full content is full content is full content is full content is fullcontent is full content is full content is full content is fullcontent is full content is full content is full content is full"} setIsEditMode={() => setIsEditMode(!isEditMode)} />;
};

export const SimpleCardStaticMode = Template.bind({});
Template.args = {};
