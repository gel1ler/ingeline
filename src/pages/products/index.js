import React from 'react'
import Layout from '@/components/Layout/Layout'
import { Container } from '@mui/material'
import Title from '@/components/UI/Title'
import { useRouter } from 'next/router'
import { productsData } from '@/db/productsData'
import { getProducts } from  '../../../firebase/clientApp'

// export async function getServerSideProps({ params }) {
//     const product = await fetchOneProduct(params.id)
//     const products = await fetchProducts()
//     return {
//         props: { product, products }
//     }
// }

const Index = () => {
    const router = useRouter()
    const id = productsData[router.query.id]

    return (
        <Layout>
            <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw' }} maxWidth={false}>
                <Title title='Продукция' />
            </Container>
        </Layout>
    )
}

export default Index