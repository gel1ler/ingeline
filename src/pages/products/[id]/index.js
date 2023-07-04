import React from 'react'
import Layout from '@/components/Layout/Layout'
import { Container } from '@mui/material'
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

const Index = ({ product }) => {
    const router = useRouter()

    return (
        <Layout>
            <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw', py: 4, minHeight: '90vh' }} maxWidth={false}>
                <Title title={product.name} />
                <Box sx={{width: '40vw'}}>
                    <Image
                        layout='responsive'
                        src={product.img}
                        width={600}
                        height={330}
                        alt='photo'
                    />
                </Box>
            </Container>
        </Layout>
    )
}

export default Index