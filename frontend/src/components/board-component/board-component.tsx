import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CardsContext } from "../../contexts/cards-context";
import { ICardsContextModel } from "../../contexts/cards-context-models";
import { AlertComponent } from "../alert-component/alert-component";
import CardComponent from "../card-component/card-component";
import { ICardComponentModels } from "../card-component/card-component-models";
import CardEditMode from "../card-component/card-edit-mode/card-edit-mode";
import { usePutCards } from "../hooks/use-cardput-hook";
import { useGetCards } from "../hooks/use-getcards-hook";
import BoardColumn from "./board-columns";
import { BoardComponentContainer } from "./board-component-styles";

export const BoardComponent = () => {
  const { alertMessage, alertIsOn } = useContext(CardsContext);

  const {
    cards,
    saveCard,
    updateCard,
    deleteCard,
    setCards,
  }: ICardsContextModel = useContext(CardsContext);
  const { cardsResponse, getCards } = useGetCards();

  //MAKE GETCARDS ASYNC REQUEST WHEN PAGE IS LOADED
  useEffect(() => {
    getCards();
  }, []);

  //ANYTIME GET CARDS REQUEST IS MADE AND HAVE AN RETURN ITS CALLED
  useEffect(() => {
    //SET CONTEXT WITH THE REQUEST RETURN
    if (setCards && cardsResponse) setCards(cardsResponse);
  }, [cardsResponse]);

  //SEPARATE TODOx
  const todoListMemo = useMemo(() => {
    //CHECK IF HAS ANY CARD IN THE LIST
    if (cards.some((card) => card.list === "ToDo")) {
      return cards.map((card) => {
        if (card.list === "ToDo")
          return (
            <CardComponent
              key={card.id}
              id={card.id}
              content={card.content}
              title={card.title}
              list={card.list}
            />
          );
      });
    } else {
      return <div>No cards to do</div>;
    }
  }, [cards]);

  //SEPARATE DOING
  const doingListMemo = useMemo(() => {
    //CHECK IF HAS ANY CARD IN THE LIST
    if (cards.some((card) => card.list === "Doing")) {
      return cards.map((card) => {
        if (card.list === "Doing")
          return (
            <CardComponent
              key={card.id}
              id={card.id}
              content={card.content}
              title={card.title}
              list={card.list}
            />
          );
      });
    } else {
      return <div>No cards in progress</div>;
    }
  }, [cards]);

  //SEPARATE DONE
  const doneListMemo = useMemo(() => {
    //CHECK IF HAS ANY CARD IN THE LIST
    if (cards.some((card) => card.list === "Done")) {
      return cards.map((card) => {
        if (card.list === "Done")
          return (
            <CardComponent
              key={card.id}
              id={card.id}
              content={card.content}
              title={card.title}
              list={card.list}
            />
          );
      });
    } else {
      return <div>No cards completed</div>;
    }
  }, [cards]);

  return (
    <>
  { alertIsOn && alertMessage && <AlertComponent>
      {alertMessage}
    </AlertComponent>}
      <BoardComponentContainer>
        <BoardColumn>
          <h3>New</h3>
          <CardEditMode setIsEditMode={() => saveCard} newMode />
        </BoardColumn>
        <BoardColumn>
          <h3>Todo</h3>
          {cards.length ? todoListMemo : <div>No cards yet</div>}
        </BoardColumn>

        <BoardColumn>
          <h3>Doing</h3>
          {cards.length ? doingListMemo : <div>No cards yet</div>}
        </BoardColumn>
        <BoardColumn>
          <h3>Done</h3>
          {cards.length ? doneListMemo : <div>No cards yet</div>}
        </BoardColumn>
      </BoardComponentContainer>
    </>
  );
};

export default BoardComponent;
