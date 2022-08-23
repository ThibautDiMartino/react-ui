import { FC } from "react";
import { InputInterface, InputType } from "./type";
import './Input.scss';

const Input: FC<InputInterface> = ({
    type = InputType.TEXT,
    label,
    placeholder,
    loading,
    onChange,
}) => {
    return (
        <input
            type={type}
            value={label}
            placeholder={placeholder}
            className={[
                'input py-2',
                loading ? 'loading' : '',
            ].join(' ')}
            onChange={(e) => onChange(e.currentTarget.value)}
        />
    );
};

export default Input;