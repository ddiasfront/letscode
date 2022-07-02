import styled from "styled-components";
import { borderRadius, mainColors } from "../../../design-system";
import { IInputStyles } from "./input-component-models";

const StyledInput = styled.input<IInputStyles>`
  background-color: #1E1E1E;
  transition: all 0.2s;
  padding: 10px;
  width: 100%;
  height: 100%;
  border: none;
  border: 1.25px solid ${mainColors.grey.letscode};
  border-radius: ${borderRadius.sm};
  &:active {
    border: 1.25px solid ${mainColors.grey.light};
  }
  &:focus {
    outline: none;
    border: 1.25px solid ${mainColors.yellow.letscode};
  }
  box-sizing: border-box;
  color: #fff;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${mainColors.grey.letscodelight};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${mainColors.grey.letscodelight};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${mainColors.grey.letscodelight};
  }
`;

export { StyledInput };
