import React, { useEffect, useState} from 'react';

import BackgroundComponent from '../../Components/Background/BackgroundComponent';
import COLORS from '../../config/Colors';
import FONTS from '../../config/Fonts';
import getDate from '../../Services/getDate';

import CircleButtonComponent from '../../Components/CircleButton/CircleButtonComponent';
import CardBottomComponent from '../../Components/CardBottom/CardBottomComponent';

import { Container, ContainerBody, RowNumbers, RowTexts, TextTop } from './styles';


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


    function change(value, index) {
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

                <ContainerBody flex={2}>
                    <RowTexts>
                        <TextTop 
                            size={45}
                            color={COLORS.WHITE}
                            type={'normal'}
                            font={FONTS.DIN}> 
                            R$ 
                        </TextTop>
                        <TextTop 
                            size={60}
                            color={COLORS.WHITE}
                            type={'normal'}
                            font={FONTS.DIN}
                            paddingButtom={true}> 
                            {maskDinner(total)}
                        </TextTop>
                    </RowTexts>
                    <RowTexts marginTop={1}>
                        <TextTop 
                            size={20}
                            color={COLORS.WHITE}
                            type={'normal'}
                            font={FONTS.DIN}> 
                            TOTAL A PAGAR
                        </TextTop>
                    </RowTexts>
                </ContainerBody>

                <ContainerBody flex={8}>
                    <RowNumbers>
                        <CircleButtonComponent click={clickKeyboard} number={1} />
                        <CircleButtonComponent click={clickKeyboard} number={2} />
                        <CircleButtonComponent click={clickKeyboard} number={3} />
                    </RowNumbers>

                    <RowNumbers>
                        <CircleButtonComponent click={clickKeyboard} number={4} />
                        <CircleButtonComponent click={clickKeyboard} number={5} />
                        <CircleButtonComponent click={clickKeyboard} number={6} />
                    </RowNumbers>

                    <RowNumbers>
                        <CircleButtonComponent click={clickKeyboard} number={7} />
                        <CircleButtonComponent click={clickKeyboard} number={8} />
                        <CircleButtonComponent click={clickKeyboard} number={9} />
                    </RowNumbers>

                    <RowNumbers>
                        <CircleButtonComponent />
                        <CircleButtonComponent click={clickKeyboard} number={0} />
                        <CircleButtonComponent click={clickKeyboard} icon={true} />
                    </RowNumbers>

                </ContainerBody>

                <ContainerBody flex={3}>
                    <CardBottomComponent click={clickIcon} />
                </ContainerBody>

            </Container>
            
        </BackgroundComponent>
    )
}