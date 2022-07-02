import { useContext } from "react";
import CardContainer from "../card-container/card-container";
import { VscSave, VscCircleSlash } from "react-icons/vsc";
import { StyledCardFooterContainer } from "../card-footer-container/card-footer-container";
import { StyledButtonContainer } from "../../common/button-component/button-container-styles";
import { ICardStaticModeModel } from "./card-static-mode-models";
import { CardsContext } from "../../../contexts/cards-context";
import { ICardsContextModel } from "../../../contexts/cards-context-models";
// IMPORTAR HOOK DE SALVAR NA API

const CardStaticMode = ({ setIsEditMode, id, title, content, list }: ICardStaticModeModel) => {

  const { cards, saveCard, updateCard, deleteCard } : ICardsContextModel = useContext(CardsContext);
  
  const deleteCardHandler = (id?: string) => {
    if(id && deleteCard)
    deleteCard(id)
  }
  return (
    <div style={{ width: "16em", height: "16em" }}>
      <CardContainer flex flexDirection="column" darkMode>
        <div style={{overflowY: 'scroll', maxHeight: '100%', flex:2}}>
            <h3>{title}</h3>
            <div>
                {content}
            </div>
        </div>
        <StyledCardFooterContainer>
          <StyledButtonContainer onClick={() => deleteCardHandler(id)}>
            Delete<VscCircleSlash size={'1.2em'} style={{paddingLeft: '5px'}}/>
          </StyledButtonContainer>
          <StyledButtonContainer onClick={() => setIsEditMode()}>
            Edit <VscSave size={'1.2em'} style={{paddingLeft: '5px'}}/>
          </StyledButtonContainer>
        </StyledCardFooterContainer>
      </CardContainer>
    </div>
  );
};

export default CardStaticMode;
