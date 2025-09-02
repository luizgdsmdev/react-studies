import { Buttom, ButtomOptionSide, ButtomOptionTop, ButtomExpanded } from "./styles";

export const Button = (props) => {
    const {value, onClick} = props;
    return (
        <Buttom onClick={onClick}>{value}</Buttom> 
    ) 
} 

export const ButtonOptionSide = (props) => {
    const {value, onClick} = props;
    return (
        <ButtomOptionSide  onClick={onClick}>{value}</ButtomOptionSide>
    )
} 

export const ButtonOptionTop = (props) => {
    const {value, onClick} = props;
    return (
        <ButtomOptionTop onClick={onClick}>{value}</ButtomOptionTop>
    )
} 

export const ButtonZero = (props) => {
    const {value, onClick} = props;
    return (
        <ButtomExpanded onClick={onClick}>{value}</ButtomExpanded>
    )
} 

