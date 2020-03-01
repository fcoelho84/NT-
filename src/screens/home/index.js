import React from 'react'

import {
    Container,
    Tab,
    Label
} from './styles'

import { 
    TabView, 
    SceneMap 
} from 'react-native-tab-view'

import { 
    heightPercentageToDP as hp, 
    widthPercentageToDP as wp

} from 'react-native-responsive-screen'


import List from '../list'

export default () => {

    const [index, setIndex] = React.useState(0)

    const [routes] = React.useState([
        { key: 'home', title: 'junho, 2019' },
        { key: 'all', title: 'Tudo' },
        { key: 'old', title: 'Antigos' },
    ])

    const indicatorStyle = {
        height: 2,
        width: 50,
        marginLeft: (wp(100/3) / 2) - 25,
        borderRadius: 2,
        backgroundColor: 'rgba(0,0,0, 0.3)'
    }


    const renderScene = SceneMap({
        home: List,
        all: List,
        old: List,
    })

    const renderLabel = ({route}) => (<Label> { route.title } </Label>)

    const renderTab = props => (
        <Tab
            { ...props}
            renderLabel={renderLabel}
            scrollEnabled
            tabStyle={{ width: wp(100/3) }}
            indicatorStyle={indicatorStyle}
        />
    )


    return(
        <Container>

            <TabView 
                renderTabBar={renderTab}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
            
            />

        </Container>
    )

}