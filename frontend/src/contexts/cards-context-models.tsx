import { ICardComponentModels } from "../components/card-component/card-component-models";

export interface ICardsContextModel {
    cards: ICardComponentModels[];
    saveCard?: (card: ICardComponentModels) => void;
    updateCard?: (card: ICardComponentModels) => void;
    deleteCard?: (id: string) => void;
    setCards?: (cards: ICardComponentModels[]) => void;
  };
  