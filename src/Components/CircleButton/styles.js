import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${props => props.size}px;
    height: ${props => props.size}px;  
`

export const BtnCircle = styled.TouchableOpacity`
    flex:1;
    padding: 5px;
    border-style: solid;
    border-width: 2px;
    border-color: #fff;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    
  `


export const TextCenter = styled.Text`
    color: #fff;
    font-size: ${props => props.size || 20}px;
    /* font-family: ${props => props.font} */
  `