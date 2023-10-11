import Title from '@/components/UI/Title'
import PinText from '@/components/UI/icons/pinText'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

let arr = Array(2).fill(0)

const Advantages = ({ product }) => {
    const imgElement = useRef(null)

    useEffect(() => console.log(imgElement.current.width))

    return (
        <Box className='c-gap2'>
            <Title title='Преимущества' align='center' />
            <Box className='two-columns gap1'>
                {arr.map((i, key) =>
                    <Box
                        className='shadow br10'
                        key={key}
                        sx={{
                            minHeight: '60vh',
                            position: 'relative'
                        }}
                    >
                        <Box className='wrapper100 hidden'>
                            <Image
                                alt='Product'
                                src={product.additionalImg[key]}
                                fill
                                style={{
                                    objectFit: 'cover',
                                    zIndex: -1
                                }}
                                ref={imgElement}
                            />
                            <Box
                                sx={{
                                    width: '300px',
                                    height: '100px',
                                    position: 'absolute',
                                    top: 200,
                                    left: '36%',
                                    zIndex: 100
                                }}
                            >
                                <PinText />
                            </Box>
                        </Box>

                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Advantages