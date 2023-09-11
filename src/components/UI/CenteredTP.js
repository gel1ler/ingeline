import React from 'react'
import { Typography } from '@mui/material'

const CenteredTP = ({ children, weight, click, link, centered, mb }) => {
    const temp =
        <Typography
            sx={{
                display: 'flex',
                gap: 0.5,
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: weight ? weight : null,
                textDecoration: "underline",
                cursor: 'pointer',
                width: centered ? '100%' : 'max-content',
                mb: mb ? 1 : 0
            }}
            onClick={click}
            textAlign={centered ? 'center' : 'none'}
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