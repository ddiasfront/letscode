import React, { ChangeEvent, FocusEventHandler } from "react";

export interface ITextAreaModels {
    placeholder?: string;
    onBlur: (value: any) => void,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}