import { Meta } from '@storybook/react'
import Button from '.';
import { ButtonType, WidthType } from './type';
import { SizeType } from '../../types/types';
import { icons } from '../Icon/type';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    width: {
      options: Object.keys(WidthType),
      control: {
        type: 'select',
      },
    },
    outlined: {
      options: [true, false],
      control: 'boolean',
    },
    blank: {
      options: [true, false],
      control: 'boolean',
    },
    squared: {
      options: [true, false],
      control: 'boolean',
    },
    onClick: () => { },
    icon: {
      options: Object.fromEntries(icons),
      control: {
        type: 'select',
      }
    },
    label: {},
    buttonType: {
      options: Object.values(ButtonType),
      control: {
        type: 'select',
      },
    },
    buttonSize: {
      options: Object.values(SizeType),
      control: {
        type: 'select',
      },
    },
  }
} as Meta;

const Template = (args: any) => <Button {...args} />

export const template = Template.bind({});

export const primary = ({
  label = 'Primary',
}) => { return Template({ label }) }

export const secondary = ({
  label = 'Secondary with icon',
  buttonType = ButtonType.SECONDARY,
  buttonSize = SizeType.MEDIUM,
  icon = icons.get('paper-plane')
}) => { return Template({ label, buttonSize, buttonType, icon }) }

export const tertiary = ({
  label = 'Tertiary half width',
  buttonType = ButtonType.TERTIARY,
  buttonSize = SizeType.LARGE,
  width = 'half'
}) => { return Template({ label, buttonSize, buttonType, width }) }

export const outlinedFullWidth = ({
  label = 'Outlined full width',
  width = WidthType.full,
}) => { return Template({ label, outlined: true, width }) }

export const squaredIconOnly = ({
  icon = 'home',
}) => { return Template({ icon, squared: true }) }

export const Loading = ({
}) => { return Template({ loading: true }) }
