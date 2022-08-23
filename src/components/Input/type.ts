export interface InputInterface {
    type?: string;
    label?: string;
    placeholder?: string;
    loading?: boolean;
    onChange: (value: string) => void;
};

export enum InputType {
    TEXT = 'text',
    EMAIL = 'email',
}
