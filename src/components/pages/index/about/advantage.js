import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Advantage = ({ text, num, height, href }) => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useScrollPosition(({ prevPos, currPos }) => {
        setScrollPosition(-currPos.y)
    })

    let current
    let pos = scrollPosition / height
    if (pos >= 0.7 && pos < 1.6) {
        current = 0
    }
    else if (pos >= 1.6 && pos < 2.6) {
        current = 1
    }
    else if (pos >= 2.6 && pos < 4) {
        current = 2
    }

    let isActive = current == num
    return (
        <AnchorLink href={'#' + href}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    my: 1,
                    // transform: isActive ? 'translateX(-20px)' : 'none',
                    transition: 'all .2s ease-out'
                }}
                data-aos='fade-left'
            >
                <Box
                    sx={{
                        borderRadius: '50%',
                        transition: 'all .2s ease-out',
                        border: isActive ? '3px solid #E5A019' : '3px solid #CBC2B9',
                        p: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                    }}
                >
                    <Typography variant='h5'>
                        {num + 1}
                    </Typography>
                </Box>
                <Typography
                    align='left'
                    variant='h5'
                    sx={{
                        ml: 2,

                    }}
                >
                    {`${text}`}
                </Typography>
            </Box>
        </AnchorLink>
    )
}

export default Advantage