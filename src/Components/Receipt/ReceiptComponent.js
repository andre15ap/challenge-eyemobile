
import React from 'react';
import styled from 'styled-components/native';
import Receipt from '../../assets/svgs/Receipt';

import DeviceService from '../../services/deviceService';
const { width, height } = DeviceService.getScreenSize();

const WID = width * 0.6; 
const HEI = height * 0.6;

export default function ReceiptComponent({cWidth, cHeight}){
    return (
        <Receipt 
            width={WID} 
            height={HEI}
            position={'absolute'}
            top={(height * 0.5) - (HEI * 0.6)}
            left={(width * 0.5) - (WID * 0.5) } />
    )
}

