import { Box } from '@mui/material'
import React, { useState } from 'react'
import Footer from './Footer/Footer'
import TopHeader from './Header/TopHeader'
import Header from './Header/Header'
import Menu from './Menu'
import TrackVisibility from 'react-on-screen'

const Layout = ({ children, height }) => {
  const [isActive, setIsActive] = useState(true)

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopHeader height={height} />
      
      <Header />
      <Box sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        background: 'rgba(203, 194, 185, 0.4)',
        backdropFilter: 'blur(5px)',
        borderTopRightRadius: '50px',
        pr: 8,
        pl: 4,
        py: 1,
        zIndex: 999,
        transition: 'opacity .2s ease',
        opacity: isActive ? 1 : 0,
        display: ['none', 'none', 'flex']
      }}>
        <Menu />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <TrackVisibility offset={200}>
        <Footer setIsActive={setIsActive} />
      </TrackVisibility>
    </Box >
  )
}

export default Layout