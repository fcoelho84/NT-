import styled from 'styled-components/native'




export const Container = styled.View`
    position: relative;
    border-radius: 24px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    align-self: stretch;
    margin-bottom: 24px;
    height: 120px
    background: #fff;
    padding: 20px;

`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

`

export const Title = styled.Text`
    font-size: 18px;
    font-family: Comfortaa-Regular;

`

export const Tag =  styled.Text`
    font-size: 9px
    font-family: Comfortaa-Bold;
    color: #999999
    border: 1px solid #999999;
    border-radius: 24px;
    padding: 0 10px;


`

export const Date = styled.Text`
    font-size: 9px;
    font-family: Comfortaa-Bold;
    color: #999999;

`

export const Text = styled.Text`
    font-size: 12px;
    font-family: Comfortaa-Regular;

`

export const Indicator = styled.View`
    width: 4px;
    height: 20px;
    background: #EB284B;
    border-radius: 24px;

`


export const ProgressText = styled.Text`
    font-size: 10px;
    font-family: Comfortaa-Regular;
    text-align: right;
    margin-bottom: 5px;

`

export const ProgressBar = styled.View`
    position: absolute;
    width: 4px;
    height: 120px
    background: #DDDDDD;
    bottom: 0px;
    right: 0px;


`

export const Progress = styled.View`
    position: absolute;
    width: 4px;
    height: 80px
    background: #66E599;
    bottom: 0px;
    right: 0px;

`