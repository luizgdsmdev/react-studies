import { VisorContentTextMinParg } from "./styles";

export const VisorContentText = (props) => {
    const {value} = props;
    return (
        <p>{value}</p>
    ) 
} 

export const VisorContentTextMin = (props) => {
    const {value} = props;
    return (
        <VisorContentTextMinParg>
            {value}
        </VisorContentTextMinParg>
    ) 
} 

