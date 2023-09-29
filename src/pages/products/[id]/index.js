import React from 'react'
import Layout from '@/components/Layout/Layout'
import { Container, Typography } from '@mui/material'
import Title from '@/components/UI/Title'
import { useRouter } from 'next/router'
import { getProduct } from '@/../firebase/clientApp'
import Image from 'next/image'
import { Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Form from '@/components/UI/Order/Form'
import DescriprionList from '@/components/UI/text/descriprionList'

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
                    <Box sx={{ width: '50vw' }}>
                        <Title title={product.name} large />
                        <DescriprionList description={product.description} />
                        <Box sx={{ position: 'absolute', bottom: '5vh', mx: 'auto', left: 0, right: 0, textAlign: 'center', cursor: 'pointer', width: 'min-content' }}>
                            <AnchorLink href='#about_anchor' offset='50'>
                                <Typography variant='h6' >
                                    Подробнее
                                </Typography>
                                <ExpandMoreIcon sx={{ fontSize: 30, mt: -1 }} />
                            </AnchorLink>
                        </Box>
                    </Box>
                    <Form mt='30vh' />
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Box sx={{ width: '40vw', height: '70vh', mt: '100vh' }}>
                        <Title title={product.name} />
                        <Typography variant='h6'>
                            {product.description}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Layout>
    )
}

export default Index