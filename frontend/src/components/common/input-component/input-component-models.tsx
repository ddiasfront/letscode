import { ChangeEvent } from "react";

export interface IInputStyles {    
}

export interface IInputModel extends IInputStyles {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string
}