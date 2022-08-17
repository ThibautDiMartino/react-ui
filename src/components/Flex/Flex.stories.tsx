import { Meta } from '@storybook/react';
import { DirectionType, FlexInterface, JustifyType, WrapType } from './type';
import Flex from ".";
import Button from "../Button";

export default {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    direction: {
        options: Object.values(DirectionType),
        control: 'select'
    },
    justifyContent: {
        options: Object.values(JustifyType),
        control: 'select'
    },
    wrap: {
        options: Object.values(WrapType),
        control: 'select'
    },
  }
} as Meta;

const Template = (args: FlexInterface) =>
<Flex {...args} >
    <Button label="child" width='full' />
    <Button label="child" />
    <Button label="child" />
</Flex>

export const template = Template.bind({});

// export const withIcon = ({
//   iconSvg = icons.get('user'),
// }) => { return Template({ iconSvg }) }