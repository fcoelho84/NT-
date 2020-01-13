import React, { useState, useEffect } from 'react'



import {
    Container,
    Toolbar,
    ToolbarTitle,
    ToolbarSubtitle,
    Area,
    IconArea,
    Box,
    BoxTitlte,
    BoxSubtitle,
    BoxArea,
    BoxDots,
    BoxText,
    ListContainer,
    ListCardContainer,
} from './styles'

import { CalendarList } from 'react-native-calendars';

import Icon from 'react-native-vector-icons/AntDesign';

import {
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,
    Animated
} from 'react-native'

import {
    AnimatedCard,
    Card
} from '../../components'


export const HomePage = props => {

    const array =  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


    const [ selectedItem, setSelectedItem ] = useState(0)

    const [ calendarTranslate ] = useState( new Animated.Value(0) )


    const toggleCalendar = (isFlipped) => Animated.timing(calendarTranslate, {
        toValue: isFlipped ? 0 : 1,
        timing: 200,
        duration: 450,
        useNativeDriver: true,
    })


    const renderShortCalendarItem = ({ index }) => (
        <TouchableWithoutFeedback onPress={ () => setSelectedItem(index) } >
            <Box IsSelected={ index === selectedItem } >

                <BoxTitlte IsSelected={ index === selectedItem } >12</BoxTitlte>
                <BoxSubtitle IsSelected={ index === selectedItem } >Quarta</BoxSubtitle>

                <BoxArea>
                    <BoxDots IsSelected={ index === selectedItem } />
                    <BoxDots IsSelected={ index === selectedItem } />
                    <BoxDots IsSelected={ index === selectedItem } />
                    <BoxDots IsSelected={ index === selectedItem } />
                </BoxArea>

                <BoxText IsSelected={ index === selectedItem } >+4</BoxText>

            </Box>

        </TouchableWithoutFeedback>
    )

    const renderToolbar = () => (
        <Toolbar>
            <Area>

                <ToolbarTitle>Mar, 12</ToolbarTitle>

                <ToolbarSubtitle>Terça</ToolbarSubtitle>
            
            </Area>

            <IconArea>
                <TouchableOpacity>

                    <Icon name={'left'} size={ 24 } color="#658BEF" />
                    
                </TouchableOpacity>

                <TouchableOpacity>

                    <Icon name={'right'} size={ 24 } color="#658BEF" />

                </TouchableOpacity>

            </IconArea>

        </Toolbar>
    )

    const renderShortCalendar = () => (
        <ListContainer style={
            {
                opacity: calendarTranslate.interpolate({
                    inputRange: [0, 1], 
                    outputRange: [1, 0] 
                }),
            }
        }>

            <FlatList
                data={array}
                horizontal={ true }
                renderItem={renderShortCalendarItem}
                keyExtractor={ (index) => index } 
                showsHorizontalScrollIndicator={false}
            />

        </ListContainer>
    )

    const renderFullCalendar = () => (
        
        <Animated.View style={ 
            { 
                opacity: calendarTranslate,
                transform: [ { 
                    translateY: calendarTranslate.interpolate(
                        { inputRange: [0, 1], outputRange: [0, -100]  }
                    ) 
                } ] 
            } 
        }>
            <CalendarList
                horizontal={true}
                current={'2012-03-01'}
                minDate={'2012-05-10'}
                maxDate={'2012-05-30'}
                hideArrows={true}
                firstDay={1}
            />

        </Animated.View>
    )


    return (
        <Container>
            
            { renderToolbar() }

            { renderShortCalendar() }

            { renderFullCalendar() }



            <AnimatedCard toggleCalendar={ toggleCalendar } >

            
                <ListCardContainer>

                    <FlatList
                        data={array}
                        renderItem={() => <Card />}
                        keyExtractor={ (index) => index } 
                        showsHorizontalScrollIndicator={false}
                    />
                    

                </ListCardContainer>
          

            </AnimatedCard>

        </Container>
    )
}