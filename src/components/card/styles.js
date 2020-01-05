import styled from 'styled-components/native'




export const Container = styled.View`

    border-radius: 24px;
    border-top-right-radius: 0;
    align-self: stretch;
    margin-left: 16px;
    margin-right: 32px;
    margin-bottom: 24px;
    height: 120px
    background: #fff;
    padding: 20px;

`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

`

export const Title = styled.Text`
    font-size: 18px;
    font-family: Comfortaa-Regular;

`

export const Date = styled.Text`
    font-size: 12px;
    font-family: Comfortaa-Bold;

`

export const Text = styled.Text`
    font-size: 11px;
    font-family: Comfortaa-Regular;
    margin-bottom: 5px;

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
    align-self: stretch;
    height: 4px;
    background: #f7f7f7;
    border-radius: 24px;


`

export const Progress = styled.View`
    width: 300px;
    height: 4px;
    background: #66E599;
    border-radius: 24px;


`