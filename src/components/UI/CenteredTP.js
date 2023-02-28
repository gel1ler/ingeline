import React from 'react'
import { Typography } from '@mui/material'

const CenteredTP = ({ children, weight, underlined, isMd, isSm, mb, click, link }) => {
    if (isMd || isSm) {
        return null
    }

    const temp =
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
    if (link) {
        return <a target="_blank" rel="noopener noreferrer" href={link}>
            {temp}
        </a>
    }
    else {
        return temp
    }
}

export default CenteredTP