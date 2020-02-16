import styled from 'styled-components/native'

import { 
    Animated
} from 'react-native'

export const FloatingActionButtom = styled(Animated.View)`
    background: #1CB8FF;
    width: 52px;
    height: 52px;
    border-radius: 104
    position: absolute;
    elevation: 1;
    top: -30%;
    left: 8.5%;
    justify-content: center;
    align-items: center;
`
