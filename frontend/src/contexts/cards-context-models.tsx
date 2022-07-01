import { ICardComponentModels } from "../components/card-component/card-component-models";

export type ICardsContextModel = {
    cards: ICardComponentModels[];
    saveCard: (card: ICardComponentModels) => void;
    updateCard: (card: ICardComponentModels) => void;
    deleteCard: (card: ICardComponentModels) => void;
    setCards: (cards: ICardComponentModels[]) => void;
  };
  