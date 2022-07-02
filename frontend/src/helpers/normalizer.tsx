import { ICardComponentModels, ICardComponentModelsBR } from "../components/card-component/card-component-models";

export const normalizeCards = (card: ICardComponentModelsBR): ICardComponentModels => {
    const newCard: ICardComponentModels = {
        title: card.titulo,
        content: card.conteudo,
        list: card.lista,
        id: card.id
    }
    return newCard;
}