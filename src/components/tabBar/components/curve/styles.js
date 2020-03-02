import styled from 'styled-components/native'

import { SvgXml } from 'react-native-svg'

import { Animated } from 'react-native'

import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp

} from 'react-native-responsive-screen'


export const AnimatedSelectedCurve = styled(Animated.View)`
    position: absolute;
    top: ${hp(-9.6)};
`

export const Svg = styled(SvgXml)`
`