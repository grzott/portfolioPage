import React from "react"
import { Provider } from "react-redux"
import Layout from './src/components/_shared/layout/Layout'
import store from './src/redux/store'

export default ({ element }) => {
  return <Provider store={store}>
       <Layout>{element}</Layout>
      </Provider>
}