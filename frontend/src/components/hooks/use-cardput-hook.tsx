import axios from "axios";
import { useState } from "react";
import { normalizeCards } from "../../helpers/normalizer";
import {
  ICardComponentModels,
  ICardComponentModelsBR,
} from "../card-component/card-component-models";

export interface UsePutCardModel {
  putCardResponse: ICardComponentModelsBR | null;
  putCardError: boolean;
  putCard: (card: ICardComponentModelsBR) => void;
}

export const usePutCards = (): UsePutCardModel => {
  const [putCardResponse, setPutCardRespone] = useState(null);
  const [putCardError, setPutCardError] = useState(false);

  const putCard = async ({
    titulo,
    conteudo,
    lista,
    id,
  }: ICardComponentModelsBR) => {

    setPutCardError(false);
    axios
      .put(`http://localhost:3333/cards/${id}`, {
        titulo,
        conteudo,
        lista,
        id,
      })
      .then((card) => {
        setPutCardRespone(card.data);
        setPutCardError(false);
      })
      .catch((e) => {
        setPutCardError(true);
      })
  };
  return { putCardResponse, putCardError, putCard };
};
