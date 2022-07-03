import React from "react";
import styled from "styled-components"
import { borderRadius, mainColors } from "../../design-system";
import CardContainer from "../card-component/card-container/card-container"

const StyledContainerAlert = styled.span`
    position: absolute;
    top: 5;
    padding: 10px;
    left: 5;
    background-color: #ac1e1e;
    color: ${mainColors.white.notpurewhite};
    z-index:999999999;
    border-radius: ${borderRadius.sm};
    font-weight: lighter;
    font-size: 14px;
    box-shadow: 0px 0px 6px ${mainColors.shadows.darkMode};
    
`;

export interface IAlertComponentModel {
children: JSX.Element[] | string;
}

export const AlertComponent: React.FC<IAlertComponentModel> = ({children}) => {
    return(
    <StyledContainerAlert>
        {children}
    </StyledContainerAlert>
)
}