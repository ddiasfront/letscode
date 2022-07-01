export interface ICardContainerStyles {
    flex: boolean | undefined;
    flexDirection?: 'column' |'row',
    justify?: string
    
}

export interface ICardContainerModel extends ICardContainerStyles {
    children?: JSX.Element | string
}