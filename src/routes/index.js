
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { TabBar } from '../components'

import List from '../screens/home'

import Plus from '../screens/add'

import Search from '../screens/search'




export default createBottomTabNavigator({
    List,
    Plus,
    Search,
}, { 
    tabBarComponent: TabBar, 
    initialRouteName: 'List'
 })