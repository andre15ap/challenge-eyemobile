import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';


export default function BackgroundComponent({colors, children}){
    return (
        <LinearGradient style={{flex:1}} colors={colors}>
            {children}
        </LinearGradient>
    )
}
