import React, { useState } from 'react'

import { ToolbarCalendar } from '../../components'


import { 
    Container,
    ToolbarTitle, 
    ToolbarDayWeek,
    FloatingActionButtom,
} from './styles'

import {
    Card
} from '../../components'

import { Animated } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'


import { ScrollView  } from 'react-native'

const AnimatedFloatingActionButtom = Animated.createAnimatedComponent(FloatingActionButtom)

export const HomeScreen = props => {

    const [ animatedValue ] = useState( new Animated.Value(1) )

    const list = [
        { goals: true },
        { goals: false },
        { goals: true },
        { goals: true },
        { goals: false },
        { goals: true },
        { goals: false },
        { goals: false },
    ]

    const startAnimation = toValue => Animated.timing(animatedValue, {
        toValue,
        duration: 550,
        useNativeDriver: true,
    }).start()


    const handleScroll = event => {

        const y = event.nativeEvent.contentOffset.y

        if(y <= 10) startAnimation(1)

        else if ( y >= 10) startAnimation(0)


    }



    return (
        <>

            <ToolbarCalendar>

                <Container>

                    <ScrollView onScroll={handleScroll} >


                        {
                            list.map( data => (<Card {...data} />))
                        }


                    </ScrollView>




                </Container>


            </ToolbarCalendar>

            <AnimatedFloatingActionButtom
                style={
                    {
                        transform: [
                            { translateX: animatedValue.interpolate(
                                {
                                    inputRange: [0, 1],
                                    outputRange: [300, 0]
                                }
                            ) }
                        ]
                    }
                }
            >
                <Icon 
                    name={'plus'} 
                    size={ 24 } 
                    color="#fff" 
                />
            </AnimatedFloatingActionButtom>

        </>
           
    )

}

export const Home = {
    screen: HomeScreen,
    navigationOptions: {
        headerTitle: (
            
            <ToolbarTitle>
                Mar, 12   <ToolbarDayWeek>Terça</ToolbarDayWeek>
            </ToolbarTitle>
            
          )
    }
}