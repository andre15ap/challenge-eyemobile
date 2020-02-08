import React from 'react';
import { Icon } from 'native-base';

import COLORS from '../../config/Colors';
import FONTS from '../../config/Fonts';
import TEXTS from '../../config/Texts';

import DeviceService from '../../services/deviceService';
const { width, height } = DeviceService.getScreenSize();

import { ContainerRow, TextBody, ButtomConfirm } from './styles';

export default function FooterPaymentComponent ({confirm, flex=1}){
    
    return (
        <ContainerRow 
            flex={flex}>
            <ButtomConfirm
                color={COLORS.SECONDARY}
                onPress={()=>confirm()}>
                <TextBody
                    size={18}
                    font={FONTS.TAHOMA}
                    color={COLORS.WHITE} >
                    {TEXTS.BTN_PAYMENT}
                </TextBody>
            </ButtomConfirm>
        </ContainerRow>
    )
}