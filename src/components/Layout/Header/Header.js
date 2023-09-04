import React from 'react'
import { Box } from '@mui/material'
import Logo from '@/components/UI/Logo2'
import MyDrawer from './Drawer'

const Header = ({ main }) => {
    return (
        <Box
            sx={{
                bgcolor: 'white',
                width: '100vw',
                mt: '25px',
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 99,
                boxShadow: '0 0 5px 1px rgba(0,0,0,.1)'
            }}
        >
            <Logo />
            <MyDrawer main={main} />
        </Box>
    )
}

export default Header