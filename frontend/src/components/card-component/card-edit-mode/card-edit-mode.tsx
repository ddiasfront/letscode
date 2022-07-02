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

const CardEditMode = ({ newMode, title, content, list }: ICardEditModeModel) => {

  const { cards, saveCard, updateCard, deleteCard } : ICardsContextModel = useContext(CardsContext);
  
  const { cardPosted, errorCardPosted, cardPost} = useCardPost();

  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  
  const cardPostHandler = () => {
    if(title&&content&&list) return cardPost(title, content, 'ToDo');
  }
  const newCardPostHandler = () => {
    cardPost(cardTitle, cardDescription, 'ToDo');
  }

  useEffect(() => {
    if(cardPosted && saveCard) saveCard(cardPosted)
  }, [cardPosted])

  //ADD NEW CARD FOOTER
  const newFooter = () => (
    <StyledButtonContainer onClick={() => {
      newCardPostHandler();
      }}>
      Add
      <VscAdd size={"1.2em"} style={{ paddingLeft: "5px" }} />
    </StyledButtonContainer>
  );
  //EDIT CARD FOOTER
  const editFooter = () => (
    <>
      <StyledButtonContainer onClick={() => {}}>
        Discard
        <VscCircleSlash size={"1.2em"} style={{ paddingLeft: "5px" }} />
      </StyledButtonContainer>
      <StyledButtonContainer onClick={() =>  {
       cardPostHandler();
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
