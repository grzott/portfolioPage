import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Layout from './src/components/_shared/layout/Layout'


export const wrapRootElement = ({ element }) => (
    <Provider store={store}>
        <Layout>{element}</Layout>
    </Provider>
)