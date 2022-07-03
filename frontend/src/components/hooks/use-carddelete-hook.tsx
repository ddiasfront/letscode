import axios from "axios";
import { useState } from "react";
import { normalizeCards } from "../../helpers/normalizer";
import { ICardComponentModels, ICardComponentModelsBR } from "../card-component/card-component-models";

export interface UseDeleteCardModel {
    cardsDeleted: ICardComponentModels[] | null,
    cardsDeleteError: boolean,
    deleteCardAsync: (id: string) => void; 
}

export const useDeleteCards = (): UseDeleteCardModel => {
  const [cardsDeleted, setCardsDeleted] = useState(null);
  const [cardsDeleteError, setCardsDeleteError] = useState(false);

  const deleteCardAsync = async (id: string) => {
    try {
        const cards = axios.delete(`http://localhost:3333/cards/${id}`);
        cards.then(cards=> {
            setCardsDeleted(cards.data.map(((card: ICardComponentModelsBR )=> normalizeCards(card))))
        }).catch(()=> {
            setCardsDeleteError(true)
        })
    } catch (e) {
        setCardsDeleteError(true);
    }
  };
  return { cardsDeleted, cardsDeleteError, deleteCardAsync};
};