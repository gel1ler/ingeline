import React, { useState, useEffect } from 'react'
import { Box, IconButton } from '@mui/material'
import Image from 'next/image'
import general_image from '../../../../public/general.jpg'
import image_1 from '../../../../public/1.jpg'
import image_2 from '../../../../public/2.jpg'
import image_3 from '../../../../public/3.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const images = [
    general_image,
    image_1,
    image_2,
    image_3
]

const Slide = ({ num, current }) => {
    console.log(num, current)

    return (
        <Box
            sx={{
                background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.5) 27%, rgba(0,212,255,1) 100%)',
                width: '100%',
                height: '100%',
                borderRight: '1px black solid',
                // transform: `rotate(10deg)`

            }}
        >
            {num}
        </Box>
    )

}

const Slider = () => {
    const [current, setCurrent] = useState([0, 1, 2])

    const next = () => {
        let last = current[current.length - 1]
        let added = (last + 1) % (current.length + 1)
        let arr = current
        arr.splice(0, 1)
        arr.push(added)
        setCurrent([...arr])
    }

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '50vh',
                bgcolor: 'green',
                overflow: 'hidden'
            }}
            onClick={next}
        >
            {current.map((i, key) =>
                <Slide key={key} current={i} num={key} />
            )}
        </Box >
    )
}

export default Slider