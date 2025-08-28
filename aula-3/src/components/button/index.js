import { Buttom, ButtomOptionSide, ButtomOptionTop, ButtomExpanded } from "./styles";

export const Button = (props) => {
    const {value} = props;
    return (
        <Buttom>{value}</Buttom> 
    ) 
} 

export const ButtonOptionSide = (props) => {
    const {value} = props;
    return (
        <ButtomOptionSide>{value}</ButtomOptionSide>
    )
} 

export const ButtonOptionTop = (props) => {
    const {value} = props;
    return (
        <ButtomOptionTop>{value}</ButtomOptionTop>
    )
} 

export const ButtonZero = (props) => {
    const {value} = props;
    return (
        <ButtomExpanded>{value}</ButtomExpanded>
    )
} 

