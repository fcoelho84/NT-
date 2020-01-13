import styled from 'styled-components/native'




export const Box = styled.View`
    width: 70px;
    height: 70px;
    border-radius: 24px;
    background: #fff;
    align-items: center;
    padding: 2.5px;
    margin: 0 10px;
    border: 1px solid ${ props => props.isSelected ? '#658BEF' : '#fff'};
    
`

export const BoxTitlte = styled.Text`
    font-size: 16px;
    font-family: Comfortaa-Medium;
    height: 21px;

`

export const BoxSubtitle = styled.Text`
    font-size: 12px;
    margin-bottom: 3px;
    font-family: Comfortaa-Regular;
`

export const BoxText = styled.Text`
    font-size: 10px;
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
    background: #658BEF;
`