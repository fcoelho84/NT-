import React from 'react'


import {
    Box,
    BoxTitlte,
    BoxSubtitle,
    BoxArea,
    BoxText,
    BoxDots
  
} from './styles'

import { TouchableOpacity } from 'react-native'

export const ReminderItem = props => {

    const {
        dayOfMonth,
        dayOfWeek,
        reminders,
        onClick,
        isSelected

    } = props
    


    return (
        <TouchableOpacity onPress={ () => onClick() } >
            <Box isSelected={ isSelected } >

                <BoxTitlte >{dayOfMonth}</BoxTitlte>
                <BoxSubtitle >{dayOfWeek}</BoxSubtitle>

                <BoxArea>

                    {reminders.map( (_, i) => {

                        if( i<= 3 ) return (<BoxDots />)


                    })}

                </BoxArea>

                { (reminders.length - 4 > 0) ? <BoxText >+{reminders.length - 4}</BoxText> : null }

            </Box>

        </TouchableOpacity>
    )
}