export enum DirectionType {
    ROW = 'row',
    ROW_REVERSE = 'row-reverse',
    COLUMN = 'column',
    COLUMN_REVERSE = 'column-reverse',
    INHERIT = 'inherit',
}

export enum WrapType {
    WRAP = 'wrap',
    WRAP_REVERSE = 'wrap-reverse',
}

export enum JustifyType {
    CENTER = 'center',
    START = 'flex-start',
    SPACE_BETWEEN = 'space-between',
    SPACE_AROUND = 'space-around',
    SPACE_EVENLY = 'space-evenly',
    END = 'flex-end',
    INHERIT = 'inherit',
}

export interface FlexInterface {
    direction?: string;
    justifyContent?: string;
    wrap?: string;
    style?: string;
    children: any;
}