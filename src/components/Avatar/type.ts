export enum Size {
    XSMALL = 'x-small',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    XLARGE = 'x-large',
    GIANT = 'giant',
}

export interface AvatarInterface {
    size?: string;
    image?: string;
}