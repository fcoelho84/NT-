import React, { useState, useEffect } from 'react'

import {
    Animated,
} from 'react-native'


import { 
    FloatingActionButtom,
} from '../../styles'

import Icon from 'react-native-vector-icons/AntDesign'

const AnimatedFloatingActionButtom = Animated.createAnimatedComponent(FloatingActionButtom)

export const AnimatedFAB = props => {

    const [ animatedValue ] = useState( new Animated.Value(0))

    useEffect( () => {

        const value = {
            'IDLE': 0,
            'OPENED': 0.5,
            'FULL_OPENED': 1
        }


        Animated.timing(animatedValue,{
            toValue: value[props.toolbarState],
            duration: 1100,
            useNativeDriver: true,
        }).start()

    }, [props.toolbarState])


    return (
        <AnimatedFloatingActionButtom 
            onPress={ () => props.onClick() }
            style={ 
                { 
                    transform: [ 
                        { translateY: props.animatedValue.interpolate( { inputRange: [0, 0.5, 1],  outputRange: [-15, 75, 370] } ) },
                        { translateX: animatedValue.interpolate( { inputRange: [0, 0.5, 1], outputRange: [0, 0, -240 ]  } ) },
                    ] 
                } 
            }  
        >
            <Icon 
                name={'down'} 
                size={ 20 } 
                color="#fff" 
            />
        </AnimatedFloatingActionButtom>
    )
}