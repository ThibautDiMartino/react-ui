import { LoggedIn, LoggedOut } from '../../components/Header/Header.stories';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args: any) => <Page {...args} />;

export const LoggedInHeader = Template.bind({
  ...LoggedIn,
});

export const LoggedOutHeader = Template.bind({
  ...LoggedOut,
});
