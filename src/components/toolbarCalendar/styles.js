import styled from 'styled-components/native'

import { Animated, Dimensions } from 'react-native'

import { Svg } from 'react-native-svg'

import { CalendarList } from 'react-native-calendars'

const { width, height } = Dimensions.get('screen')


export const Calendar = styled(CalendarList)`
    height: 350px;
`

export const Container = styled.View`
    position: absolute;
    height: auto;
`

export const AnimatedChildren = styled(Animated.View)`
    width: ${ width }
    height: ${ height }
`

export const AnimatedContainer = styled(Animated.View)`
    position: relative;
    align-self: stretch;
    background: #fff;
    align-items: flex-end;
    height: 440px;
    

`

export const StyledSvg = styled(Svg)`
    transform: translate(4px, -2px);

`

export const SafeArea = styled.View`

    position: absolute;
    bottom: 0;
    background: #F8F8F8;

`

export const FloatingActionButtom = styled.TouchableOpacity`

    position: absolute;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background-color: #658BEF;
    elevation: 6;
    right: 53.5px;
`
