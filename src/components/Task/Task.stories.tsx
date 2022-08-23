import { Meta } from "@storybook/react";
import { useState } from "react";
import Task from ".";
import { defaultTask, TaskInterface, TaskState } from "./type";

export default ({
    title: 'Components/Task',
    component: Task,
}) as Meta;

const Template = (args: TaskInterface) => <Task {...args} />;

export const Inbox = ({
}) => {
    const [taskState, setTaskState] = useState<string>(TaskState.INBOX)

    const onArchive = () => setTaskState(taskState === TaskState.ARCHIVED ? TaskState.INBOX : TaskState.ARCHIVED)
    const onPin = () => setTaskState(taskState === TaskState.PINNED ? TaskState.INBOX : TaskState.PINNED)
    const onDelete = () => setTaskState(taskState === TaskState.PINNED ? TaskState.INBOX : TaskState.PINNED)
    const arg = {
        loading: false,
        task: { ...defaultTask, state: taskState },
        onArchive,
        onPin,
        onDelete
    }

    return Template({ ...arg })
};

export const Archived = ({
}) => {
    const [taskState, setTaskState] = useState<string>(TaskState.ARCHIVED)

    const onArchive = () => { setTaskState(taskState === TaskState.ARCHIVED ? TaskState.INBOX : TaskState.ARCHIVED) }
    const onPin = () => { setTaskState(taskState === TaskState.PINNED ? TaskState.INBOX : TaskState.PINNED) }
    const onDelete = () => setTaskState(taskState === TaskState.PINNED ? TaskState.INBOX : TaskState.PINNED)
    const arg = {
        loading: false,
        task: { ...defaultTask, state: taskState },
        onArchive,
        onPin,
        onDelete
    }

    return Template(arg)
};

export const Pinned = ({
}) => {
    const [taskState, setTaskState] = useState<string>(TaskState.PINNED)

    const onArchive = () => setTaskState(taskState === TaskState.ARCHIVED ? TaskState.INBOX : TaskState.ARCHIVED)
    const onPin = () => setTaskState(taskState === TaskState.PINNED ? TaskState.INBOX : TaskState.PINNED)
    const onDelete = () => setTaskState(taskState === TaskState.PINNED ? TaskState.INBOX : TaskState.PINNED)
    const arg = {
        loading: false,
        task: { ...defaultTask, state: taskState },
        onArchive,
        onPin,
        onDelete
    }

    return Template(arg)
};

export const Loading = ({
}) => {
    const [taskState, setTaskState] = useState<string>(TaskState.INBOX)

    const onArchive = () => setTaskState(taskState === TaskState.ARCHIVED ? TaskState.INBOX : TaskState.ARCHIVED)
    const onPin = () => setTaskState(taskState === TaskState.PINNED ? TaskState.INBOX : TaskState.PINNED)
    const onDelete = () => setTaskState(taskState === TaskState.PINNED ? TaskState.INBOX : TaskState.PINNED)
    const arg = {
        loading: true,
        onArchive,
        onPin,
        onDelete
    }

    return Template(arg)
};
