import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import globals from 'styles/globals'
import generateTheme from 'styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
    {globals}

    <ThemeProvider theme={generateTheme({ isDark: false })}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <Component {...pageProps} />
      </StylesProvider>
    </ThemeProvider>
  </>
)

export default MyApp
