import { useState } from "react";
import { ICardComponentModels } from "./card-component-models";
//SAVE HOOK
//DELETE HOOK
//ADD HOOK

export const CardComponent = ({
  id,
  titulo,
  conteudo,
  lista,
}: ICardComponentModels) => {
    const [markDownContent, setMarkDownContent] = useState(null);
};
