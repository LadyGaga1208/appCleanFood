import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux';

import AppContainer from './navigations/AppNavigator';
import store from './redux/store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}
