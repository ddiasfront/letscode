import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputComponent from './input-component';
import { mainColors } from '../../../design-system';


export default {
  title: 'Common/Input',
  component: InputComponent,
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
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => <div><InputComponent placeholder='Placeholder'  onChange={() => {}}/></div>;

export const Input = Template.bind({});
Input.parameters = {
  backgrounds: {default: 'greyletscode'},
}

Input.args = {
};