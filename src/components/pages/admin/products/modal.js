import React, { useState } from 'react'
import { createProduct } from '../../../../../firebase/database'
import {
    Box,
    Typography,
    Modal,
    Button,
    TextField
} from '@mui/material'
import ChooseImg from './chooseImg'
import Link from 'next/link'

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

const CreateModal = ({ setOpen, open, router, folders, choose, create }) => {
    const [name, setName] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [description, setDescription] = useState('')
    const [mainImg, setMainImg] = useState('')
    const [additionalImg, setAdditionalImg] = useState([])
    const [openMainImg, setOpenMainImg] = useState(false)
    const [openAdditionalImg, setOpenAdditionalImg] = useState(false)

    const createHandler = async () => {
        await createProduct(name, shortDescription, description, mainImg, additionalImg).then(() => router.reload())
    }

    if (choose) {
        useEffect(() => {
            setName(product.name)
            setShortDescription(product.shortDescription)
            setDescription(product.description)
            setMainImg(product.mainImg)
        }, [open])
    }
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >

        </Modal>
    )
}

export default CreateModal