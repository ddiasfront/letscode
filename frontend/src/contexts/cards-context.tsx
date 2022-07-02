import React, { createContext, useState } from "react";
import { ICardComponentModels } from "../components/card-component/card-component-models";
import { ICardsContextModel } from "./cards-context-models";

export const initialState: ICardsContextModel = {
  cards: []
}
export const CardsContext = createContext<ICardsContextModel>(initialState);

const CardsProvider: React.FC<any> = ({children}) => {

  const [cards, setCards] = useState<ICardComponentModels[]>([]);
  
  const saveCard = (card: ICardComponentModels) => {
    const newCard: ICardComponentModels = {
        id: card.id,
        title: card.title,
        content: card.content,
        list: 'ToDo'
    }
    setCards([...cards, newCard])
  }
  
  const filterCards = (card: ICardComponentModels) => {
    cards.filter((updtCard: ICardComponentModels) => {
      if(card.id === updtCard.id) {
          updtCard.id = card.id,
          updtCard.title = card.title,
          updtCard.content = card.content,
          updtCard.list = card.list,
          setCards([...cards])
      }
  });
  }
  const updateCard = (card: ICardComponentModels) => {
  }
  
  const deleteCard = (id: string) => {
    setCards(cards.filter(dltCard => id !== dltCard.id))
  }

  return <CardsContext.Provider value={{cards, saveCard, updateCard, deleteCard, setCards}}>{children}</CardsContext.Provider>
};

export default CardsProvider;
