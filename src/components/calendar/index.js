import React, { useState, useEffect } from 'react'

import {
    Container,
    Circle,
    Text
} from './styles'

import { CalendarList } from 'react-native-calendars'

const theme = {
    calendarBackground: '#365066',
    dayTextColor: '#A8B3BD',
    todayTextColor: '#FFFFFF',
    "stylesheet.calendar.header": {
        header: {
            height: 0,
            opacity: 0
        }
    }
}

export const Calendar = props => {

    const dot = {color: '#1CB8FF'}

    const [selectedDate, setSelectedDate ] = useState('')

    const onVisibleMonthsChange = data => {

        

    }

    return (
        <Container>
            <CalendarList
                theme={theme}
                markingType={'multi-dot'}
                onVisibleMonthsChange={onVisibleMonthsChange}
                onDayPress={({dateString}) => setSelectedDate(dateString)}
                markedDates={{
                    '2020-02-25': {dots: [dot, dot, dot]},
                    '2020-02-26': {dots: [dot, dot]},
                    [selectedDate]: {selected: true, selectedColor: '#1CB8FF'}
                }}
                    
            />

        </Container>
    )
}