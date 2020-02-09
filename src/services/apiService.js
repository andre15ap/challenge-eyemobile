
import React from 'react';
import ICONS from '../assets/Icons';

export default function apService(SIZE_ICON) {
    return [
            {
                id: 1,
                icon: <ICONS.MONEY width={SIZE_ICON} height={SIZE_ICON} />,
                name: 'Dinheiro'
            },
            {
                id: 2,
                icon: <ICONS.DEBIT width={SIZE_ICON} height={SIZE_ICON} />,
                name: 'Débito'
            },
            {
                id: 3,
                icon: <ICONS.CREDIT width={SIZE_ICON} height={SIZE_ICON} />,
                name: 'Crédito'
            },
            {
                id: 4,
                icon: <ICONS.VR width={SIZE_ICON} height={SIZE_ICON} />,
                name: 'VR'
            },
            {
                id: 5,
                icon: <ICONS.CUPOM width={SIZE_ICON} height={SIZE_ICON} />,
                name: 'Cupom'
            },
        ];
}
    
