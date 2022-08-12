import React from 'react';

import { Header } from './Header';
import { HeaderInterface } from './type';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args: HeaderInterface) => <Header {...args} />;

export const LoggedIn = Template.bind({
  user: {},
});

export const LoggedOut = Template.bind({});
