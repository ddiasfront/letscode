import React, { createContext, useState } from "react";
import {
  ICardComponentModels,
  ICardComponentModelsBR,
} from "../components/card-component/card-component-models";
import { ICardsContextModel } from "./cards-context-models";

export const initialState: ICardsContextModel = {
  cards: [],
};
export const CardsContext = createContext<ICardsContextModel>(initialState);

export interface ICardsProviderModel {
  children: JSX.Element[] | string
 }

const CardsProvider: React.FC<ICardsProviderModel> = ({ children }) => {
  const [cards, setCards] = useState<ICardComponentModels[]>([]);
  const [alertIsOn, setAlertIsOn] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const dispatchAlertMessageAndClear = (message: string) => {
    setAlertIsOn(true);
    setAlertMessage(message);
    setTimeout(() => {
      setAlertIsOn(false);
    }, 5000);
  };

  const saveCard = (card: ICardComponentModels) => {
    const newCard: ICardComponentModels = {
      id: card.id,
      title: card.title,
      content: card.content,
      list: "ToDo",
    };
    setCards([...cards, newCard]);
  };

  const updateCard = (updtCard: ICardComponentModelsBR) => {
    cards.filter((card: ICardComponentModels) => {
      if (card.id === updtCard.id) {
        card.id = updtCard.id;
        card.title = updtCard.titulo;
        card.content = updtCard.conteudo;
        card.list = updtCard.lista;
        setCards([...cards]);
      }
    });
  };

  const deleteCard = (id: string) => {
    setCards(cards.filter((dltCard) => id !== dltCard.id));
  };

  return (
    <CardsContext.Provider
      value={{
        cards,
        saveCard,
        updateCard,
        deleteCard,
        setCards,
        alertMessage,
        alertIsOn,
        dispatchAlertMessageAndClear
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
