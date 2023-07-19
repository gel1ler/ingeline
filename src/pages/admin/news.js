import React from 'react'
import Layout from '@/components/Layout/Layout'
import {
    Box,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
} from '@mui/material'
import Title from '../../components/UI/Title'
import { getNews, deleteNewsPiece, getFolders } from '../../../firebase/clientApp'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Modal from '@/components/pages/admin/news/modal'

export async function getServerSideProps() {
    const news = await getNews()
    const folders = await getFolders()

    return {
        props: { news, folders }
    }
}

const News = ({ news, folders }) => {
    const [openCreate, setOpenCreate] = useState(false)
    const [openChange, setOpenChange] = useState(false)
    const [selected, setSelected] = useState(news[0])

    const router = useRouter()
    const deleteHandler = async (id) => {
        await deleteNewsPiece(id).then(() => router.reload())
    }

    return (
        <Box>
            <Modal
                setOpen={setOpenCreate}
                open={openCreate}
                router={router}
                folders={folders}
            />
            <Modal
                newsPiece={selected}
                setOpen={setOpenChange}
                open={openChange}
                router={router}
                folders={folders}
                change
            />
            <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: ['98vw', '98vw', '98vw', '90vw'] }} maxWidth={false}>
                <Title title='Админ панель - продукция' />
                <Box sx={{ p: 4 }}>
                    <Button color='success' onClick={() => setOpenCreate(true)}>
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

                                {news ? news.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell align="center">{row.id}</TableCell>
                                        <TableCell align="center">{row.name}</TableCell>
                                        <TableCell align="center">
                                            <Button
                                                color='secondary'
                                                onClick={() => {
                                                    setSelected(row)
                                                    setOpenChange(true)
                                                }}
                                            >
                                                Изменить
                                            </Button>
                                        </TableCell>
                                        <TableCell align="center"><Button color='error' onClick={() => deleteHandler(row.id)}>Удалить</Button></TableCell>
                                    </TableRow>
                                )) : null}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </Box>
    )
}

export default News