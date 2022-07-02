import { StyledCardContainer } from "./card-container-styles";
import { ICardContainerModel } from "./card-container-models";

const CardContainer = ({justify, flexDirection, children, darkMode}: ICardContainerModel) => {
  return (
    <StyledCardContainer
      justify={justify}
      flex
      flexDirection={flexDirection}
      darkMode
    >
      {children}
    </StyledCardContainer>
  );
};

export default CardContainer;
