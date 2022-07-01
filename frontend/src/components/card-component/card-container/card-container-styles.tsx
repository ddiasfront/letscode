import styled from "styled-components";
import { borderRadius, mainColors } from "../../../design-system";
import { ICardContainerModel } from "./card-container-models";

const StyledCardContainer = styled.div<ICardContainerModel>`
    transition: all 0.2s;   
    border-radius: ${borderRadius.md};
    border: 1px solid ${mainColors.grey.heavy};
    box-shadow: 2px 2px 3px ${mainColors.shadows.simple};
    width: 100%;
    height: 100%;
    display: ${props => props.flex ? 'flex' : 'inherit'}; 
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'inherit'}; 
    justify-content: ${props => props.justify ? props.justify : 'inherit'}; 
    &:hover { 
        transform: translate(-3px, -3px);
        box-shadow: 0px 0px 3px ${mainColors.grey.light};
        position:relative;
    }
`;

export { StyledCardContainer };