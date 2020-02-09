import styled from 'styled-components/native';

export const HeaderRow = styled.View`
   flex: ${props => props.flex || 1};;
   justify-content: flex-start;
   align-items: flex-start;
   flex-direction: row;
   /* height: 100%; */
   width: 100%;
`;


export const ButtomBack = styled.TouchableOpacity`
   flex:1;
   z-index:2;
   justify-content: center;
   align-items: flex-start;
   padding: 5px 0;
   width: 100%;
`;


export const TextHeader = styled.Text`
   /* flex:9; */
   z-index: 1;
   padding: 5px 0;
   font-family: ${props => props.font};
   font-size: ${props => props.size || 15}px;
   color: ${props => props.color || '#fff'};
   justify-content: center;
   text-align: center;
   width:100%;
   position: absolute;
`;