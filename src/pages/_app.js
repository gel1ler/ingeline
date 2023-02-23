import '@/styles/globals.css'
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import { createBreakpoints } from '@mui/system'
import { useState } from 'react'


export default function App({ Component, pageProps }) {
  const breakpoints = createBreakpoints({})
  const isMatch = useMediaQuery(breakpoints.down('lg'))

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#E5A019",
      },
    },
    typography: {
      fontFamily: "Inter",
      fontWeightRegular: '500',
      fontSize: isMatch ? 11 : 13
    }
  })

  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
