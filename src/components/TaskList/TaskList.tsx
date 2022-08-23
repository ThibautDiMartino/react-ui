import { FC, useState } from "react";
import { TaskListInterface } from "./type";
import './TaskList.scss';
import Task from "../Task/Task";
import { defaultTaskInterface, TaskState } from "../Task/type";
import Flex from "../Flex";
import Button from "../Button";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon";

const TaskList: FC<TaskListInterface> = ({ loading, list }) => {
    const [taskList, setTaskList] = useState<defaultTaskInterface[]>(list)
    const [taskTitle, setTaskTitle] = useState<string>('')

    const getOrder = (id: number, val: string) => {
        switch (val) {
            case 'inbox':
                return id + 10
            case 'archived':
                return id + 20
            default:
                return id
        }
    }

    const addTask = () => setTaskList([
        ...taskList,
        {
            id: taskList.length + 1,
            title: taskTitle,
            state: TaskState.INBOX
        }
    ])

    const onArchive = (id: number) => {
        const retrieve = taskList.find(e => e.id === id) || null;
        const index = taskList.findIndex(e => e.id === id) || 0;

        if (retrieve) {
            taskList[index].state = retrieve.state === TaskState.ARCHIVED
                ? TaskState.INBOX
                : TaskState.ARCHIVED
            setTaskList([...taskList])
        }
    };

    const onPin = (id: number) => {
        const retrieve = taskList.find(e => e.id === id) || null;
        const index = taskList.findIndex(e => e.id === id) || 0;

        if (retrieve) {
            taskList[index].state = retrieve.state === TaskState.PINNED
                ? TaskState.INBOX
                : TaskState.PINNED
            setTaskList([...taskList])
        }
    };

    const onDelete = (id: number) => {
        const remains = taskList.filter(t => t.id !== id);

        for (let index = id; index < taskList.length - 1; index++) {
            remains[index].id = index + 1
        }
        setTaskList(remains)
    };

    const events = {
        onArchive,
        onPin,
        onDelete,
    }

    return (
        <Flex direction="column" style="task-list">
            {!loading &&
                <>
                    <Flex>
                        <input
                            type="text"
                            value={taskTitle}
                            name="new task"
                            className="is-full pl-2"
                            id="newtask"
                            onChange={(e) => setTaskTitle(e.currentTarget.value)}
                        />
                        <Button
                            icon={faPlus}
                            squared
                            label='Add task'
                            onClick={() => addTask()}
                        />
                    </Flex>
                    <hr className="is-half my-5" />
                </>
            }
            <div className="list-items one">
                {!loading && taskList.length === 0 &&
                    <div className="empty">
                        <Icon iconSvg={faCheck} iconSize={'9x'} color={'green'} />
                        <p>You have no remaining task</p>
                        <p>Come on, don't you have brilliant ideas that need to be done</p>
                    </div>
                }
                {!loading && taskList ?
                    taskList
                        .sort((a: any, b: any) => getOrder(a.id, a.state) > getOrder(b.id, b.state) ? 1 : -1)
                        .map(task => {
                            return <Task
                                loading={loading}
                                key={task.id}
                                task={task}
                                {...events}
                            />
                        })
                    : <Task loading {...events} />
                }
            </div>
        </Flex>
    );
};

export default TaskList;