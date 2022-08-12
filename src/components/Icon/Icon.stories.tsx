import Icon from ".";
import { Meta } from '@storybook/react';
import { IconInterface, icons, IconType } from './type';
import { SizeType } from "../../types/types";

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    color: {
      options: Object.values(IconType),
      control: {
        type: 'select',
      }
    },
    size: {
      options: Object.values(SizeType),
      control: {
        type: 'select',
      },
    },
  }
} as Meta;

const Template = (args: IconInterface) => <Icon {...args} />

export const template = Template.bind({});

export const withIcon = ({
  iconSvg = icons.get('user'),
}) => { return Template({ iconSvg }) }