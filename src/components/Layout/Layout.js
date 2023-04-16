import { Box } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, scroll, height }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header scroll={scroll} height={height} />
      <Box sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout