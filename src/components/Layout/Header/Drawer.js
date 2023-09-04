import React, { useState } from 'react'
import { Drawer, Box, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import DrawerMenu from './DrawerMenu'


const MyDrawer = ({ main }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <IconButton onClick={() => setOpen(true)} >
                <MenuIcon fontSize='large' />
            </IconButton>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                anchor='top'
            >
                <Box
                    sx={{
                        width: '100vw',
                        height: '100vh',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <IconButton
                        onClick={() => setOpen(false)}
                        sx={{
                            position: 'absolute',
                            top: 5,
                            right: 5
                        }}
                    >
                        <CloseIcon sx={{ fontSize: 35 }} />
                    </IconButton>
                    <DrawerMenu click={() => setOpen(false)} main={main} />
                </Box>
            </Drawer>
        </>
    )
}

export default MyDrawer