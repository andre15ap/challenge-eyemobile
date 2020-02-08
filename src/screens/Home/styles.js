import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
`

export const ContainerFooter = styled.View`
    flex: ${props => props.flex};
    padding: 0 20px;
    justify-content:center;
`
