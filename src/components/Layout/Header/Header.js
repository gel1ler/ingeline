import React from 'react'
import { Box } from '@mui/material'
import Logo from '@/components/UI/Logo2'
import MyDrawer from './Drawer'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState } from 'react'

const Header = ({ main, height }) => {
    const [active, setActive] = useState(false)

    useScrollPosition(({ prevPos, currPos }) => {
        let y = -currPos.y
        if (y >= height * 0.2) {
            setActive(true)
            if (prevPos.y < currPos.y) {
                setActive(false)
            }
            if (prevPos.y > currPos.y) {
                setActive(true)
            }
        }
        if (y < height * 0.2) {
            setActive(false)
        }
    })

    return (
        <Box
            sx={{
                bgcolor: 'white',
                width: '100vw',
                mt: '25px',
                p: 2,
                display: ['flex', 'flex', 'none'],
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 99,
                boxShadow: '0 0 5px 1px rgba(0,0,0,.1)',
                transition: 'all .3s ease',
                transform: active ? null : 'translateY(-100%)'
            }}
        >
            <Logo />
            <MyDrawer main={main} />
        </Box>
    )
}

export default Header