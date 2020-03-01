import React from 'react'


import {
    Container,
    Date,
    Alarm,
    Text,
    Column,
    Row
} from './styles'

import Icon from 'react-native-vector-icons/Feather'

export const Reminder = props => {

    const {
        date,
        alarmDate,
        text

    } =  props
 

    return (
        <Container>

            <Date>10 jun 2018</Date>

            <Column>
                <Row>
                    <Icon name="bell" color="111111"/>
                    <Alarm>Vamos te avisar dia 12 de jun de 2018</Alarm>
                    <Icon name="more-horizontal" color="111111"  />
                </Row>

                <Text>
                    Terminar o aplicativo
                </Text>
            </Column>


        </Container>
    )


}