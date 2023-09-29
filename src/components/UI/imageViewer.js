import { Modal, Box, IconButton } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import Arrow from './icons/arrow'

const ImageViewer = ({ imgs, open, setOpen, current, setCurrent }) => {

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    border: 'none',
                    filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3))',
                    transform: 'translate(-50%, -50%)',
                    width: '90vw',
                    maxWidth: '600px',
                    height: '80vh',
                    display: 'grid',
                    gridTemplateRows: '1fr 100px',
                    gap: 2
                }}
            >
                <IconButton
                    onClick={() => setOpen(false)}
                    size='large'
                    sx={{
                        zIndex: 999,
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        filter: 'drop-shadow(0px 0px 5px black)',
                    }}
                // data-aos='fade-up'
                >
                    <CloseIcon sx={{ fontSize: 35 }} color='primary' />
                </IconButton>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        hight: '100%',
                        borderRadius: '20px',
                        overflow: 'hidden'
                    }}
                    data-aos='fade-up'
                >
                    <Arrow left current={current} setCurrent={setCurrent} length={imgs.length} />
                    <Arrow current={current} setCurrent={setCurrent} length={imgs.length} />
                    <Image
                        src={imgs[current]}
                        fill
                        style={{
                            borderRadius: '5px',
                            objectFit: 'cover',
                            filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridTemplateRows: '100px',
                        gap: 1,
                    }}
                    data-aos='fade-up'
                >
                    {imgs.slice(0, 3).map((i, key) =>
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                filter: current == key ? null : 'brightness(0.5)'
                            }}
                            key={key}
                            onClick={() => {
                                setCurrent(key)
                            }}
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
                            />
                        </Box>
                    )}
                </Box>
            </Box>
        </Modal>
    )
}

export default ImageViewer