import { ICardComponentModels, ICardComponentModelsBR } from "../components/card-component/card-component-models";

export interface ICardsContextModel {
    cards: ICardComponentModels[];
    saveCard?: (card: ICardComponentModels) => void;
    updateCard?: (card: ICardComponentModelsBR) => void;
    deleteCard?: (id: string) => void;
    setCards?: (cards: ICardComponentModels[]) => void;
    alertMessage?: string,
    dispatchAlertMessageAndClear?: (message: string) => void;
    alertIsOn?: boolean
  };
  