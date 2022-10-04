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
    giant = '4x',
    xlarge = '2x',
    'x-large' = '2x',
    large = 'lg',
    medium = '1x',
    small = 'sm',
    xsmall = 'xs',
    sma = 14,
}

export const getSize = (val?: any) => { return IconSizeType[val] || val }

export interface IconInterface {
    iconSvg?: IconDefinition;
    type?: string;
    color?: string;
    iconSize?: string;
    hidden?: boolean;
    loading?: boolean;
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