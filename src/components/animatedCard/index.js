
import React, {
    useState

} from 'react'


import {
    G, 
    Path
} from 'react-native-svg'

import {
    Animated,
    Dimensions,
    Easing
} from 'react-native'

import {
    interpolate
} from 'flubber'

import {
    StyledSvg,
    FloatingActionBottom,
    TouchableWithoutFeedback,
    Body,
    Container
} from './styles'

import Icon from 'react-native-vector-icons/AntDesign';

const PATHS = {
    'Card': "M303.5 54C253 58.4991 211 5.25551e-05 97 5.25551e-05C58.374 5.25551e-05 26.5788 2.64048 7.87716e-07 9.01048L0 5.25551e-05L97 5.25551e-05L376 5.25551e-05L376 19.0647C358.222 27.2252 335.905 51.113 303.5 54Z",
    'CardFlipped': "M72.5 54C123 58.4991 165 5.25551e-05 279 5.25551e-05C317.626 5.25551e-05 349.421 2.64048 376 9.01048L376 5.25551e-05L279 5.25551e-05L0 5.25551e-05L-1.66668e-06 19.0647C17.7775 27.2252 40.0946 51.113 72.5 54Z"
}


export const AnimatedCard = props => {

    const screenWidth = Dimensions.get('screen').width

    const [ fabX ] = useState(new Animated.Value(300))

    const [ translate ] = useState(new Animated.Value(0))

    const [ rotate ] = useState(new Animated.Value(0))
  
    const [ path, setPath ] = useState(PATHS['Card'])
  
    const svgInterpolator = new Animated.Value(0)
  
    const interpolatePaths = (from, to) => {
  
      const interpolator = interpolate(from, to, { maxSegmentLength: 8 })
  
      svgInterpolator.addListener( ({ value }) => setPath(interpolator(value)) )

      return Animated.timing(svgInterpolator, { toValue: 1, duration: 380, useNativeDriver: true })
  
    }
  
    const startAnimation = () => {

        if (path != PATHS['CardFlipped'] && path != PATHS['Card'] ) return

        const isFlipped = (path === PATHS['CardFlipped']) ? true : false

        const headerAnim = interpolatePaths(path, (isFlipped ? PATHS['Card'] : PATHS['CardFlipped']))

        const fabAnim = Animated.timing(fabX, {
            toValue: isFlipped ? 300 : 50, 
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: true
        })

        const calendarAnim = props.toggleCalendar(isFlipped)

        const cardAnim = Animated.timing(translate, {
            toValue: isFlipped ? 0 : 1,
            duration: 450,
            timing: 150,
            useNativeDriver: true
        })

        const arrowAnim = Animated.timing(rotate, {
            toValue: isFlipped ? 0 : 1,
            duration: 680,
            useNativeDriver: true
        })


        Animated.parallel([headerAnim, fabAnim, cardAnim, calendarAnim, arrowAnim]).start()

    }
  



    return (
        <Container style={ { transform: [ { translateY: translate.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 260]
        }) } ]}}>

        <StyledSvg width={ screenWidth + 20 } height="64" viewBox="0 0 378 56" fill="white">
          <G>
            <Path d={path}/>
          </G>
        </StyledSvg>

        <TouchableWithoutFeedback onPress={ () => startAnimation() } >

          <FloatingActionBottom style={  { transform: [ { translateX: fabX } ] } }>
      
            <Animated.View style={  { transform: [ { rotate: rotate.interpolate({
                inputRange: [0, 1],
                outputRange: ['180deg', '0deg'],
                extrapolate: 'clamp'
            }) } ] } }>
                <Icon name={'up'} size={ 20 } color="#fff" />
            </Animated.View>

          </FloatingActionBottom>
        </TouchableWithoutFeedback>

        <Body>

            { props.children }

        </Body>

            
        </Container>
    )



}