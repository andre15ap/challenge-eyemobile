import styled from 'styled-components/native';

export const ContainerRow = styled.View`
   flex: ${props => props.flex || 1};;
   justify-content: ${props => props.align || 'center'};
   height: 100%;
   padding: 8px;
`;

export const TextBody = styled.Text`
    align-self: center;
    font-family: ${props => props.font};
    font-size: ${props => props.size || 15}px;
    color: ${props => props.color || '#fff'};
    text-align: center;
`;

export const ButtomConfirm = styled.TouchableOpacity`
 padding: 15px 40px;
 margin-bottom: 5px;
 border-radius: 50px;
 align-items: center;
 justify-content: center;
 background: ${props => props.color}
 
`