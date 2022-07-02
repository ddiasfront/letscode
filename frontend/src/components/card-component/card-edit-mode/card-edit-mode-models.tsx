import { ICardComponentModels } from "../card-component-models";
import { ICardStaticModeModel } from "../card-static-mode/card-static-mode-models";

export interface ICardEditModeModel extends ICardStaticModeModel{
    setIsEditMode: () => void,
    newMode?: boolean,
}