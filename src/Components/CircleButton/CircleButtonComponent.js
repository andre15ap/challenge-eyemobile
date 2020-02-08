import React from 'react';
import { Icon } from 'native-base';

import DeviceService from '../../services/deviceService';
const { width, height } = DeviceService.getScreenSize();
import COLORS from  '../../config/Colors';
import FONTS from  '../../config/Fonts';

import {Container, BtnCircle, TextCenter} from './styles';

export default function CircleButtomComponent({number = false, icon=false, click}){

 

    function renderIcon (){
        return icon ? (
                <BtnCircle onPress={() => click(false)}>
                    <Icon style={{color:COLORS.WHITE, fontSize: 25 }} type="FontAwesome5" name="backspace" />
                </BtnCircle> 
            ): null;
    }

    return (
        <Container size={width * 0.18}>
        {number || number === 0 ? 
            <BtnCircle onPress={() => click(number)}>
                <TextCenter 
                    size={25}
                    font={FONTS.DIN}>
                    {number}
                </TextCenter>
            </BtnCircle>
            : renderIcon() }
        </Container>
    )
}