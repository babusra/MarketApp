import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './navigation/Navigation'
import { Provider } from 'react-redux'
import { Store } from './reduxTKit/Store'

const App = () => {
  return (
    <React.Fragment>
      <Provider store={Store}>
      <Navigation/>
      </Provider>
    </React.Fragment>
  )
}

export default App