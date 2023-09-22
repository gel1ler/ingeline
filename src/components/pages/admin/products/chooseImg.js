import React from 'react'
import {
    Box,
    Input,
    Typography,
    Modal,
    Button,
    TextField
} from '@mui/material'
import Image from 'next/image'
import { deleteImage } from '@/../firebase/clientApp'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 5,
    width: '80vw',
    height: '70vh',
    overflowY: 'scroll'
}

const ChooseImg = ({ folders, openImg, setOpenImg, img, setImg, multiSelection }) => {

    const chooseMain = (image) => {
        setImg(image)
        setOpenImg(false)
    }

    const chooseAdditional = (image) => {
        let arr = img
        if (arr.includes(image)) {
            setImg(arr.filter(i => i != image))
        }
        else {
            arr.push(image)
            setImg([...arr])
        }
    }

    const deleteHandler = (image) => {
        let arr = img
        setImg(arr.filter(i => i != image))
        deleteImage(image)
    }

    return (
        <Modal open={openImg} onClose={() => setOpenImg(false)}>
            <Box sx={style}>
                <Typography variant='h6'>
                    Папки с изображениями
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                    {folders.map((folder, key) => (
                        <Box key={key}>
                            <Typography variant='h5'>
                                {folder[0]}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: `repeat(6, 1fr)`,
                                    gap: 4,
                                    width: '100%',
                                    justifyItems: 'center'
                                }}
                            >
                                {folder.slice(1).map((image, key) =>
                                    <Box
                                        key={key}
                                        sx={{
                                            width: '100%',
                                            height: '100px',
                                            position: 'relative',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                "& .image-popover": {
                                                    opacity:1
                                                }
                                            }
                                        }}
                                    >
                                        <Box
                                            className='image-popover'
                                            sx={{
                                                transition: 'all ease .3s',
                                                opacity: 0,
                                                width: '100%',
                                                height: '100%',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'space-around',
                                                zIndex: 999
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 20,
                                                    height: 20,
                                                    bgcolor: 'white',
                                                    borderRadius: '50%',
                                                }}
                                                className='shadow'
                                                onClick={() => multiSelection ? chooseAdditional(image) : chooseMain(image)}
                                            />
                                            <Box
                                                sx={{
                                                    width: 20,
                                                    height: 20,
                                                    bgcolor: 'red',
                                                    borderRadius: '50%',
                                                }}
                                                className='shadow'
                                                onClick={() => deleteHandler(image)}
                                            />
                                        </Box>
                                        <Image
                                            src={image}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            alt='choose'
                                            sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 7vw"
                                        />
                                    </Box>
                                )}
                            </Box >
                        </Box>
                    ))}
                </Box>
            </Box>
        </Modal >
    )
}

export default ChooseImg