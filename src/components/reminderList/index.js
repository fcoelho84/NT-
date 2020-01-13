import React, { useState } from 'react'


import {
    Container,
  
} from './styles'


import { ReminderItem } from './components'


import { FlatList } from 'react-native-gesture-handler'


export const ReminderList = props => {

    const [ selectedIndex, setSelectedIndex ] = useState(null)

    const {

        getSelectedReminder,
        data

    } = props

    return (
        <Container>

            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={ false }
                data={data}
                renderItem={ data => (
                    <ReminderItem 
                        {...data.item}  
                        onClick={ () => {

                            getSelectedReminder(data.item)
                            setSelectedIndex(data.index)
                        } } 
                        isSelected={ selectedIndex === data.index}
                    />
                )}
                keyExtractor={item => item.id}
            />

        </Container>
    )
}