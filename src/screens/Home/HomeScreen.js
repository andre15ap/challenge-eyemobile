import React, { useEffect, useState} from 'react';

import BackgroundComponent from '../../Components/Background/BackgroundComponent';
import COLORS from '../../config/Colors';
import getDate from '../../services/getDate';

import HeaderHomeComponent from '../../Components/HeaderHome/HeaderHomeComponent';
import BodyHomeComponent from '../../Components/BodyHome/BodyHomeComponent';
import FooterHomeComponent from '../../Components/FooterHome/FooterHomeComponent';

import { Container, ContainerFooter } from './styles';


export default function HomeScreen({route, navigation}){
    const [total, setTotal] = useState("000");

    function maskDinner(val){
        return val
        .replace(/(\w+?)(\w{5})$/, '$1.$2')
        .replace(/(\w+?)(\w{2})$/, '$1,$2')
    }

    function clickIcon(value){
        if (total !== '000'){
            let date = getDate();
            navigation.navigate('Payment', { paramType:value, paramValue: maskDinner(total), paramDate: date});
        }
    }

    function clickKeyboard(val){
        if (val || val === 0){
            setNumber(val);
        }else{
            let newVal = backSpace();
            setTotal(newVal);
        }
    }

    function backSpace(){
        let result = total;
        result = result.slice(0, -1);
        
        if(result.length < 3 ){
            result = '0'+ result;
        }
        return result;
    }

    function setNumber(val){
        if (total.length >= 8){
            return
        }
        let newVal = replace(val);
        setTotal(newVal);
    }


    function change(value) {
        let result = value;
        if(result.length > 3 && result[0] == '0'){
            result = result.slice(1);
        }
        return result;
    }

    function replace(val){
        let newVal = total.toString() + val;
        newVal = change(newVal);
        return newVal;
    }


    return (
        <BackgroundComponent 
            colors={[COLORS.PRIMARY, COLORS.PRIMARY_LIGHT]} >
            <Container>
                <HeaderHomeComponent
                    flex={2}
                    total={maskDinner(total)} />

                <BodyHomeComponent 
                    flex={8}
                    clickKeyboard={clickKeyboard} />

                <ContainerFooter flex={3}>
                    <FooterHomeComponent click={clickIcon} />
                </ContainerFooter>

            </Container>
        </BackgroundComponent>
    )
}