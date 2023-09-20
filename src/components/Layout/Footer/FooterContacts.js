import React from 'react'
import { Box, Typography } from '@mui/material'
import Phone from '@/services/phone'
import Email from '@/services/email'
import Address from '@/services/address'


const Contacts = ({ footer }) => {
    return (
        <Box>
            {footer ? <Typography variant='h6' align='center'>Контакты</Typography> : null}
            <Box className='gap2' sx={{mt:1}}>
                <Address office />
                <Address />
                <Email  />
                <Phone />
                <Typography sx={{ display: ['block', 'none'], mx: 'auto' }}>
                    ©2023 все права защищены.
                </Typography>
            </Box>
        </Box>
    )
}

export default Contacts