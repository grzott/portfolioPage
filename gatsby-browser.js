import React from 'react'
import { ThemeProvider } from 'styled-components';
import Layout from './src/components/_shared/layout/Layout'
import { lightTheme, darkTheme, pl, eng } from './src/theme/Themes'

let toggleTheme = false
let toggleLang = false

const themePl = (currentTheme) => ({
    ...currentTheme,
    ...pl,
});

const themeEng = (currentTheme) => ({
    ...currentTheme,
    ...eng,
});

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={toggleLang ? themePl : themeEng}>
        <ThemeProvider theme={toggleTheme ? lightTheme : darkTheme}>
            <Layout>{element}</Layout>
        </ThemeProvider>
    </ThemeProvider>
)