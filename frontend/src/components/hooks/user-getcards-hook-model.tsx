import { ICardComponentModels } from "../card-component/card-component-models";

export interface UseGetCardsModel {
    cardsResponse: ICardComponentModels[] | null,
    cardsError?: boolean,
    getCards: () => void

}