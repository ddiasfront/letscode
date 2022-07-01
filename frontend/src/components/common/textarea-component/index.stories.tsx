import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextAreaComponent from '.';


export default {
  title: 'Common/TextArea',
  component: TextAreaComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof TextAreaComponent>;

const Template: ComponentStory<typeof TextAreaComponent> = (args) => <div><TextAreaComponent  /></div>;

export const TextArea = Template.bind({});

TextArea.args = {};
