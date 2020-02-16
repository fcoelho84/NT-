import React from 'react'

import Icon from 'react-native-vector-icons/Feather'

import {
    FloatingActionButtom
} from './styles'

export const FAB = props => {

    const { name, style } = props

    return (
        <FloatingActionButtom style={ style } >
            <Icon 
                name={name} 
                size={30} 
                color="#FFF" 
            />
        </FloatingActionButtom>
    )
}