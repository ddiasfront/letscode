import styled from "styled-components";
import { borderRadius, mainColors } from "../../../design-system";
import { ICardContainerModel } from "./card-container-models";

const StyledCardContainer = styled.div<ICardContainerModel>`
    color: ${mainColors.white.notpurewhite};
    padding: 15px;
    font-size: 14px;
    margin: 2px;
    background-color: #1a1a1a;
    transition: all 0.5s;   
    border-radius: ${borderRadius.md};
    box-shadow: 2px 2px 3px ${mainColors.shadows.darkMode};
    width: 100%;
    height: 100%;
    font-weight: 200;
    display: ${props => props.flex ? 'flex' : 'inherit'}; 
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'inherit'}; 
    justify-content: ${props => props.justify ? props.justify : 'inherit'};  
    box-shadow: 0px 0px 6px ${mainColors.shadows.darkMode};
    position:relative;
    > div {
        margin: 5px 0 5px 0;
    }
    h3 {
        font-size: 18px;
        margin: 0 0 10px 0;
        font-weight: 200;
        color: ${mainColors.yellow.letscode}
    }
    box-sizing:border-box;
`;

export { StyledCardContainer };