import axios from "axios";
import { useState } from "react";
import { normalizeCards } from "../../helpers/normalizer";
import { ICardComponentModelsBR } from "../card-component/card-component-models";
import { UseGetCardsModel } from "./user-getcards-hook-model";

export const useGetCards = (): UseGetCardsModel => {
  const [cardsResponse, setCardsResponse] = useState(null);
  const [cardsError, setCardsError] = useState(false);

  const getCards = async () => {
    try {
        const cards = axios.get('http://localhost:3333/cards/');
        cards.then(cards=> {
          setCardsResponse(cards.data.map(((card: ICardComponentModelsBR )=> normalizeCards(card))))
        }).catch(()=> {
          setCardsError(true)
        })
    } catch (e) {
        setCardsError(true);
    }
  };
  return { cardsResponse, cardsError, getCards};
};