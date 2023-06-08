import React, { useState } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import general_image from '../../../../public/general.jpg'

const Slide = ({ src }) => {
    return (
        <Box
            sx={{
                width: '100%',
                maxHeight: '30vh'
            }}
        >
            <Image alt='img' src={src} style={{ width: '100%', height: '100%', objectFit: "contain" }} />
        </Box>
    )
}

const images = [
    general_image,
    general_image,
    general_image,
    general_image,
    general_image
]


const Slider = () => {
    const [current, setCurrent] = useState(0)

    return (
        <Box
            sx={{
                gap: 10,
                position: ''
            }}
        >
            {images.map((i, key) =>
                <Slide key={key} src={i} />
            )}
        </Box>
    )
}

export default Slider