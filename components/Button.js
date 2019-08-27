import styled from 'styled-components/native';
import { theme } from "../constants";

const Button = styled.TouchableOpacity`
    background-color: ${theme.colors.primary};
    width: ${props => props.width ? props.width : '100%'};
    height: 50;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 17px;
    border-radius: 3;
    font-size: 15;
`;


export default Button;