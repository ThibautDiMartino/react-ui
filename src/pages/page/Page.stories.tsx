import { LoggedIn, LoggedOut } from '../../components/Header/Header.stories';

import Page from '.';

export default {
  title: 'Pages/Page',
  component: Page,
};

const Template = (args: any) => <Page {...args} />;

export const LoggedInHeader = Template.bind({
  ...LoggedIn,
});

export const LoggedOutHeader = Template.bind({
  ...LoggedOut,
});
