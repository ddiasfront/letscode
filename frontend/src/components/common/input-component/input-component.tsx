import { ChangeEvent } from "react";
import { IInputModel } from "./input-component-models";
import { StyledInput } from "./input-component-styles";

const InputComponent = ({onChange, onBlur, placeholder, value}: IInputModel) => {
  return (
  <StyledInput placeholder={placeholder} onChange={onChange} onBlur={onBlur} defaultValue={value}/>
  );
};

export default InputComponent;
