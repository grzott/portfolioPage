import React from 'react'
import { ThemeProvider } from 'styled-components';
import Layout from './src/components/_shared/layout/Layout'
import { lightTheme, darkTheme } from './src/theme/Themes'

let toggleTheme = false

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={toggleTheme ? lightTheme : darkTheme}>
        <Layout>{element}</Layout>
    </ThemeProvider>
)