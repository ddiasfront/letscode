import { ITextAreaModels } from "./text-area-models";
import { StyledTextArea } from "./text-area-styles";


//MARKDOWN
const TextAreaComponent = ({placeholder, onBlur}: ITextAreaModels) => {
  return <StyledTextArea onBlur={(e) => onBlur(e.target.value)} placeholder={placeholder}/>;
};

export default TextAreaComponent;
