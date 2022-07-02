import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CardsContext } from "../../contexts/cards-context";
import { ICardsContextModel } from "../../contexts/cards-context-models";
import CardComponent from "../card-component/card-component";
import { ICardComponentModels } from "../card-component/card-component-models";
import CardEditMode from "../card-component/card-edit-mode/card-edit-mode";
import { useGetCards } from "../hooks/use-getcards-hook";
import BoardColumn from "./board-columns";
import { BoardComponentContainer } from "./board-component-styles";

export const BoardComponent = (props: any) => {

  const { cards, saveCard, updateCard, deleteCard, setCards } : ICardsContextModel = useContext(CardsContext);
  const { cardsResponse, getCards } = useGetCards();

  //MAKE GETCARDS ASYNC REQUEST WHEN PAGE IS LOADED
  useEffect(() => {
    getCards()
  }, [])

  //ANYTIME GET CARDS REQUEST IS MADE AND HAVE AN RETURN ITS CALLED
  useEffect(() => {
    //SET CONTEXT WITH THE REQUEST RETURN
    if(setCards&&cardsResponse)setCards(cardsResponse);
  }, [cardsResponse])

  //SEPARATE 
 const todoListMemo = useMemo(() => { 
  if(cards.length)
  return cards.map((card) => {
    if (card.list === 'ToDo')return (
    <CardComponent
    key={card.id}
    id={card.id}
    content={card.content}
    title={card.title}
    list={card.list}
  />
  )})
}, [cards])

  return (
    <BoardComponentContainer>
       <BoardColumn>
        <h3>New</h3>
        <CardEditMode setIsEditMode={() => saveCard} newMode/>
       </BoardColumn>
      <BoardColumn>
        <h3>Todo</h3>
        {todoListMemo}
      </BoardColumn>

      <BoardColumn>
        <h3>Doing</h3>

      </BoardColumn>
      <BoardColumn>

      <h3>Done</h3>
      
      </BoardColumn>
    </BoardComponentContainer>
  );
};

export default BoardComponent;
