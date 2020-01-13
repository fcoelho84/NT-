import React from 'react'


import {
    Container,
    Header,
    Title,
    Tag,
    Date,
    Text,
    ProgressBar,
    Progress,
    ProgressText
} from './styles'


export const Card = props => {


    const renderDefaultCard = () => (
        <>
            <Header>

                <Tag>Fazer Compras</Tag>

                <Date>14 de março, 2020</Date>
            
            </Header>

            <Text>
                Olá, isso é uma tarefa, continue lendo, a-b-c, olá isso nao é uma tarefa, 1 2 3
            </Text>

        </>
    )

    const renderGoalCard = () => (
        <>
            <Header>

                <Tag>Compras</Tag>

                <Date>20/30</Date>
            
            </Header>

            <Text>
                Olá, isso é uma tarefa, continue lendo, a-b-c, olá isso nao é uma tarefa, 1 2 3
            </Text>

            <ProgressBar>
                <Progress />
            </ProgressBar>

        </>
    )



    return (
        <Container>
            {
                (props.goals) ? renderGoalCard() : renderDefaultCard()
            }

        </Container>
    )
}