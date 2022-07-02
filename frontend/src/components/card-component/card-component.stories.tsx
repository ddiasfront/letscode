import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardComponent from "./card-component";
import { mainColors } from "../../design-system";
export default {
  title: "Card/CardComponent",
  component: CardComponent,
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
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => {

  const [isEditMode, setIsEditMode] = useState(false);

  return <CardComponent {...args} id={'1'} title={'Title'} content={'Content'}/>;
};

export const SimpleCCardComponent = Template.bind({});
Template.args = {
  id: '1',
  title: 'Title',
  content: 'Content'
};
