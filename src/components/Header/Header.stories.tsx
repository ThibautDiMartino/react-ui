import React from 'react';

import Header from '.';
import { HeaderInterface } from './type';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    user: {
      options: JSON,
    },
    onLogin: () => {},
    onLogout: () => {},
    onCreateAccount: () => {},
  },
};

const Template = (args: HeaderInterface) => <Header {...args} />;

export const template = Template.bind({});

export const LoggedIn = ({
  user = {
    username: "Snass",
  },
}) => { return Template({ user }) };

export const LoggedOut = Template.bind({});
