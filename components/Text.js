import styled from 'styled-components';
import { theme } from '../constants';


const Text = styled.Text`
    color: ${props => props.primary ? theme.colors.primary : (props.accent ? theme.colors.accent : 'white')};
    font-size: ${props => props.headline ? theme.fonts.header.fontSize : (props.title ? theme.fonts.title.fontSize : (props.description ? theme.fonts.body.fontSize : theme.sizes.font))};
    font-weight: ${props => props.bold ? 'bold' : 400};
    /* text-transform: ${props => props.normal && props.uppercase ? 'uppercase' : (props.capitalize ? 'capitalize' : 'lowercase')}; */
`;

export default Text;