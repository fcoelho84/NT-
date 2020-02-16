import React, { useState, useEffect } from 'react'

import { 
    Dimensions, 
    Animated
    
} from 'react-native'

import {
    Container,
    TabBarContainer,
    Tabs,
} from './styles'

import {
    FAB,
    CurvedHover,
    Tab
} from './components'

const { width } = Dimensions.get('screen')

export const TabBar = ({navigation}) => {

    const [ position ] = useState( new Animated.Value(0) )

    const [ FABTranslate ] = useState( new Animated.Value(0) )

    const [ icon, setIcon ] = useState( (navigation.state.routes[0].key).toLowerCase() )

    const [ index, setIndex ] = useState( 0 )

    const curvedHoverStyle = {
        transform: [
            { translateX: position.interpolate({
                inputRange: [0, navigation.state.routes.length],
                outputRange: [4, width+4 ] 
            }) }
        ]
    }

    const opacityStyle = ( from, to ) => (
        { opacity: FABTranslate.interpolate({
            inputRange: [0, 1],
            outputRange: [from, to]
        }) }
    )

    const FABStyle = {
        ...opacityStyle(1, 0),
        transform: [

            { translateY: FABTranslate.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 100] 
            })},

            curvedHoverStyle.transform[0]
        ]

    }

    const baseAnim = (target, toValue, duration) => Animated.timing(target, {
        toValue,
        duration,
        useNativeDriver: true
    })


    const changeSelectedCurvePosition = newIndex => baseAnim(position, newIndex, 400).start()
        

    const handlerSelected = index => {

        setIndex(index)

        const baseFABAnim = value => baseAnim(FABTranslate, value, 250)

        baseFABAnim(1).start( () => {

            setIcon((navigation.state.routes[index].key).toLowerCase())

            baseFABAnim(0).start()

        })

    }

    useEffect( () => {

        changeSelectedCurvePosition(index)

    }, [index])

    return (
        <Container>

            <FAB 
                style={ FABStyle } 
                name={ icon } 
            />

            <TabBarContainer>

                <Tabs>

                    { navigation.state.routes.map( (_, currentIndex) => (
                        <Tab 
                            handler={ () => handlerSelected(currentIndex) }
                            style={ (currentIndex === index) ? opacityStyle(0, 1) : null } 
                            name={(navigation.state.routes[currentIndex].key).toLowerCase()}
                        />
                    )) }

                </Tabs>

                <CurvedHover style={curvedHoverStyle} />

            </TabBarContainer>


        </Container>

    )

}