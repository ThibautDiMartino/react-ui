import { FC } from "react";
import { DirectionType, FlexInterface, JustifyType } from "./type";
import './Flex.scss';

const Flex: FC<FlexInterface> = ({
    direction = DirectionType.ROW,
    justifyContent = JustifyType.CENTER,
    wrap,
    style,
    children,
}) => {
    return (
        <div className={[
            "flex",
            direction,
            justifyContent,
            style,
            wrap,
        ].join(' ')}>
            {children}
        </div>
    );
};

export default Flex;