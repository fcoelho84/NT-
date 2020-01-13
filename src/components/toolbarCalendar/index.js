import React, { useState, useEffect } from 'react'


import {
    Animated,
} from 'react-native'

import {
    AnimatedSvg,
    AnimatedFAB,
    AnimatedChildrenHelper

} from './components'

import {
    ReminderList
} from '../../components'

import {
    Container,
    Calendar,
} from './styles'
 
const data = [
    {
        dayOfWeek: 'Quarta',
        dayOfMonth: 14,
        reminders: ['', '', '', '', '', '', '', '']
    },
    {
        dayOfWeek: 'Quarta',
        dayOfMonth: 14,
        reminders: ['', '']
    },
    {
        dayOfWeek: 'Quarta',
        dayOfMonth: 14,
        reminders: ['', '', '', '', '', '', '', '']
    },
    {
        dayOfWeek: 'Quarta',
        dayOfMonth: 14,
        reminders: ['', '', '', '', '', '', '', '']
    },
    {
        dayOfWeek: 'Quarta',
        dayOfMonth: 14,
        reminders: ['', '']
    },
    {
        dayOfWeek: 'Quarta',
        dayOfMonth: 14,
        reminders: ['', '']
    }
]


export const ToolbarCalendar = props => {

    const [ animatedValue ] = useState( new Animated.Value(0))

    const [ toolbarState, setToolbarState ] = useState('IDLE')


    const startAnimation = (target, toValue) => Animated.timing(target, { 
        toValue,
        duration: 450,
        useNativeDriver: true
    
    }).start()


    useEffect( () => {

        const value = {
            'IDLE': 0,
            'OPENED': 0.5,
            'FULL_OPENED': 1
        }

        startAnimation(animatedValue, value[toolbarState])

    }, [toolbarState])


    const onClick = () => {

        const value = {
            'IDLE': 'OPENED',
            'OPENED': 'FULL_OPENED',
            'FULL_OPENED': 'IDLE'
        }

        setToolbarState(value[toolbarState])


    }


    return (
        <>
            <AnimatedSvg 
                animatedValue={ animatedValue }
                toolbarState={ toolbarState } 
                getSelectedReminder={ data => alert(data.datOfMonth)}
            />

            <Container>

                <Animated.View 
                    style={
                        {
                            opacity: animatedValue.interpolate(
                                {
                                    inputRange: [0, 0.5, 1],
                                    outputRange: [0, (toolbarState === 'OPENED') ? 1 : 0, 0]
                                }
                            )
                        }
                    } 
                >

                    <ReminderList 
                        data={data}
                        getSelectedReminder={ data => alert(data.dayOfWeek)}
                    
                    />


                </Animated.View >

                <Animated.View 
                    style={
                        {
                            opacity: animatedValue.interpolate(
                                {
                                    inputRange: [0, 0.5, 1],
                                    outputRange: [0, 0, (toolbarState === 'FULL_OPENED') ? 1 : 0]
                                }
                            ),
                            transform: [
                                    {
                                        translateY: animatedValue.interpolate(
                                            {
                                                inputRange: [0, 0.5, 1],
                                                outputRange: [0,0, -100]
                                            }
                                        ),
                                    }
                                ]
                            
                        }
                    } 
                >

                    
                    <Calendar 
                        horizontal={true}
                        firstDay={1}
                    
                    /> 
                       
                    


                </Animated.View >





            </Container>

            <AnimatedFAB 
                animatedValue={animatedValue}
                toolbarState={ toolbarState }
                onClick={ onClick }
            />

            <AnimatedChildrenHelper
                animatedValue={ animatedValue }
            >

                {props.children}

            </AnimatedChildrenHelper>
            

            
        </>

    )


}