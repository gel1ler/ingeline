import React, { useState } from 'react'
import { createProduct } from '../../../../../firebase/database'
import {
    Box,
    Input,
    Typography,
    Modal,
    Button,
    TextField
} from '@mui/material'
import ChooseImg from './chooseImg'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 5,
    width: '90vw',
    height: '80vh',
    overflowY: 'scroll'
}

const Field = ({ label, state, setState }) => {
    return (
        <TextField
            sx={{ width: '100%' }}
            multiline
            label={label}
            color='secondary'
            variant="outlined"
            value={state}
            onChange={event => setState(event.target.value)}
        />
    )
}

const CreateModal = ({ setOpen, open, router }) => {
    const [name, setName] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [description, setDescription] = useState('')
    const [mainImg, setMainImg] = useState('')
    const [openMainImg, setOpenMainImg] = useState(false)

    const createHandler = async () => {
        await createProduct(name, shortDescription, description, img).then(() => router.reload())
    }

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box sx={style}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        width: '100%',
                    }}
                >
                    <Typography>
                        Создание продукта
                    </Typography>
                    <Field
                        label='Наименование'
                        state={name}
                        setState={setName}
                    />
                    <Field
                        label='Краткое описание'
                        state={shortDescription}
                        setState={setShortDescription}
                    />
                    <Field
                        label='Полное описание'
                        state={description}
                        setState={setDescription}
                    />
                    {mainImg ? <Typography>
                        Ссылка на главную картинку - {mainImg}
                    </Typography> : null}
                    <Box>
                        <Button color='black' variant='outlined' onClick={() => setOpenMainImg(true)}>
                            Выбрать главную картинку
                        </Button>
                        <ChooseImg images openMainImg={openMainImg} setOpenMainImg={setOpenMainImg} />
                    </Box>
                    <Button onClick={createHandler} color='secondary' variant='contained' sx={{ width: 'max-content' }}>
                        Создать
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default CreateModal