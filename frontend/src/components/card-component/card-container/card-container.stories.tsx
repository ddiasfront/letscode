import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mainColors } from "../../../design-system";
import CardContainer from "./card-container";
export default {
  title: "Card/CardContainer",
  component: CardContainer,
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
} as ComponentMeta<typeof CardContainer>;

const Template: ComponentStory<typeof CardContainer> = () => (
  <div style={{ width: "200px", height: "350px", textAlign: "center" }}>
    <CardContainer darkMode={true} justify="center" flexDirection="column" flex>
      Size of the card is according the parent
    </CardContainer>
  </div>
);

export const CardContainerSimple = Template.bind({});
Template.args = {};
