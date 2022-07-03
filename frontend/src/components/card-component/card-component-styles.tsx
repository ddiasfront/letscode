import styled from "styled-components";
import { StyledButtonContainer } from "../common/button-component/button-container-styles";

export const ListButtonsWrapper = styled.div`
display: flex;
flex-direction: row;
position: relative;
top: 120px;
justify-content: space-between;
`

export interface Props  {
 left?: string,
 right?: string
}

export const ListButtons = styled(StyledButtonContainer)<Props>`
transition: all 0.2s;
border-radius: 10px;
position: relative;
left: ${props => props.left ? props.left : 'inherit' };
right: ${props => props.right ? props.right : 'inherit' };
&:hover {
    left: ${props => props.left ? '-25px' : 'inherit' };
    right: ${props => props.right ? '-22px' : 'inherit' };
}
`