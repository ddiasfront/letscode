import { ITextAreaModels } from "./text-area-models";
import { StyledTextArea } from "./text-area-styles";


//MARKDOWN
const TextAreaComponent = ({placeholder}: ITextAreaModels) => {
  return <StyledTextArea placeholder={placeholder} />;
};

export default TextAreaComponent;
