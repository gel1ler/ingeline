import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import arrowIcon from 'public/arrow.svg'

const Arrow = ({ left, current, setCurrent, length }) => {
    let disabled = left ?
        current === 0 ? true : false
        : current === (length - 1) ? true : false
    disabled = !disabled

    const prev = () => {
        if (current !== 0) {
            setCurrent(current - 1)
        }
    }

    const next = () => {
        if (current !== (length - 1)) {
            setCurrent(current + 1)
        }
    }

    return (
        <Box
            // data-aos={left ? 'fade-right' : 'fade-left'}
            sx={{
                position: 'absolute',
                left: left ? 5 : null,
                right: !left ? 5 : null,
                top: '50%',
                cursor: disabled ? 'pointer' : null,
                filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.9))',
                transform: left ? 'scale(-1, 1) translateY(-50%)' : 'translateY(-50%)',
                transition: 'all .3s ease-out',
                opacity: disabled ? 1 : 0.4,
                zIndex: 12,
                ':hover': {
                    right: disabled ? !left ? 0 : null : null,
                    left: disabled ? left ? 0 : null : null,
                }
            }}
            onClick={left ? prev : next}
        >
            <Image
                src={arrowIcon}
                style={{
                    height: '80px',
                    width: '80px',
                }}
            />
        </Box>
    )
}

export default Arrow