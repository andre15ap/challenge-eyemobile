import styled from 'styled-components/native';

export const ContainerBody = styled.View`
    flex: ${props => props.flex};
    padding: 0 20px;
    justify-content:center;
`

export const RowTexts = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    margin-top: ${props => props.marginTop ||10}px;
`

export const TextTop = styled.Text`
    margin: 0 8px;
    font-size: ${props => props.size}px;
    color: ${props => props.color};
    font-weight: ${props => props.type};
    font-family: '${props => props.font}';
    margin-bottom: ${props => props.paddingButtom ? -5 : 0}px;  
`