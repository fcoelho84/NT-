import { createStackNavigator } from 'react-navigation-stack'

import { Home } from '../screens/home'


const routesList = {
    Home
}

const routesConfig = {
    defaultNavigationOptions: {
        cardStyle: { backgroundColor: '#FFFFFF' },
        headerStyle: {
            elevation: 0,
            height: 60,
        },
        headerTitleStyle: {
            fontFamily: 'Montserrat-Regular',
            fontSize: 24,
        }
    }
}

export default Routes = createStackNavigator(routesList, routesConfig);