import { ChangeEvent } from "react";
import { IInputModel } from "./input-component-models";
import { StyledInput } from "./input-component-styles";

const InputComponent = ({onChange, placeholder}: IInputModel) => {
  return (
  <StyledInput placeholder={placeholder} onChange={(e) => onChange(e)}/>
  );
};

export default InputComponent;
