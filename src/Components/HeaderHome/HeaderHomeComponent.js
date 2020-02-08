import React from 'react';
import { Icon } from 'native-base';

import COLORS from '../../config/Colors';
import FONTS from '../../config/Fonts';
import TEXTS from '../../config/Texts';

import DeviceService from '../../services/deviceService';
const { width, height } = DeviceService.getScreenSize();

import { ContainerBody, RowTexts, TextTop } from './styles';

export default function HeaderHomeComponent ({total, flex=2}){

    return (
        <ContainerBody flex={flex}>
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
                    {total}
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
    )
}