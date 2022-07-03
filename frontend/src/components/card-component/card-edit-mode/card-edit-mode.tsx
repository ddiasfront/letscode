import { useContext, useEffect, useState } from "react";
import InputComponent from "../../common/input-component/input-component";
import TextAreaComponent from "../../common/textarea-component/text-area-component";
import CardContainer from "../card-container/card-container";
import { ICardEditModeModel } from "./card-edit-mode-models";
import { VscSave, VscCircleSlash, VscAdd } from "react-icons/vsc";
import { StyledCardFooterContainer } from "../card-footer-container/card-footer-container";
import { StyledButtonContainer } from "../../common/button-component/button-container-styles";
import { CardsContext } from "../../../contexts/cards-context";
import { ICardsContextModel } from "../../../contexts/cards-context-models";
import { useCardPost } from "../../hooks/use-cardpost-hook";
import { usePutCards } from "../../hooks/use-cardput-hook";
import { ICardComponentModelsBR } from "../card-component-models";

const CardEditMode = ({ newMode, list, id, setIsEditMode }: ICardEditModeModel) => {

  const { saveCard, updateCard, dispatchAlertMessageAndClear } : ICardsContextModel = useContext(CardsContext);
  
  const { cardPosted, errorCardPosted, cardPost} = useCardPost();
  
  const { putCard, putCardResponse, putCardError } = usePutCards();

  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");


  //SAVE CARD MODIFICATIONS HANDLER
  const cardEditHandler = () => {
    if(id && list && cardDescription.length > 2 && cardTitle.length > 2 ) {
      const editedCard: ICardComponentModelsBR = {
        titulo: cardTitle,
        conteudo: cardDescription,
        id: id,
        lista: list
      }
      putCard(editedCard);
    }
  }
  //CARD MODIFICATION SUCCESSFULL UPDATE CONTEXT 
  useEffect(() => {
    if(updateCard && putCardResponse ) {
      updateCard(putCardResponse)
      setIsEditMode()
    } 
  }, [putCardResponse])

  //WATCH PUT ERROR
  useEffect(() => {
    if(dispatchAlertMessageAndClear && putCardError) {
      dispatchAlertMessageAndClear("There was an error when trying to save the modifications, please contact support")
    }
  }, [putCardError])
  

  //HANDLER THAT ADDS NEW CARDS TO THE API
  const newCardPostHandler = () => {
    //HOOK METHOD WICH CALLS THE API ADD
    cardPost(cardTitle, cardDescription, 'ToDo');
  }

  //CHECK IF THE CARD HAS BEEN SUCCESSFULLY ADDED, GET THE RETURN AND SET BACK INTO LIST
  useEffect(() => {
    if(cardPosted && saveCard) saveCard(cardPosted)
  }, [cardPosted])

  useEffect(() => {
    if(errorCardPosted && dispatchAlertMessageAndClear) dispatchAlertMessageAndClear('There was an error when trying to add your card, please contact support')
  },[errorCardPosted])

  //ADD NEW CARD FOOTER COMPONENT
  const newFooter = () => (
    <StyledButtonContainer onClick={() => {
      newCardPostHandler();
      }}>
      Add
      <VscAdd size={"1.2em"} style={{ paddingLeft: "5px" }} />
    </StyledButtonContainer>
  );
  //EDIT CARD FOOTER COMPONENT
  const editFooter = () => (
    <>
      <StyledButtonContainer onClick={() => setIsEditMode()}>
        Discard
        <VscCircleSlash size={"1.2em"} style={{ paddingLeft: "5px" }} />
      </StyledButtonContainer>
      <StyledButtonContainer onClick={() =>  {
       cardEditHandler();
      }}>
        Save <VscSave size={"1.2em"} style={{ paddingLeft: "5px" }} />
      </StyledButtonContainer>
    </>
  );

  return (
    <div style={{ width: "16em", height: "16em" }}>
      <CardContainer flex flexDirection="column">
        <div>
          <InputComponent
            placeholder={"Title"}
            onBlur={(e) => {
              setCardTitle(e.target.value);
            }}
          />
        </div>
        <div style={{ flexGrow: "1" }}>
          <TextAreaComponent
            onBlur={setCardDescription}
            placeholder={"Content"}
          />
        </div>
        <StyledCardFooterContainer>
          {newMode ? newFooter() : editFooter()}
        </StyledCardFooterContainer>
      </CardContainer>
    </div>
  );
};

export default CardEditMode;
