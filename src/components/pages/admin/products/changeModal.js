import React, { useState } from 'react'
import { changeProduct } from '../../../../../firebase/database'
import {
    Box,
    Input,
    Typography,
    Modal,
    Button,
    TextField
} from '@mui/material'
import ChooseImg from './chooseImg'
import Link from 'next/link'
import { useEffect } from 'react'

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

const ChangeModal = ({ setOpen, open, router, folders, product }) => {
    const [name, setName] = useState()
    const [shortDescription, setShortDescription] = useState()
    const [description, setDescription] = useState()
    const [mainImg, setMainImg] = useState()
    const [openMainImg, setOpenMainImg] = useState(false)

    useEffect(() => {
        setName(product.name)
        setShortDescription(product.shortDescription)
        setDescription(product.description)
        setMainImg(product.img)
    }, [open])

    const changeHandler = async () => {
        await changeProduct(product.id, name, shortDescription, description, mainImg).then(() => router.reload())
    }

    return (
        <Modal
            open={open}
            onClose={() => {
                setOpen(false)
            }}
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
                    <Typography variant='h6'>
                        Изменение продукта
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
                    <Box>
                        <Button color='black' variant='outlined' onClick={() => setOpenMainImg(true)}>
                            {mainImg ? 'Изменить' : 'Выбрать'} главную картинку
                        </Button>
                        <ChooseImg
                            folders={folders}
                            openImg={openMainImg}
                            setOpenImg={setOpenMainImg}
                            img={mainImg}
                            setImg={setMainImg}
                        />
                        {mainImg ?
                            <Link href={mainImg} target='_blank'>
                                <Typography sx={{ my: 1, textDecoration: 'underline' }}>
                                    Главная картинка - {mainImg}
                                </Typography>
                            </Link>
                            : null}
                    </Box>
                    <Button onClick={changeHandler} color='secondary' variant='contained' sx={{ width: 'max-content' }}>
                        Изменить
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default ChangeModal