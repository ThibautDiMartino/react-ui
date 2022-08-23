import { FC } from "react";
import { CheckBoxInterface } from "./type";
import './CheckBox.scss';

const CheckBox: FC<CheckBoxInterface> = ({
    id = 0,
    state,
    loading,
    onArchive,
}) => {
    return (
        <label
            htmlFor="checked"
            aria-label={`archiveTask-${id}`}
            className="checkbox-label"
        >
            {loading ?
                <div className="loading"></div>
                :
                <input
                    type="checkbox"
                    name="checked"
                    id={`archiveTask-${id}`}
                    className={[
                        'checkbox',
                        loading ? 'loading' : '',
                    ].join(' ')}
                    checked={loading ? loading : state === "archived"}
                    onChange={() => !loading ? onArchive(id) : {}}
                />
            }
        </label>
    );
};

export default CheckBox;