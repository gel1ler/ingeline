import React from 'react'
import Layout from '@/components/Layout/Layout'
import { Button, Container, TextField, Typography } from '@mui/material'
import Title from '@/components/UI/Title'
import { useRouter } from 'next/router'
import { productsData } from '@/db/productsData'
import { createProduct, getProduct } from '../../../../firebase/clientApp'
import Image from 'next/image'
import { Box } from '@mui/material'
import Sticker from '@/components/UI/sticker'

export async function getServerSideProps({ params }) {
    const product = await getProduct(params.id)
    return {
        props: { product }
    }
}

const Index = ({ product }) => {
    const router = useRouter()

    return (
        <Layout>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    overflow: 'hidden',
                    background: `url(${product.img})`,
                    backgroundSize: 'cover',
                    zIndex: -1
                }}
            />
            <Box
                sx={{
                    width: '100vw',
                    height: '100vh',
                    background: 'linear-gradient(to right, white 20%, 70%, transparent), linear-gradient(to top, white, transparent)',
                    zIndex: -1,
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}
            />
            <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw', py: 4, minHeight: '90vh' }} maxWidth={false}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ width: '40vw' }}>
                        <Title title={product.name} />
                        <Typography variant='h6'>
                            {product.description}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '40vw',
                            ml: 'auto',
                            bgcolor: 'white',
                            p: 4,
                            position: 'relative',
                            mt: '40vh'
                        }}
                        className="shadow"
                    >
                        <Sticker />
                        <Box className='column-centered' sx={{ gap: 2, width: '100%' }}>
                            <Typography variant='h5' textAlign='center'>
                                Онлайн заявка
                            </Typography>
                            <TextField label="Наименование орагнизации" sx={{ width: '80%' }} color='secondary' />
                            <TextField label="Эл. почта" sx={{ width: '80%' }} color='secondary' />
                            <TextField label="Номер телефона" sx={{ width: '80%' }} color='secondary' />
                            <TextField label="Изделие" sx={{ width: '80%' }} color='secondary' value={product.name} />
                            <Button color='secondary' variant='contained' sx={{ mt: 2 }}>
                                Отправить
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '40vw', height: '70vh' }}>
                    <Title title={product.name} />
                    <Typography variant='h6'>
                        {product.description}
                    </Typography>
                </Box>
            </Container>
        </Layout>
    )
}

export default Index