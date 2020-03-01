import styled from 'styled-components/native'

import { TabBar } from 'react-native-tab-view';

import { 
    heightPercentageToDP as hp, 
    widthPercentageToDP as wp

} from 'react-native-responsive-screen'

export const Container = styled.View`
    padding-top: 16px;
    background: #365066;
    flex: 1;

`

export const Label = styled.Text`
    font-size: 14px;
    font-family: Montserrat-Bold;
    color: #fff;
`


export const Tab = styled(TabBar)`
    background: transparent;
    margin-bottom: 32px;
`
