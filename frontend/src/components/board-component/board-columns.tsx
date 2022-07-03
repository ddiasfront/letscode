import React from "react";
import styled from "styled-components";
import { mainColors } from "../../design-system";
import { ICardComponentModels } from "../card-component/card-component-models";
import { StyledCardContainer } from "../card-component/card-container/card-container-styles";

const StyledColumn = styled(StyledCardContainer)`
  background: #1e1e1e;
  padding: 25px;
  flex-direction: column;
  border: 1px solid transparent;
  box-shadow: none;
  background-color: ${mainColors.grey.letscode};
  align-items: center;
`;

declare interface IBoardColumnModel {
    cards?: ICardComponentModels[];
    children?: JSX.Element[] | string
}

const BoardColumn: React.FC<any> = ({cards, children}) => {
    return(<StyledColumn>{children}</StyledColumn>)
};

export default BoardColumn;
