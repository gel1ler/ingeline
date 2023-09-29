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
            setImg([...arr, image])
        }
    }

    return (
        <Modal open={openImg} onClose={() => setOpenImg(false)}>
            <Box sx={style}>
                <Typography variant='h6'>
                    Папки с изображениями
                </Typography>
                <Box className='c-gap2' sx={{ mt: 3 }}>
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
                                        }}
                                        onClick={() => multiSelection ? chooseAdditional(image) : chooseMain(image)}
                                    >
                                        <Image
                                            src={image}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            alt='choose'
                                            sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 7vw"
                                        />
                                        <Box
                                            sx={{
                                                display: multiSelection && img.includes(image) ? 'block' : 'none',
                                                width: 20,
                                                height: 20,
                                                bgcolor: 'white',
                                                borderRadius: '50%',
                                                position: 'absolute',
                                            }}
                                            className='shadow absCenter'
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