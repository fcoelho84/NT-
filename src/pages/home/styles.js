import styled from 'styled-components/native'

import {
    Animated
} from 'react-native'

export const Container = styled.View`
    flex: 1;
    background: #fff;

`

export const Toolbar = styled.View`
    padding: 0 24px;
    align-self: stretch;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


export const Area = styled.View`
    flex-direction: row;
    align-items: flex-end;
`

export const IconArea = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 96px;
`

export const ToolbarTitle = styled.Text`
    font-size: 24px;
    height: 30px;
    font-family: Montserrat-Regular;

`

export const ToolbarSubtitle = styled.Text`
    font-size: 18px;
    height: 25px;
    margin-left: 16px;
    color: #999999;
    font-family: Montserrat-Regular;

`

export const Box = styled.View`
    width: 70px;
    height: 70px;
    border-radius: 24px;
    background: ${ props => props.IsSelected ? '#658BEF' : '#fff'}
    align-items: center;
    padding: 2.5px;
    margin: 10px;
    
`

export const BoxTitlte = styled.Text`
    font-size: 16px;
    color: ${ props => props.IsSelected ? '#fff' : '#000'};
    font-family: Comfortaa-Medium;
    height: 21px;

`

export const BoxSubtitle = styled.Text`
    font-size: 12px;
    color: ${ props => props.IsSelected ? '#fff' : '#000'};
    margin-bottom: 3px;
    font-family: Comfortaa-Regular;
`

export const BoxText = styled.Text`
    font-size: 10px;
    color: ${ props => props.IsSelected ? '#fff' : '#000'};
    font-family: Comfortaa-Medium;

`

export const BoxArea = styled.View`
    justify-content: center;
    flex-direction: row;
`

export const BoxDots = styled.View`
    width: 4px;
    height: 4px;
    border-radius: 8px;
    margin-left: 4px;
    background: ${ props => props.IsSelected ? '#fff' : '#658BEF'};
`
export const ListContainer = styled(Animated.View)`


`

export const ListCardContainer = styled(Animated.View)`
    margin: 16px 0;
    height: 520px;

`