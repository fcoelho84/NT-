import React from 'react'

import Icon from 'react-native-vector-icons/Feather'

import { withNavigation } from 'react-navigation' 

import { 
    TouchableWithoutFeedback, 
    Animated
} from 'react-native'

import {
    TabContainer
} from './styles'


export const TabComponent = props => {

    const { handler, style, name, navigation } = props

    const AnimatedIcon = Animated.createAnimatedComponent(Icon)

    const onPress = () => {

        handler()

        navigation.navigate(name.charAt(0).toUpperCase() + name.slice(1))
        
    }

    return (
        <TouchableWithoutFeedback onPress={ () => onPress() }>
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

export const Tab = withNavigation(TabComponent)