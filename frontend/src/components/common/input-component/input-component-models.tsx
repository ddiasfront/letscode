import { ChangeEvent } from "react";

export interface IInputStyles {    
}

export interface IInputModel extends IInputStyles {
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string
}