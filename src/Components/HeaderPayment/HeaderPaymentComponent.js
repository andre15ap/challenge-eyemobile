import React from 'react';
import { Icon } from 'native-base';

import COLORS from '../../config/Colors';
import FONTS from '../../config/Fonts';
import TEXTS from '../../config/Texts';

import DeviceService from '../../services/deviceService';
const { width, height } = DeviceService.getScreenSize();

import { HeaderRow, TextHeader, ButtomBack } from './styles';

export default function HeaderPaymentComponent ({navigation, flex=1}){
    function click(){
        navigation.goBack()
    }

    return (
        <HeaderRow 
            flex={flex}
            max={width * 0.7}
            align={'flex-start'}>
            <ButtomBack
                onPress={()=>click()}>
                <Icon 
                    style={{color:COLORS.WHITE, fontSize: 20 }} 
                    type="Ionicons" 
                    name="ios-arrow-back" />
            </ButtomBack>
            
            <TextHeader
                size={20}
                font={FONTS.DIN}
                color={COLORS.WHITE}
                width={width}>
                {TEXTS.HEADER}
            </TextHeader>
        </HeaderRow>
    )
}