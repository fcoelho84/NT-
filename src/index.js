
import React from 'react'

import { createAppContainer } from 'react-navigation';


import Routes from './routes'

const AppContainer = createAppContainer(Routes);

export default () => {

  console.disableYellowBox = true


  return ( <AppContainer /> )
}

