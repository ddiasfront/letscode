import { useState } from "@storybook/addons";
import React, { createContext } from "react";
import { ICardComponentModels } from "../components/card-component/card-component-models";
import { ICardsContextModel } from "./cards-context-models";

export const initialState: ICardComponentModels[] = [
  {
    id: "",
    titulo: "",
    conteudo: "",
    lista: "",
  },
];

export const CardsContext = createContext<ICardsContextModel | null>(null);

const CardsProvider: React.FC<any> = ({children}) => {
  const [cards, setCards] = useState<ICardComponentModels[]>(initialState);
  
  const saveCard = (card: ICardComponentModels) => {
    const newCard: ICardComponentModels = {
        id: card.id,
        titulo: card.titulo,
        conteudo: card.conteudo,
        lista: 'ToDo'
    }
    setCards([...cards, newCard])
  }
  
  const updateCard = (card: ICardComponentModels) => {
    cards.filter((updtCard: ICardComponentModels) => {
        if(card.id === updtCard.id) {
            updtCard.id = card.id ? card.id : updtCard.id,
            updtCard.titulo = card.titulo ? card.titulo : updtCard.titulo,
            updtCard.conteudo = card.conteudo ? card.conteudo : updtCard.conteudo,
            updtCard.lista = card.lista ? card.lista : updtCard.lista,
            setCards([...cards])
        }
    });
  }
  
  const deleteCard = (card: ICardComponentModels) => {
    setCards(cards.filter(dltCard => card.id !== dltCard.id))
  }

  return <CardsContext.Provider value={{cards, saveCard, updateCard, deleteCard, setCards}}>{children}</CardsContext.Provider>
};

export default CardsProvider;
