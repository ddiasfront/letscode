import { useContext, useEffect } from "react";
import CardContainer from "../card-container/card-container";
import { VscSave, VscCircleSlash } from "react-icons/vsc";
import { StyledCardFooterContainer } from "../card-footer-container/card-footer-container";
import { StyledButtonContainer } from "../../common/button-component/button-container-styles";
import { ICardStaticModeModel } from "./card-static-mode-models";
import { CardsContext } from "../../../contexts/cards-context";
import { ICardsContextModel } from "../../../contexts/cards-context-models";
import { useDeleteCards } from "../../hooks/use-carddelete-hook";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cardSize } from "../../../design-system";


const CardStaticMode = ({ setIsEditMode, id, title, content, list }: ICardStaticModeModel) => {

  const { cards, saveCard, updateCard, deleteCard, setCards, dispatchAlertMessageAndClear } : ICardsContextModel = useContext(CardsContext);
  
  const {deleteCardAsync, cardsDeleted, cardsDeleteError} = useDeleteCards();

  useEffect(() => {
    if(cardsDeleted && setCards) {
      setCards(cardsDeleted);
    }
  }, [cardsDeleted])

  useEffect(() => {
    if(cardsDeleteError && dispatchAlertMessageAndClear) {
      dispatchAlertMessageAndClear('Something went wrong when trying to delete the card, please get in contact with the support')
    }
  },[cardsDeleteError])

  return (
    <div style={{ width: `${cardSize.defaultWidth}`, height: `${cardSize.defaultHeight}` }}>
      <CardContainer flex flexDirection="column" darkMode>
        <div style={{overflowY: 'scroll', maxHeight: '100%', flex:2}}>
            <h3>{title}</h3>
            <div>
            {content &&<ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />}
            </div>
        </div>
        <StyledCardFooterContainer>
          <StyledButtonContainer onClick={() => {if(id)deleteCardAsync(id)}}>
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
