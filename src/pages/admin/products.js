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
import { createProduct, getProducts, deleteProduct, getFolders } from '../../../firebase/clientApp'
import { useState } from 'react'
import { useRouter } from 'next/router'
import CreateModal from '@/components/pages/admin/products/createModal'

export async function getServerSideProps() {
    const products = await getProducts()
    const folders = await getFolders()
    return {
        props: products ? { products, folders } : { status: 'Nothing here' }
    }
}

const Index = ({ products, folders }) => {
    console.log(folders)
    const [open, setOpen] = useState(false)

    const router = useRouter()
    const deleteHandler = async (id) => {
        await deleteProduct(id).then(() => router.reload())
    }

    return (
        <Layout>
            <CreateModal setOpen={setOpen} open={open} router={router} />
            <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: ['98vw', '98vw', '98vw', '90vw'] }} maxWidth={false}>
                <Title title='Админ панель - продукция' />
                <Box sx={{ p: 4 }}>
                    <Button color='success' onClick={() => setOpen(true)}>
                        Добавить
                    </Button>
                    <TableContainer>
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