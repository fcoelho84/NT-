import styled from 'styled-components/native'

import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp

} from 'react-native-responsive-screen'

import { Animated } from 'react-native'


export const Tabs = styled.View`
    position: absolute;
    bottom: 0;
    flex-direction: row;
    flex: 1;
    width: ${wp(100)};
    height: ${hp(10)};
`


export const Tab = styled(Animated.View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    elevation: 2;
`

export const Container = styled.View`
`


export const TabBarContainer = styled.View`
    position: relative;
    height: ${hp(10)};
    overflow: hidden;
`
