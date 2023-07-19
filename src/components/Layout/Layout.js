import { Box } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import TopHeader from './Header/TopHeader'
import Header from './Header/Header'

const Layout = ({ children, height }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopHeader height={height} />
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout