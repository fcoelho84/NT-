import React, { useState, useEffect } from 'react'


import {
    interpolate
} from 'flubber'

import {
    Animated,
} from 'react-native'

import { Path } from 'react-native-svg'

import {
    Dimensions
} from 'react-native'

import { 
    AnimatedContainer,
    StyledSvg,
    SafeArea,
} from '../../styles'


const { width } = Dimensions.get('screen')


const AnimatedPath = Animated.createAnimatedComponent(Path)

const PATHS = {
    'Card': "M303.5 54C253 58.4991 211 5.25551e-05 97 5.25551e-05C58.374 5.25551e-05 26.5788 2.64048 7.87716e-07 9.01048L0 5.25551e-05L97 5.25551e-05L376 5.25551e-05L376 19.0647C358.222 27.2252 335.905 51.113 303.5 54Z",
    'CardFlipped': "M72.5 54C123 58.4991 165 5.25551e-05 279 5.25551e-05C317.626 5.25551e-05 349.421 2.64048 376 9.01048L376 5.25551e-05L279 5.25551e-05L0 5.25551e-05L-1.66668e-06 19.0647C17.7775 27.2252 40.0946 51.113 72.5 54Z"
}

export const AnimatedSvg = props => {

    const [ path, setPath ] = useState(PATHS['Card'])

    const animatedValue = new Animated.Value(0)

    const to = (props.toolbarState === 'FULL_OPENED') ? PATHS['CardFlipped'] : PATHS['Card']

    const from = (props.toolbarState === 'FULL_OPENED') ? PATHS['Card'] : PATHS['CardFlipped']


    const interpolator = interpolate(from, to, { maxSegmentLength: 10, single: true })

    animatedValue.addListener( ({value}) => setPath( interpolator(value) ) )


    useEffect( () => {

        if(props.toolbarState === 'OPENED') return 

        Animated.spring(animatedValue,{
            toValue: (animatedValue._value === 1) ? 0 : 1,
            duration: 390,
            timing: 400,
        }).start()

    }, [props.toolbarState])


    return (
        <AnimatedContainer 
            style={ { 
                transform: [ 
                    { 
                        translateY: props.animatedValue.interpolate( 
                            { 
                                inputRange: [0, 0.5, 1], 
                                outputRange: [-375, -285, 10] 
                            } 
                        ) 
                    } 
                ] 
            } } 
        >

            <SafeArea>
                <StyledSvg 
                    width={ width + 20 } 
                    height="64" 
                    viewBox="0 0 378 56" 
                    fill="white"
                >
                    <AnimatedPath id="PATH-SVG-CARD"  d={path}/>
                    
                </StyledSvg>
            </SafeArea>

        </AnimatedContainer>

    )
}