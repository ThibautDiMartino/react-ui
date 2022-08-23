export enum TaskState {
    INBOX = 'inbox',
    PINNED = 'pinned',
    ARCHIVED = 'archived',
};

export interface defaultTaskInterface {
    id: number;
    title: string;
    description?: string;
    state: string;
};

export const defaultTask = {
    id: 1,
    title: 'task',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    state: TaskState.INBOX,
}

export interface TaskInterface {
    loading: boolean;
    task?: defaultTaskInterface;
    onArchive: (id: number) => void;
    onPin: (id: number) => void;
    onDelete: (id: number) => void;
};