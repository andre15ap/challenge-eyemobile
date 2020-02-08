import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native';

import BackgroundComponent from '../../Components/Background/BackgroundComponent';
import HeaderPaymentComponent from '../../Components/HeaderPayment/HeaderPaymentComponent';
import BodyPaymentComponent from '../../Components/BodyPayment/BodyPaymentComponent';
import FooterPaymentComponent from '../../Components/FooterPayment/FooterPaymentComponent';
import ReceiptComponent from '../../Components/Receipt/ReceiptComponent';

import COLORS from '../../config/Colors';

import { Container } from './styles';

export default function Paymentcreen({route, navigation}){
    const [type, setType] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');

    function confirm() {
        navigation.replace("Home");
    }

    useEffect(() => {
        const { paramType, paramValue, paramDate } = route.params;
        setType(paramType);
        setValue(paramValue);
        setDate(paramDate);
    },[])

    return (
        <BackgroundComponent colors={[COLORS.SECONDARY, COLORS.SECONDARY_LIGHT]} >
            <StatusBar backgroundColor={COLORS.SECONDARY_DARK} barStyle="light-content" />
            <Container>
                <ReceiptComponent />
                
                <HeaderPaymentComponent 
                    flex={2}
                    navigation={navigation} />

                <BodyPaymentComponent
                    flex={7}
                    date={date}
                    type={type}
                    value={value} />

                <FooterPaymentComponent 
                    flex={3}  
                    confirm={confirm} />
                
            </Container>
        
        </BackgroundComponent>
    )
}