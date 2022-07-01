import { useState } from "react";
import InputComponent from "../../common/input-component/input-component";
import { StyledCardContainer } from "./card-container-styles";
import CardEditMode from "../card-edit-mode/card-edit-mode";
import { ICardContainerModel } from "./card-container-models";
// IMPORTAR HOOK DE SALVAR NA API

const CardContainer = ({justify, flexDirection, children}: ICardContainerModel) => {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <StyledCardContainer
      justify={justify}
      flex
      flexDirection={flexDirection}
    >
      {children}
    </StyledCardContainer>
  );
};

export default CardContainer;
