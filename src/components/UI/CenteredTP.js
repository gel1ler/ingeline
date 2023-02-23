import React from 'react'
import { Typography } from '@mui/material'

const CenteredTP = ({ children, weight, underlined, isMd, isSm }) => {
    if (isMd || isSm) {
        return null
    }
    return (
        <Typography sx={{ display: 'flex', gap: 0.5, alignItems: 'center', fontWeight: weight ? weight : null, textDecoration: underlined ? "underline" : null }}>
            {children}
        </Typography>
    )
}

export default CenteredTP