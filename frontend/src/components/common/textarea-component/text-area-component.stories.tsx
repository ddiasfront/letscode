import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextAreaComponent from './text-area-component';
import { mainColors } from '../../../design-system';


export default {
  title: 'Common/TextArea',
  component: TextAreaComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered', 
    backgrounds: {
      default: `greyletscode`,
      values: [
        { name: 'greyletscode', value: `${mainColors.grey.letscode}`},
        { name: 'white', value: '#fff'},
      ],
    }
  },
} as ComponentMeta<typeof TextAreaComponent>;

const Template: ComponentStory<typeof TextAreaComponent> = (args) => <div><TextAreaComponent placeholder={"Content"} /></div>;

export const TextArea = Template.bind({});

TextArea.args = {};
