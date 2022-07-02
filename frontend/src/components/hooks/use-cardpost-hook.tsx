import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { ICardComponentModels, ICardComponentModelsBR } from "../card-component/card-component-models";

export interface IUseCardPostModels {
    cardPosted: ICardComponentModels | null,
    errorCardPosted: boolean,
    cardPost: (title:string, content:string, list:string) => {}
}

export const useCardPost = (): IUseCardPostModels => {
  const [cardPosted, setCardPosted] = useState<ICardComponentModels | null>(null);
  const [errorCardPosted, setErrorCardPosted] = useState(false);
  const cardPost = async (title:string, content:string, list:string) => {
    try {
        const cardPost: AxiosResponse<ICardComponentModelsBR> = await axios.post('http://localhost:3333/cards/', {
                titulo: title,
                conteudo: content,
                lista: list
        });
        const newCard = {
          title: cardPost.data.titulo,
          content: cardPost.data.conteudo,
          list: cardPost.data.lista,
          id: cardPost.data.id
        }
        setCardPosted(newCard);
    } catch (e) {
        setErrorCardPosted(true);
    }
  };
  return { errorCardPosted, cardPosted, cardPost};
};