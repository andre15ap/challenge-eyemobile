import styled from 'styled-components/native';

export const ContainerBody = styled.View`
    flex: ${props => props.flex || 1};
    justify-content: ${props => props.align || 'center'};
    height: 100%;
    padding: 20px 8px;
    max-width: ${props => props.max || 230}px;
    /* background: red; */
`;
export const ContainerRow = styled.View`
    flex: ${props => props.flex || 1};
    justify-content: ${props => props.align || 'center'};
    height: 100%;
    padding: 8px;
    max-width: ${props => props.max || 230}px;
    margin-top: 10px;
`;

export const TextBody = styled.Text`
   align-self: center;
   font-family: ${props => props.font};
   font-size: ${props => props.size || 15}px;
   color: ${props => props.color || '#fff'};
   text-align: center;
   margin-top: 5px;
`;