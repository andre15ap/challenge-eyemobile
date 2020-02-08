import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';

import BackgroundComponent from '../../Components/Background/BackgroundComponent';
import COLORS from '../../config/Colors';
import { Container } from './styles';

export default function Paymentcreen({route, navigation}){
    const [type, setType] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        const { paramType } = route.params;
        const { paramValue } = route.params;
        setType(paramType);
        setValue(paramValue);
    },[])
    return (
        <BackgroundComponent 
            colors={[COLORS.SECONDARY, COLORS.SECONDARY_LIGHT]} >
        <StatusBar backgroundColor={COLORS.SECONDARY_DARK} barStyle="light-content" />
        <Container>
            <Text>Payment</Text>
            <Text>{type}</Text>
            <Text>{value}</Text>
        </Container>
        
        </BackgroundComponent>
        
    )
}