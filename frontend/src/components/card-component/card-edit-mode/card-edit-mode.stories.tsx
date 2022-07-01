import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardEditMode from "./card-edit-mode";
import { mainColors } from "../../../design-system";
export default {
  title: "Card/CardEditMode",
  component: CardEditMode,
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
} as ComponentMeta<typeof CardEditMode>;

const Template: ComponentStory<typeof CardEditMode> = (args) => {

  const [isEditMode, setIsEditMode] = useState(false);

  return <CardEditMode {...args} setIsEditMode={() => setIsEditMode(!isEditMode)} />;
};

export const SimpleCardEditMode = Template.bind({});
Template.args = {};
