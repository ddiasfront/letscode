import { ITextAreaModels } from "./text-area-models";
import { StyledTextArea } from "./text-area-styles";


//MARKDOWN
const TextAreaComponent = ({placeholder, onBlur, value}: ITextAreaModels) => {
  return <StyledTextArea onBlur={(e) => onBlur(e.target.value)} placeholder={placeholder} defaultValue={value}/>;
};

export default TextAreaComponent;
