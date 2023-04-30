import '@/styles/globals.css'
import { createTheme, ThemeProvider, useMediaQuery, styled } from '@mui/material'
import { createBreakpoints } from '@mui/system'
import { SnackbarProvider } from 'notistack'
import { useEffect } from 'react'
import 'aos/dist/aos.css'


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
      additional: {
        main: '#CBC2B9'
      }
    },
    typography: {
      fontFamily: "Inter",
      fontWeightRegular: '500',
      fontSize: isMatch ? 11 : 13
    }
  })

  const StyledSnackbarProvider = styled(SnackbarProvider)(`
  &.SnackbarItem-contentRoot {
    background-color: #CBC2B9;
    font-weight: 500;
    font-size: 15px;
    color: black
  }
`)

  return (
    <StyledSnackbarProvider maxSnack={4} autoHideDuration={3000}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledSnackbarProvider>
  )
}
