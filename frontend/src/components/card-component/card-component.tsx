import { useContext, useEffect, useState } from "react";
import { CardsContext } from "../../contexts/cards-context";
import { AlertComponent } from "../alert-component/alert-component";
import { usePutCards } from "../hooks/use-cardput-hook";
import { ICardComponentModels } from "./card-component-models";
import { ListButtons, ListButtonsWrapper } from "./card-component-styles";
import CardEditMode from "./card-edit-mode/card-edit-mode";
import CardStaticMode from "./card-static-mode/card-static-mode";

enum BoardColumns {
  ToDo = "ToDo",
  Doing = "Doing",
  Done = "Done",
}

enum Directions {
  LEFT,
  RIGHT,
}

const CardComponent = ({ id, title, content, list }: ICardComponentModels) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { putCard, putCardResponse, putCardError } = usePutCards();
  const {updateCard, dispatchAlertMessageAndClear} = useContext(CardsContext);

  const handlePutCard = (direction: Directions) => {
    const indexOfDirection = Object.keys(BoardColumns).indexOf(list);
    const compass = direction == Directions.LEFT ? 1 : 0;
    const nextResultIndexOfDirection = compass ? Object.keys(BoardColumns)[indexOfDirection - 1] : Object.keys(BoardColumns)[indexOfDirection + 1];

    const nextListDirection = nextResultIndexOfDirection?.toString();
    const puttingCard = {
      titulo: title,
      id: id,
      conteudo: content,
      lista:  nextListDirection
    }
    if (nextListDirection) putCard(puttingCard);
  };

  useEffect(() => {
    if(updateCard && putCardResponse ) updateCard(putCardResponse)
  }, [putCardResponse])
  
  useEffect(() => {
    if(putCardError && dispatchAlertMessageAndClear) {
      dispatchAlertMessageAndClear('Error trying to edit card, please contact support')
    }
    
  }, [putCardError])

  return (
    <div>
      <ListButtonsWrapper>
        <ListButtons
          left="-12px"
          onClick={() => handlePutCard(Directions.LEFT)}
        >
          {"<"}
        </ListButtons>
        <ListButtons
          onClick={() => handlePutCard(Directions.RIGHT)}
          right="-10px"
        >
          {">"}
        </ListButtons>
      </ListButtonsWrapper>
      {isEditMode ? (
        <CardEditMode
          id={id}
          title={title}
          content={content}
          list={list}
          setIsEditMode={() => setIsEditMode(!isEditMode)}
        />
      ) : (
        <CardStaticMode
          id={id}
          title={title}
          content={content}
          list={list}
          setIsEditMode={() => setIsEditMode(!isEditMode)}
        />
      )}
    </div>
  );
};

export default CardComponent;
