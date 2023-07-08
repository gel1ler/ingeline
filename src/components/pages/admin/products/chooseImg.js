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

const ChooseImg = ({ folders, openMainImg, setOpenMainImg, setMainImg }) => {
    return (
        <Modal open={openMainImg} onClose={() => setOpenMainImg(false)}>
            <Box sx={style}>
                <Typography variant='h6'>
                    Папки с изображениями
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                    {folders.map((folder, key) => (
                        <>
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
                                    <Box sx={{ width: '100%', height: '100px', position: 'relative' }}>
                                        <Image
                                            src={image}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            onClick={() => {
                                                setMainImg(image)
                                                setOpenMainImg(false)
                                            }}
                                        />
                                    </Box>
                                )}
                            </Box >
                        </>
                    ))}
                </Box>
            </Box>
        </Modal >
    )
}

export default ChooseImg