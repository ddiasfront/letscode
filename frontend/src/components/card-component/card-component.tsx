import { useState } from "react";
import { ICardComponentModels } from "./card-component-models";
import CardEditMode from "./card-edit-mode/card-edit-mode";
import CardStaticMode from "./card-static-mode/card-static-mode";
//SAVE HOOK
//DELETE HOOK
//ADD HOOK

const CardComponent = ({
  id,
  title,
  content,
  list,
}: ICardComponentModels) => {
  const [isEditMode, setIsEditMode] = useState(false);
  return isEditMode ? (
    <CardEditMode 
    title={title}
    content={content}
    list={list}
    setIsEditMode={() => setIsEditMode(!isEditMode)}/>
  ) : (
    <CardStaticMode
    id={id}
    title={title}
    content={content}
    list={list}
    setIsEditMode={() => setIsEditMode(!isEditMode)} />
  );
};

export default CardComponent