import styled from "styled-components";
import { borderRadius, mainColors } from "../../../../design-system";

const StyledInput = styled.input`
    padding: 3.5px;
    width: 100%;
    height: 100%;
    transition: all 0.2s;
    border:none;
    border: 1.25px solid ${mainColors.grey.light};
    border-radius: ${borderRadius.md};
    &:active {
        border: 1.25px solid ${mainColors.grey.light};
    }
    &:focus {
        outline: none;
        border: 1.25px solid ${mainColors.yellow.letscode};
    }
`;

const StyledTextArea = styled.textarea`
    padding: 3.5px;
    width: 100%;
    height: 100%;
    transition: all 0.2s;
    border:none;
    border: 1.25px solid ${mainColors.grey.light};
    border-radius: ${borderRadius.md};
    &:active {
        border: 1.25px solid ${mainColors.grey.light};
    }
    &:focus {
        outline: none;
        border: 1.25px solid ${mainColors.yellow.letscode};
}
`

export {StyledInput, StyledTextArea};