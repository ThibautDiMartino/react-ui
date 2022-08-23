import { Meta } from "@storybook/react";
import { useState } from "react";
import { defaultTaskInterface, TaskState } from "../Task/type";
import TaskList from "./TaskList";

export default ({
    title: 'Components/TaskList',
    component: TaskList
}) as Meta;

const theList: defaultTaskInterface[] = [];

const Template = (loading: boolean, args: defaultTaskInterface[]) => <TaskList loading={loading} list={args} />

export const Default = () => {
    const [loading, setLoading] = useState<boolean>(theList === []);

    if (theList.length === 0) {
        for (let index = 0; index < 10; index++) {
            theList.push({
                id: index,
                title: 'Task ' + (index + 1),
                state: TaskState.INBOX,
            });
            setLoading(false);
        }
    }

    return Template(loading, theList);
};

export const Loading = () => {
    return Template(true, []);
}
export const Empty = () => {
    return Template(false, []);
}