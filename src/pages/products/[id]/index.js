import React from 'react'
import Layout from '@/components/Layout/Layout'
import { Button, Container, TextField, Typography } from '@mui/material'
import Title from '@/components/UI/Title'
import { useRouter } from 'next/router'
import { productsData } from '@/db/productsData'
import { createProduct, getProduct } from '../../../../firebase/clientApp'
import Image from 'next/image'
import { Box } from '@mui/material'

export async function getServerSideProps({ params }) {
    const product = await getProduct(params.id)
    return {
        props: { product }
    }
}

const Sticker = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="-5 0 20 20" version="1.1">
            <title>bookmark_fill [#1227]</title>
            <desc>Created with Sketch.</desc>
            <defs>

            </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="#E5A019" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-265.000000, -2679.000000)" fill="#E5A019">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M219,2521 L219,2537.998 C219,2538.889 217.923,2539.335 217.293,2538.705 L214.707,2536.119 C214.317,2535.729 213.683,2535.729 213.293,2536.119 L210.707,2538.705 C210.077,2539.335 209,2538.889 209,2537.998 L209,2521 C209,2519.895 209.895,2519 211,2519 L217,2519 C218.105,2519 219,2519.895 219,2521" id="bookmark_fill-[#1227]">

                        </path>
                    </g>
                </g>
            </g>
        </svg>
    )
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
                        <Box sx={{ position: 'absolute', top: -20, left: 20, width: 60 }}>
                            <Sticker />
                        </Box>
                        <Box className='column-centered' sx={{ gap: 2, width: '100%' }}>
                            <Typography variant='h5' textAlign='center'>
                                Онлайн заявка
                            </Typography>
                            <TextField label="Наименование орагнизации" sx={{ width: '80%' }} color='secondary' />
                            <TextField label="Эл. почта" sx={{ width: '80%' }} color='secondary' />
                            <TextField label="Номер телефона" sx={{ width: '80%' }} color='secondary' />
                            <TextField label="Изделие" sx={{ width: '80%' }} color='secondary' value={product.name} />
                            <Button color='secondary' variant='contained' sx={{mt: 2}}>
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