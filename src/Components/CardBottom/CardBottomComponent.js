
import React, { useEffect, useState } from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';

import DeviceService from '../../Services/DeviceService';
const { width, height } = DeviceService.getScreenSize();
import COLORS from  '../../config/Colors';
import FONTS from  '../../config/Fonts';
import ICONS from '../../assets/Icons';

const SIZE = width - 40;
const SIZE_ICON = 40.

const data = [
    
        {
            id: 1,
            icon: <ICONS.MONEY width={SIZE_ICON} height={SIZE_ICON} />,
            name: 'DINHEIRO'
        },
        {
            id: 2,
            icon: <ICONS.DEBIT width={SIZE_ICON} height={SIZE_ICON} />,
            name: 'DÉBITO'
        },
        {
            id: 3,
            icon: <ICONS.CREDIT width={SIZE_ICON} height={SIZE_ICON} />,
            name: 'CRÉDITO'
        },
        {
            id: 4,
            icon: <ICONS.VR width={SIZE_ICON} height={SIZE_ICON} />,
            name: 'V.R.'
        },
        {
            id: 5,
            icon: <ICONS.CUPOM width={SIZE_ICON} height={SIZE_ICON} />,
            name: 'CUPOM'
        },
];

import {Container, ContainerCard, ContainerItem, TextIcon} from './styles';

export default function CardBottomComponent ({click}){
    const [itens, setItens] = useState([])


    useEffect(()=>{
        //setItens(data)
    }, []);


    const renderItem = (item) =>{
        return (
            <ContainerItem
                onPress={() => click(item.name)}>
                {item.icon}
                <TextIcon 
                    size={20}
                    color={COLORS.BLACK_LIGHT}
                    font={FONTS.DIN}>
                    {item.name}
                </TextIcon> 
            </ContainerItem>
        )
    }


    return (
        <Container 
            background={COLORS.WHITE} width={SIZE}>
            <SwiperFlatList
                //index={0}
                // data={data}
                // renderItem={renderItem}
                showPagination
                paginationDefaultColor={COLORS.GRAY_LIGHT}
                paginationActiveColor={COLORS.PRIMARY_LIGHT} >
                
                <ContainerCard width={SIZE}> 
                    {renderItem(data[0])}
                    {renderItem(data[1])}
                    {renderItem(data[2])}
                </ContainerCard>
                
                <ContainerCard width={SIZE}> 
                    {renderItem(data[3])}
                    {renderItem(data[4])}
                </ContainerCard>
           </SwiperFlatList>
                  
        </Container>
    )
}
