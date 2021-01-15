import React from 'react'
import { ThemeProvider } from 'styled-components';
import Layout from './src/components/_shared/layout/Layout'
import { lightTheme, darkTheme, pl, eng } from './src/theme/Themes'

import { Provider, useSelector } from 'react-redux'
import store from './src/redux/store'

// let toggleTheme = false
let toggleLang = false

const themePl = (currentTheme) => ({
    ...currentTheme,
    ...pl,
});

const themeEng = (currentTheme) => ({
    ...currentTheme,
    ...eng,
});

const App = ({ element }) => {

    const toggleTheme = useSelector(state => state.toggleTheme)

    return (
        <ThemeProvider theme={toggleLang ? themePl : themeEng}>
            <ThemeProvider theme={toggleTheme ? lightTheme : darkTheme}>
                <Layout>{element}</Layout>
            </ThemeProvider>
        </ThemeProvider>
    )
}

export const wrapRootElement = ({ element }) => (
    <Provider store={store}>
        <App element={element} />
    </Provider>
)