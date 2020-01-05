import styled from 'styled-components/native'

import {
    Dimensions,
    Animated
} from 'react-native'


import { Svg } from 'react-native-svg'


const { width, height } = Dimensions.get('screen')

export const Container = styled(Animated.View)`
    position: absolute;
    top: 140px;
    width: ${width + 10};
    height: ${ height };
    background: #F8F8F8;
    margin-top: 24px;
    transform: translateX(-5px);

`

export const Body = styled.View`
    flex: 1

`


export const StyledSvg = styled(Svg)`
    transform: translateY(-1px);

`

export const TouchableWithoutFeedback = styled.TouchableWithoutFeedback`
`

export const FloatingActionBottom = styled(Animated.View)`
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background-color: #658BEF;
    elevation: 6;
    top: -10px;




`