import styled from "styled-components";
import { borderRadius, mainColors } from "../../../design-system";

export const StyledButtonContainer = styled.div`
  cursor: pointer;
  transition: all 0.5s;
  margin-top: 2px;
  background-color: ${mainColors.yellow.letscode};
  padding: 10px;
  display: flex;
  border-radius: ${borderRadius.sm};
  color: ${mainColors.grey.letscode};
  font-weight: 200;
  font-size: 12px;
  margin-left: 7px;
  &:hover {
    background-color: ${mainColors.yellow.letscodehighlight};
  }
`;
