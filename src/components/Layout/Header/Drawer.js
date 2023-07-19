import React from 'react'
import { Drawer, Box, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import DrawerMenu from './DrawerMenu'


const MyDrawer = ({ open, setOpen, header }) => {
    return (
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
                <DrawerMenu click={() => setOpen(false)} header={header} />

            </Box>
        </Drawer>
    )
}

export default MyDrawer