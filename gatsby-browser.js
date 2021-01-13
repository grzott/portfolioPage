import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './src/components/_shared/layout/Layout'
import { GlobalStyle, theme } from './src/theme/global-styles'


export const wrapRootElement = ({ element }) => (
    <>
        <ThemeProvider theme={theme}>

            <GlobalStyle />
            <Layout>{element}</Layout>

        </ThemeProvider>
    </>
)