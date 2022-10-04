import Avatar from "./Avatar";
import { Size } from "./type";

export default ({
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
        size: {
            options: Object.values(Size),
            control: 'select'
        }
    }
});

const Template = (args?: any) => <Avatar {...args} />;

export const template = Template.bind({});
