import React from 'react'


import {
    Container,
    Header,
    Title,
    Indicator,
    Date,
    Text,
    ProgressBar,
    Progress,
    ProgressText
} from './styles'


export const Card = props => {



    return (
        <Container>
            <Header>

                <Title>Fazer Compras</Title>

                <Indicator />
            
            </Header>

            <Text>Data final:  <Date>14 de março, 2020</Date></Text>


            <ProgressText>28/30</ProgressText>

            <ProgressBar>

                <Progress />


            </ProgressBar>

        </Container>
    )
}