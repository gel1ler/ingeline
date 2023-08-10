import React, { useState, useEffect } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import general_image from '../../../../../public/general.jpg'
import image_1 from '../../../../../public/1.jpg'
import image_2 from '../../../../../public/2.jpg'
import image_3 from '../../../../../public/3.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Slide = ({ image }) => {
    return (
        <Box
            sx={{
                cursor: 'pointer',
                position: 'relative',
                width: '100%',
                height: '100%',
                transition: 'all .2s ease-out'
            }}
        >
            <Image
                src={image}
                alt='Станок фото'
                fill
                style={{
                    filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    objectFit: 'cover'
                }}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 40vw"
            />
        </Box>
    )

}


const Arrow = ({ left, f, current, length }) => {
    let disabled = left ?
        current === 0 ? true : false
        : current === (length - 1) ? true : false

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
            <IconButton onClick={f} disabled={disabled}>
                <ArrowForwardIosIcon
                    sx={{
                        fontSize: 'h2.fontSize',
                        transform: left ? 'rotate(180deg)' : null,
                        color: disabled ? 'rgba(255,255,255, 0.5)' : 'rgb(255,255,255)',
                        filter: 'drop-shadow(0px 0px 5px rgb(0,0,0))'
                    }}
                />
            </IconButton >
        </Box>
    )
}

const Slider = ({ additional, main, isVisible, num, setMainCurrent }) => {
    let images = [main, ...additional].slice(0, 4)
    const [current, setCurrent] = useState(0)

    const prev = () => {
        if (current !== 0) {
            setCurrent(current - 1)
        }
    }

    const next = () => {
        if (current !== (images.length - 1)) {
            setCurrent(current + 1)
        }
    }

    useEffect(() => {
        isVisible ? setMainCurrent(num) : null
    })

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', my: 3 }}>
            <Arrow left f={prev} current={current} length={images.length} />
            <Box
                sx={{
                    width: '100%',
                    height: '50vh',
                }}
                className='flex-centered'
            >
                <Slide image={images[current]} />
                <Box
                    sx={{
                        mt: 1,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gridTemplateRows: '80px',
                        gap: 1
                    }}
                >
                    {images.map((i, key) =>
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                opacity: current == key ? '1' : '0.5',
                                transition: 'all .2s ease-out'
                            }}
                            key={key}
                        >
                            <Image
                                alt='Миниатюра слайдера'
                                src={i}
                                fill
                                style={{
                                    borderRadius: '5px',
                                    objectFit: 'cover',
                                    filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))',
                                    cursor: 'pointer'
                                }}
                                sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 7vw"
                                onClick={() => setCurrent(key)}
                            />
                        </Box>
                    )}
                </Box>
            </Box >
            <Arrow f={next} current={current} length={images.length} />
        </Box>
    )
}

export default Slider