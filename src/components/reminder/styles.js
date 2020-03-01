import styled from 'styled-components/native'

import { 
    heightPercentageToDP as hp, 
    widthPercentageToDP as wp

} from 'react-native-responsive-screen'

export const Container = styled.View`
    border-radius: 5px;
    max-height: 200px;
    min-height-: 100px;
    background: #fff;
    flex-direction: row;
    padding: 16px;

`

export const Date = styled.Text`
    font-size: 18px;
    font-family: Confortaa-Regular;
    color: #111111;
    text-align: center;
    flex: 0.15;
    margin-right: 16px;


`

export const Alarm = styled.Text`
    font-size: 10px;
    font-family: Confortaa-Regular;
    color: #111111;
    margin-left: 6px;
    flex: 1;
    

`

export const Text = styled.Text`
    font-size: 14px;
    font-family: Confortaa-Regular;


`

export const Column = styled.View`
    flex: 1;
`

export const Row = styled.View`
    margin-bottom: 6px;
    flex-direction: row;

`
