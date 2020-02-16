import React from 'react'

import {
    AnimatedSelectedCurve,
    Svg,
} from './styles'

import {
    Curve
} from '../../../../assets/svg'


const size = 120

export const CurvedHover = props => {

    const { style } = props

    return (

        <AnimatedSelectedCurve style={style}>
            <Svg 
                xml={Curve}
                width={size} 
                height={size}
            />
        </AnimatedSelectedCurve>
    )

}