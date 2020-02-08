import React from 'react';

import COLORS from '../../config/Colors';
import FONTS from '../../config/Fonts';
import ICONS from '../../assets/Icons';
import TEXTS from '../../config/Texts';

import DeviceService from '../../Services/DeviceService';
const { width, height } = DeviceService.getScreenSize();

const LAR = width * 0.6; 
const ALT = height * 0.6;

import { ContainerBody, ContainerRow, TextBody } from './styles';

export default function BodyPaymentComponent ({date, type, value, flex=1}){
    return (
        <ContainerBody 
            max={LAR} 
            flex={flex}>   

            <ContainerRow flex={2}>             
                <ICONS.LOGO alignSelf={'center'} width={width* 0.4} height={100} />
            </ContainerRow> 

            <ContainerRow >
                <TextBody
                size={12}
                font={FONTS.TAHOMA_BOLD}
                color={COLORS.BLACK_LIGHT} >
                {TEXTS.EYMOBILE}
                </TextBody>
                    <TextBody
                    size={12}
                    font={FONTS.TAHOMA}
                    color={COLORS.BLACK_LIGHT} >
                    {TEXTS.ADDRESS}
                </TextBody>
                    <TextBody
                    size={12}
                    font={FONTS.TAHOMA}
                    color={COLORS.BLACK_LIGHT} >
                    {TEXTS.NUMBER}
                </TextBody>
            </ContainerRow> 

            <ContainerRow>   
                <TextBody
                size={20}
                font={FONTS.TAHOMA_BOLD}
                color={COLORS.BLACK_LIGHT} >
                R$ {value}
                </TextBody>

                <TextBody
                    size={12}
                    font={FONTS.TAHOMA}
                    color={COLORS.BLACK_LIGHT} >
                    {type}
                </TextBody>
            </ContainerRow>

            <ContainerRow>
                <TextBody
                    size={10}
                    font={FONTS.TAHOMA}
                    color={COLORS.BLACK_LIGHT} >
                    {date}
                </TextBody>
            </ContainerRow>

        </ContainerBody>
    )
}