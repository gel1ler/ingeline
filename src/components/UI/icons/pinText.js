import { Visibility } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

const PinText = () => {
    const textRef = useRef()
    const [width, setWidth] = useState()
    const [visibility, setVisibility] = useState('not-visible')

    useEffect(() => {
        setWidth(textRef.current.offsetWidth)
    })

    return (
        <Box
            onMouseEnter={() => setVisibility('visible')}
            onMouseLeave={() => setVisibility('not-visible')}
        >
            <Typography className={visibility} variant="h5" sx={{ ml: '80px', width: 'min-content' }} ref={textRef}>
                sdkfkjsdf
            </Typography>
            <svg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 664 165.914">
                <defs>
                    <style>
                        {`.cls-1{fill:#333;}.cls-2{fill:none;stroke:#333;stroke-miterlimit:10;stroke-width:4px;}`}
                    </style>
                </defs>
                <path className="cls-1"
                    d="M630,565a46,46,0,1,1-46,46,45.7,45.7,0,0,1,46-46m0,75a29,29,0,1,0-29-29,29.032,29.032,0,0,0,29,29m0-79a50.018,50.018,0,1,0,35.35,14.65A50.005,50.005,0,0,0,630,561Zm0,75a25,25,0,1,1,25-25,25,25,0,0,1-25,25Z"
                    transform="translate(-580 -495.086)" />
                <path className={"cls-1 t " + visibility == 'visible' ? 'scaled' : null}
                    d="M629.991,590h0A21,21,0,0,1,630,632c-.466,0-.939-.015-1.4-.046A21,21,0,0,1,629.991,590m0-4a25,25,0,0,0-1.658,49.95c.556.037,1.114.055,1.671.055a25,25,0,0,0-.013-50Z"
                    transform="translate(-580 -495.086)" />
                <line className={"cls-2 t " + visibility} x1="84" y1="81.914" x2="164.5" y2="1.414" />
                <line className={"cls-2 t " + visibility} x1="164" y1="2.414" x2={164 + width * 2.7} y2="2.414" />
            </svg>
        </Box>
    )
}

export default PinText