import React from 'react'
import {
    Box,
    Input,
    Typography,
    Modal,
    Button,
    TextField
} from '@mui/material'

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

const ChooseImg = ({ images, openMainImg, setOpenMainImg }) => {
    return (
        <Modal open={openMainImg} onClose={() => setOpenMainImg(false)}>
            <Box sx={style}>
                <Typography>
                    Папки с изображениями
                </Typography>
                {/* {images.map((i, key) => {
                    return 'a'
                })} */}
            </Box>
        </Modal>
    )
}

export default ChooseImg