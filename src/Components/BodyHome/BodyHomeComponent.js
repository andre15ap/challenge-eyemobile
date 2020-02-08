import React from 'react';


import CircleButtonComponent from '../CircleButton/CircleButtonComponent';

import { ContainerBody, RowNumbers } from './styles';

export default function BodyHomeComponent ({clickKeyboard, flex=8}){
    return (
        <ContainerBody flex={flex}>
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

    )
}