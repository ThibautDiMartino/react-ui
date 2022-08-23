export interface CheckBoxInterface {
    id?: number;
    state?: string;
    loading: boolean;
    onArchive: (id: number) => void;
};
