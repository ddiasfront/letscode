import { ChangeEvent, useState } from "react";
import InputComponent from "../../common/input-component/input-component";
import TextAreaComponent from "../../common/textarea-component/text-area-component";
import CardContainer from "../card-container/card-container";
import { ICardEditModeModel } from "./card-edit-mode-models";
import { VscSave, VscCircleSlash } from "react-icons/vsc";
import { StyledCardFooterContainer } from "../card-footer-container/card-footer-container";
import { mainColors } from "../../../design-system";
import { StyledButtonContainer } from "../../common/button-component/button-container-styles";
// IMPORTAR HOOK DE SALVAR NA API

const CardEditMode = ({ setIsEditMode }: ICardEditModeModel) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  return (
    <div style={{ width: "16em", height: "16em" }}>
      <CardContainer flex flexDirection="column">
        <div>
          <InputComponent
            placeholder={"Title"}
            onChange={(e) => {
              setCardTitle(e.target.value);
            }}
          />
        </div>
        <div style={{flexGrow: '1'}}>
          <TextAreaComponent placeholder={"Content"} />
        </div>
        <StyledCardFooterContainer>
          <StyledButtonContainer onClick={() => setIsEditMode()}>
            Discard<VscCircleSlash size={'1.2em'} style={{paddingLeft: '5px'}}/>
          </StyledButtonContainer>
          <StyledButtonContainer onClick={() => setIsEditMode()}>
            Save <VscSave size={'1.2em'} style={{paddingLeft: '5px'}}/>
          </StyledButtonContainer>
        </StyledCardFooterContainer>
      </CardContainer>
    </div>
  );
};

export default CardEditMode;
