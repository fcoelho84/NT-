import React from 'react'

import Icon from 'react-native-vector-icons/Feather'

import { 
    TouchableWithoutFeedback, 
    Animated
} from 'react-native'

import {
    TabContainer
} from './styles'


export const Tab = props => {

    const { handler, style, name } = props

    const AnimatedIcon = Animated.createAnimatedComponent(Icon)

    return (
        <TouchableWithoutFeedback onPress={ handler }>
            <TabContainer>
                <AnimatedIcon 
                    style={ style } 
                    name={name}
                    size={30} 
                    color="#666" 
                />
            </TabContainer>
        </TouchableWithoutFeedback>

    )

}