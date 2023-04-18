import React from 'react'
import { Box, Typography } from '@mui/material'
import CenteredTP from '../UI/CenteredTP'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneIcon from '@mui/icons-material/Phone'


const Contacts = () => {
    return (
        <Box textAlign='center'>
            <Typography sx={{ mb: 1.5 }}>
                Московская обл, Раменский р-н,
                Северное ш. 10, 315 кабинет
            </Typography>
            <CenteredTP underlined mb>
                <EmailOutlinedIcon fontSize='small' />
                info@ingeline.com
            </CenteredTP>
            <CenteredTP underlined weight='800' mb>
                <PhoneIcon fontSize='small' />
                +7(495)111-11-11
            </CenteredTP>
            <Typography sx={{ display: ['block', 'none'] }}>
                ©2023 все права защищены.
            </Typography>
        </Box>
    )
}

export default Contacts