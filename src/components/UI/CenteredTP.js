import React from 'react'
import { Typography } from '@mui/material'

const CenteredTP = ({ children, weight, underlined, isMd, isSm, mb, click }) => {
    if (isMd || isSm) {
        return null
    }
    return (
        <Typography
            sx={{
                display: 'flex',
                gap: 0.5,
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: weight ? weight : null,
                textDecoration: underlined ? "underline" : null,
                mb: mb ? 1.5 : null,
                cursor: 'pointer'
            }}
            onClick={click}
        >
            {children}
        </Typography>
    )
}

export default CenteredTP