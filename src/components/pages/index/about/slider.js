import React, { useState, useEffect } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import general_image from '../../../../../public/general.jpg'
import image_1 from '../../../../../public/1.jpg'
import image_2 from '../../../../../public/2.jpg'
import image_3 from '../../../../../public/3.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const images = [
    general_image,
    image_1,
    image_2,
    image_3
]

const Slide = ({ num, current, next, prev }) => {
    let width = '20%',
        opacity = 0.4,
        scale = 0.9,
        tX = 0,
        zIndex = 1,
        f,
        bSh


    if (num == 1) {
        width = '100%'
        opacity = 1
        scale = 1
        zIndex = 2,
            bSh = true
    }
    if (num == 0) {
        tX = '10%',
            f = prev
    }
    if (num == 2) {
        tX = '-10%'
        f = next
    }

    return (
        <Box
            sx={{
                background: `url(${images[current].src})`,
                backgroundSize: 'cover',
                width,
                opacity,
                height: '100%',
                transition: 'all .2s ease-in-out',
                transform: `scale(${scale}) translateX(${tX})`,
                zIndex,
                boxShadow: bSh ? '0px 5px 10px 2px rgba(34, 60, 80, 0.9)' : null
            }}
            onClick={f}
        />
    )

}


const Arrow = ({ left, f }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                left: left ? 0 : null,
                right: left ? null : 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
            }}
        >
            <IconButton onClick={f}>
                <ArrowForwardIosIcon
                    sx={{
                        fontSize: 'h3.fontSize',
                        transform: left ? 'rotate(180deg)' : null
                    }}
                />
            </IconButton >
        </Box>
    )
}

const Slider = () => {
    const [current, setCurrent] = useState([0, 1, 2])

    const prev = () => {
        let first = current[0]
        let added = first == 0 ? current[current.length - 1] : first-1
        let arr = current
        arr.splice(current.length-1, 1)
        arr.unshift(added)
        setCurrent([...arr])
    }

    const next = () => {
        let last = current[current.length - 1]
        let added = (last + 1) % (current.length + 1)
        let arr = current
        arr.splice(0, 1)
        arr.push(added)
        setCurrent([...arr])
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <Arrow left f={prev} />
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '50vh',
                    overflow: 'hidden'
                }}
            >
                {current.map((i, key) =>
                    <Slide key={key} current={i} num={key} next={next} prev={prev} />
                )}
            </Box >
            <Arrow f={next} />
        </Box>
    )
}

export default Slider