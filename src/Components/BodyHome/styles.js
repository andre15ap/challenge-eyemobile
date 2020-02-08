import styled from 'styled-components/native';

export const ContainerBody = styled.View`
    flex: ${props => props.flex};
    padding: 0 20px;
    justify-content:center;
`

export const RowNumbers = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
`