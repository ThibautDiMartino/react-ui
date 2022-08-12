import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHome, faAnchor, faPaperPlane, faCross, faCheck } from '@fortawesome/free-solid-svg-icons'

export enum IconType {
    PRIMARY = 'primary',
    PRIMARY_LIGHT = 'primary-light',
    PRIMARY_LIGHTER = 'primary-lighter',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
}

export enum IconSizeType {
    LARGE = 8,
    MEDIUM = 7,
    SMALL = 6,
}

export const getSize = (val?: any) => { return IconSizeType[val] }

export interface IconInterface {
    iconSvg?: IconDefinition;
    type?: string;
    color?: string;
    size?: string;
    hidden?: boolean;
    className?: string;
}

export const icons: Map<string | undefined, IconDefinition> = new Map([
    ['user', faUser],
    ['home', faHome],
    ['anchor', faAnchor],
    ['paper-plane', faPaperPlane],
    ['check', faCheck],
    ['cross', faCross],
])