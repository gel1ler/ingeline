import React from 'react'
import Layout from '@/components/Layout/Layout'
import {
    Box,
    Container,
    Input,
    Typography,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TextField
} from '@mui/material'
import Title from '../../components/UI/Title'
import { createProduct, getProducts, deleteProduct } from '../../../firebase/clientApp'
import { useState } from 'react'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
    const products = await getProducts()
    return {
        props: products ? { products } : { status: 'Nothing here' }
    }
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 5,
    width: '60vw',
    maxHeight: '80vh',
    overflowY: 'scroll'
}

const Index = ({ products, status }) => {
    console.log(products, status)
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')

    const createHandler = async () => {
        await createProduct(name, shortDescription, description, img).then(() => router.reload())
    }

    const deleteHandler = async (id) => {
        await deleteProduct(id).then(() => router.reload())
    }

    return (
        <Layout>
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
                            alignItems: 'center'
                        }}
                    >
                        <Typography>
                            Создание продукта
                        </Typography>
                        <TextField
                            sx={{ width: '100%' }}
                            multiline
                            label='Наименование'
                            color='secondary'
                            variant="outlined"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />

                        <TextField
                            sx={{ width: '100%' }}
                            multiline
                            label='Краткое описание'
                            color='secondary'
                            variant="outlined"
                            value={shortDescription}
                            onChange={event => setShortDescription(event.target.value)}
                        />

                        <TextField
                            sx={{ width: '100%' }}
                            multiline
                            label='Полное описание'
                            color='secondary'
                            variant="outlined"
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                        />

                        <TextField
                            sx={{ width: '100%' }}
                            multiline
                            label='Ссылка на картинку'
                            color='secondary'
                            variant="outlined"
                            value={img}
                            onChange={event => setImg(event.target.value)}
                        />

                        <Button onClick={createHandler} color='secondary'>
                            Создать
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: ['98vw', '98vw', '98vw', '90vw'] }} maxWidth={false}>
                <Title title='Админ панель - продукция' />
                <Box sx={{ p: 4 }}>
                    <Button color='success' onClick={() => setOpen(true)}>
                        Добавить
                    </Button>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="center">Наименование</TableCell>
                                    <TableCell align="center">Изменить</TableCell>
                                    <TableCell align="center">Удалить</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {products ? products.map((row, key) => (
                                    <TableRow key={row.id}>
                                        <TableCell align="center">{row.id}</TableCell>
                                        <TableCell align="center">{row.name}</TableCell>
                                        <TableCell align="center"><Button color='secondary'>Изменить</Button></TableCell>
                                        <TableCell align="center"><Button color='error' onClick={() => deleteHandler(row.id)}>Удалить</Button></TableCell>
                                    </TableRow>
                                )) :
                                    null
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </Layout>
    )
}

export default Index