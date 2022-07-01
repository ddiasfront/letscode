import styled from "styled-components";
import { borderRadius, mainColors } from "../../../design-system";
import { ICardContainerModel } from "./card-container-models";

const StyledCardContainer = styled.div<ICardContainerModel>`
    padding: 15px;
    margin: 2px;
    background-color: ${mainColors.grey.letscodelight};
    transition: all 0.5s;   
    border-radius: ${borderRadius.md};
    border: 1px solid ${mainColors.grey.letscodesutile};
    box-shadow: 2px 2px 3px ${mainColors.shadows.darkMode};
    width: 100%;
    height: 100%;
    display: ${props => props.flex ? 'flex' : 'inherit'}; 
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'inherit'}; 
    justify-content: ${props => props.justify ? props.justify : 'inherit'}; 
    &:hover { 
        transform: translate(-5px, -5px);
        box-shadow: 0px 0px 3px ${mainColors.shadows.darkMode};
        position:relative;
    }
    > div {
        margin: 5px 0 5px 0;
    }
`;

export { StyledCardContainer };