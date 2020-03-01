import styled from 'styled-components/native'

import { 
    heightPercentageToDP as hp, 
    widthPercentageToDP as wp

} from 'react-native-responsive-screen'

export const SafeAreaView = styled.SafeAreaView`
    background: #365066;
    flex: 1;
    padding: 16px;
    min-height: ${hp(20)};

`


export const MessageContainer = styled.View`
    justify-content: center;
    align-items: center;
    min-height: 200px;


`

export const Message = styled.Text`
    font-size: 18px;
    font-family: Montserrat-Medium;
    text-align: center;
    color: #DDDDDD;

`

export const TextInput  =  styled.TextInput`
    background: rgba(221, 221, 221, 0.15);
    height: 200px;
    border-radius: 5px;
    margin-top: 24px;
    text-align-vertical: top;
    color: #fff;
    font-size: 18px;
    padding: 10px;

`

export const Input  =  styled.View`
    background: rgba(221, 221, 221, 0.15);
    border-radius: 5px;
    margin-top: 24px;
    padding: 10px;
    height: 50px;

`