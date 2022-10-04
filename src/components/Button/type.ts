import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export enum WidthType {
    min = 'min',
    one_fifth = 'one_fifth',
    one_fourth = 'one_fourth',
    one_third = 'one_third',
    half = 'half',
    two_third = 'two_third',
    three_fourth = 'three_fourth',
    four_fifth = 'four_fifth',
    full = 'full',
}

export enum ButtonType {
    ERROR = 'error',
    WARNING = 'warning',
    SUCCESS = 'success',
    INFO = 'info',
    PRIMARY = 'primary',
    PRIMARY_LIGHT = 'primary-light',
    PRIMARY_LIGHTER = 'primary-lighter',
    SECONDARY = 'secondary',
    SECONDARY_LIGHT = 'secondary-light',
    SECONDARY_LIGHTER = 'secondary-lighter',
    TERTIARY = 'tertiary',
    TERTIARY_LIGHT = 'tertiary-light',
    TERTIARY_LIGHTER = 'tertiary-lighter',
}

export interface ButtonInterface {
    label?: string;
    buttonType?: string;
    outlined?: boolean;
    loading?: boolean;
    blank?: boolean;
    squared?: boolean;
    width?: string;
    icon?: IconDefinition;
    style?: string;
    onClick?: () => void;
    buttonSize?: string;
}