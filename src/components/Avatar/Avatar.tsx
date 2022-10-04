import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import Icon from "../Icon";
import { AvatarInterface, Size } from "./type";
import './Avatar.scss'

const Avatar: FC<AvatarInterface> = ({
    size = Size.MEDIUM,
    image,
}) => {
    const classn = [
        "avatar",
        `is-${size}`
    ].join(' ')
    return (
        <>
            {image ? (
                <img src={image} alt="Avatar" className={classn} />
            ) : (
                <Icon iconSvg={faUserAlt} iconSize={size} className={classn} />
            )}
        </>
    );
}

export default Avatar;