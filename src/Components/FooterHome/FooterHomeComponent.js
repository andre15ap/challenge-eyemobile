import React, { useEffect, useState } from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';

import DeviceService from '../../services/deviceService';
import DATA from '../../services/apiService';
const { width, height } = DeviceService.getScreenSize();
import COLORS from  '../../config/Colors';
import FONTS from  '../../config/Fonts';

const SIZE = width - 40;
const SIZE_ICON = 40.

import {Container, ContainerCard, ContainerItem, TextIcon} from './styles';

export default function FooterHomeComponent ({click}){
    const [itens, setItens] = useState([])

    useEffect(()=>{
       setItens(DATA(SIZE_ICON))
    }, []);


    const renderItem = (item) =>{
        return item ? (
            <ContainerItem
                onPress={() => click(item.name)}>
                {item.icon}
                <TextIcon 
                    size={20}
                    color={COLORS.BLACK_LIGHT}
                    font={FONTS.DIN}>
                    {item.name.toUpperCase()}
                </TextIcon> 
            </ContainerItem>
        ) : null;
    }


    return (
        <Container 
            background={COLORS.WHITE} width={SIZE}>
            <SwiperFlatList
                showPagination
                paginationDefaultColor={COLORS.GRAY_LIGHT}
                paginationActiveColor={COLORS.PRIMARY_LIGHT} >
                
                <ContainerCard width={SIZE}> 
                    {renderItem(itens[0])}
                    {renderItem(itens[1])}
                    {renderItem(itens[2])}
                </ContainerCard>
                
                <ContainerCard width={SIZE}> 
                    {renderItem(itens[3])}
                    {renderItem(itens[4])}
                </ContainerCard>
           </SwiperFlatList>
                  
        </Container>
    )
}
