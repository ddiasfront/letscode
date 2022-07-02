import { ChangeEvent } from "react";
import { IInputModel } from "./input-component-models";
import { StyledInput } from "./input-component-styles";

const InputComponent = ({onChange, onBlur, placeholder}: IInputModel) => {
  return (
  <StyledInput placeholder={placeholder} onChange={onChange} onBlur={onBlur}/>
  );
};

export default InputComponent;
