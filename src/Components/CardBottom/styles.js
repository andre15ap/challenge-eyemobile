import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    width: ${props => props.width}px;
    height: 100%; 
    background: ${props => props.background}; 
    align-self: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`

export const ContainerCard = styled.View`
    flex:1;
    width: ${props => props.width}px;
    height: 100%; 
    flex-direction: row;
    justify-content: center;
    padding: 20px 25px;
   
`

export const ContainerItem = styled.TouchableOpacity`
    justify-content: flex-start;
    align-items: center;
    margin: 0px 10px;
`

export const TextIcon = styled.Text`
    margin: 0 8px;
    margin-top: 12px;
    font-size: ${props => props.size}px;
    color: ${props => props.color};
    font-weight: ${props => props.type || 'normal'};
    font-family: '${props => props.font}';  
`