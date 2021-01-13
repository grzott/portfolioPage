import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './src/components/_shared/layout/Layout'
import { GlobalStyle, theme } from './src/theme/global-style.js'
import { wrapRootElement as wrap } from './root-wrapper'
export const wrapRootElement = wrap

export const WrapRootElement = ({ element }) => {
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>{element}</Layout>
    </ThemeProvider>

}