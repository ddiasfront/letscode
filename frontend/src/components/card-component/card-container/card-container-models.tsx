export interface ICardContainerStyles {
    flex?: boolean;
    flexDirection?: 'column' |'row',
    justify?: string
    
}

export interface ICardContainerModel extends ICardContainerStyles {
    children?: JSX.Element[] | string
    darkMode?: boolean
}