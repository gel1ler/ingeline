import React, { useState, useEffect } from 'react'
import { createNewsPiece, changeNewsPiece } from '../../../../../firebase/clientApp'
import {
    Box,
    Typography,
    Modal,
    Button,
    TextField
} from '@mui/material'
import ChooseImg from './chooseImg'
import Link from 'next/link'
import Field from '@/components/UI/Field'

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

const MyModal = ({ setOpen, open, router, change, newsPiece, folders }) => {
    const [name, setName] = useState('')
    const [mainImg, setMainImg] = useState('')
    const [additionalImg, setAdditionalImg] = useState([])
    const [openMainImg, setOpenMainImg] = useState(false)
    const [openAdditionalImg, setOpenAdditionalImg] = useState(false)

    const createHandler = async () => {
        await createNewsPiece(name, mainImg, additionalImg).then(() => router.reload())
    }

    const changeHandler = async () => {
        await changeNewsPiece(newsPiece.id, name, mainImg, additionalImg).then(() => router.reload())
    }

    if (change) {
        useEffect(() => {
            setName(newsPiece.name)
            setMainImg(newsPiece.mainImg)
            setAdditionalImg(newsPiece.additionalImg || [])
        }, [open])
    }
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box sx={style}>
                <ChooseImg
                    openImg={openMainImg}
                    setOpenImg={setOpenMainImg}
                    img={mainImg}
                    setImg={setMainImg}
                    folders={folders}
                />
                <ChooseImg
                    multiSelection
                    openImg={openAdditionalImg}
                    setOpenImg={setOpenAdditionalImg}
                    img={additionalImg}
                    setImg={setAdditionalImg}
                    folders={folders}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        width: '100%',
                    }}
                >
                    <Typography variant='h6'>
                        {change ? 'Изменение' : 'Создание'} продукта
                    </Typography>
                    <Field
                        label='Наименование'
                        value={name}
                        setValue={setName}
                        multiline
                    />
                    <Box>
                        <Button color='black' variant='outlined' onClick={() => setOpenMainImg(true)}>
                            {mainImg ? 'Изменить' : 'Выбрать'} главную картинку
                        </Button>
                        {mainImg ?
                            <Link href={mainImg} target='_blank'>
                                <Typography sx={{ my: 1, textDecoration: 'underline' }}>
                                    Главная картинка - {mainImg}
                                </Typography>
                            </Link>
                            : null}
                    </Box>
                    <Box>
                        <Button color='black' variant='outlined' onClick={() => setOpenAdditionalImg(true)}>
                            {additionalImg.length ? 'Изменить' : 'Выбрать'} доп картинки
                        </Button>
                        {additionalImg.length ? additionalImg.map((i, key) => (
                            <Link href={i} target='_blank' key={key}>
                                <Typography sx={{ my: 1, textDecoration: 'underline' }}>
                                    Доп картинкa {key} - {i}
                                </Typography>
                            </Link>
                        )) : null}
                    </Box>
                    <Button onClick={change ? changeHandler : createHandler} color='secondary' variant='contained' sx={{ width: 'max-content' }}>
                        {change ? 'Изменить' : 'Создать'}
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default MyModal