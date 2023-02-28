import { Box } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, header }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {header ? <Header /> : null}
      <Box sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout