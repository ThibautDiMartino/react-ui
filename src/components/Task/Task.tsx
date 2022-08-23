import { FC, useState } from "react";
import Flex from "../Flex";
import { TaskInterface } from "./type";
import './Task.scss';
import Button from "../Button";
import { faArrowDown, faArrowRight, faPen, faStar as pinned, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faStar as unPinned } from "@fortawesome/free-regular-svg-icons";
import Input from "../Input";
import CheckBox from "../CheckBox";
import { ButtonType } from "../Button/type";

const Task: FC<TaskInterface> = ({
    loading,
    task,
    onArchive,
    onPin,
    onDelete,
}) => {
    const [taskTitle, setTaskTitle] = useState<string | undefined>(task?.title);
    const [taskDesc, setTaskDesc] = useState<string | undefined>(task?.description);
    const [taskDescEdit, setTaskDescEdit] = useState<string | undefined>('');
    const [exp, setExp] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);

    return (
        <div className={`list-item ${loading ? 'loading' : ''} ${task?.state}`}>
            <Flex justifyContent='space-between' >
                <CheckBox
                    id={task?.id}
                    state={task?.state}
                    onArchive={onArchive}
                    loading={loading}
                />

                <Input
                    loading={loading}
                    label={taskTitle}
                    onChange={setTaskTitle}
                />

                {task?.state !== 'archived' &&
                    <Button
                        loading={loading}
                        blank
                        icon={task?.state !== 'pinned' ? unPinned : pinned}
                        style='pin'
                        onClick={() => onPin(task?.id as number)}
                    />}
                <Button
                    blank
                    loading={loading}
                    icon={exp ? faArrowDown : faArrowRight}
                    onClick={() => setExp(!exp)}
                />
                <Button
                    blank
                    buttonType={ButtonType.ERROR}
                    icon={faTrashCan}
                    onClick={() => onDelete(task?.id as number)}
                />
            </Flex>
            <div className={`description ${exp && 'show'}`}>
                {!edit &&
                    <>
                        <div className="edit">
                            <Button
                                icon={faPen}
                                blank
                                onClick={() => {
                                    setEdit(true)
                                    setTaskDescEdit(taskDesc)
                                }}
                            />
                        </div>
                        <p>{taskDesc}</p>
                    </>
                }
                {edit &&
                    <Flex>
                        <textarea
                            value={taskDescEdit}
                            onChange={(e) => setTaskDescEdit(e.currentTarget.value)}
                        />
                        <Flex direction="column" style="ml-2">
                            <Button
                                label="Save"
                                style="mx-0 mb-1"
                                onClick={() => {
                                    setTaskDesc(taskDescEdit)
                                    setEdit(false)
                                }}
                            />
                            <Button
                                label="Cancel"
                                outlined
                                style="mt-1"
                                onClick={() => {
                                    setTaskDescEdit('')
                                    setEdit(false)
                                }}
                            />
                        </Flex>
                    </Flex>
                }
            </div>
        </div>
    );
};

export default Task;