import { ChangeEvent, useState } from "react";
import InputComponent from "../../common/input-component/input-component";
import { ICardEditModeModel } from "./card-edit-mode-models";
// IMPORTAR HOOK DE SALVAR NA API

const CardEditMode = (
    {setIsEditMode}: ICardEditModeModel
) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  return (
    <>
      <InputComponent
        onChange={(e) => {
          setCardTitle(e.target.value);
        }}
      />
      <button onClick={() => setIsEditMode()}>DISCARD</button>
      <button onClick={() => setIsEditMode()}>SAVE</button>
    </>
  );
};

export default CardEditMode;
