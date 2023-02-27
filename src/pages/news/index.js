import React from 'react'
import Layout from '@/components/Layout/Layout'
import { Container } from '@mui/material'
import Title from '../../components/UI/Title'

const Index = () => {
    return (
        <Layout>
            <Container>
                <Title title='Новости' />
            </Container>
        </Layout>
    )
}

export default Index