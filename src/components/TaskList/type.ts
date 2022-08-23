import { defaultTaskInterface } from "../Task/type";

export interface TaskListInterface {
    loading: boolean;
    list: defaultTaskInterface[];
}