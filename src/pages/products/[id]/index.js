import React from 'react'
import Layout from '@/components/Layout/Layout'
import { Container, Divider, Typography } from '@mui/material'
import Title from '@/components/UI/Title'
import { getProduct } from '@/../firebase/clientApp'
import Image from 'next/image'
import { Box } from '@mui/material'
import Form from '@/components/UI/Order/Form'
import DescriprionList from '@/components/UI/text/descriprionList'
import DetailedAbs from '@/components/UI/icons/detailedAbs'
import Advantages from '@/components/pages/product/advantages'

export async function getServerSideProps({ params }) {
    const product = await getProduct(params.id)
    return {
        props: { product }
    }
}

const Index = ({ product }) => {
    return (
        <Layout>
            <Image
                fill
                src={product.mainImg}
                alt={`Картинка ${product.name}`}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '15%',
                    overflow: 'hidden',
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
            <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw', minHeight: '90vh' }} maxWidth={false}>
                <Box sx={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Box sx={{ width: '50vw' }} className='c-gap3'>
                        <Title title={product.name} large />
                        <DescriprionList props={product.props} />
                    </Box>
                    <Form mt='30vh' />
                    <DetailedAbs href='#about-product' />
                </Box>
                <Advantages product={product} />
                <Box sx={{ mt: '20vh' }} id='about-product' className='c-gap7'>
                    {product.descriptions.map((i, key) =>
                        <Box key={key}>
                            <Title title={i.title} align={i.align == 'right' ? 'left' : null} />
                            <Box
                                className='two-columns r-gap2'
                                sx={{
                                    height: '70vh'
                                }}
                            >
                                {i.align == 'left' ?
                                    <Typography variant='h5' className='ls-2'>
                                        {i.text}
                                    </Typography>
                                    : null
                                }
                                <Box className='wrapper100 br10'>
                                    <Image
                                        alt='Главная картинка'
                                        src={product.mainImg}
                                        fill
                                        style={{
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Box>
                                {i.align == 'right' ?
                                    <Typography variant='h5' className='ls-2' textAlign='right'>
                                        {i.text}
                                    </Typography>
                                    : null
                                }
                            </Box>
                        </Box>
                    )}
                </Box>
            </Container>
        </Layout>
    )
}

export default Index