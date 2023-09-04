import React from 'react'
import { Box, Typography } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneIcon from '@mui/icons-material/Phone'
import CenteredTP from '@/components/UI/CenteredTP'


const Contacts = ({ footer }) => {
    return (
        <Box>
            {footer ? <Typography variant='h6' align='center'>Контакты</Typography> : null}
            <Box textAlign='center'>
                <Typography sx={{ mb: 1.5 }}>
                    Московская обл, Раменский р-н,
                    Северное ш. 10, 315 кабинет
                </Typography>
                <CenteredTP mb center>
                    <EmailOutlinedIcon fontSize='small' />
                    info@ingeline.com
                </CenteredTP>
                <CenteredTP weight='800' mb center>
                    <PhoneIcon fontSize='small' />
                    +7(495)111-11-11
                </CenteredTP>
                <Typography sx={{ display: ['block', 'none'] }}>
                    ©2023 все права защищены.
                </Typography>
            </Box>
        </Box>
    )
}

export default Contacts