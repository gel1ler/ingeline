import React from 'react'
import Layout from '@/components/Layout/Layout'
import { Container } from '@mui/material'
import Title from '../../components/UI/Title'

const Index = () => {
    return (
        <Layout>
            <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw'}} maxWidth={false}>
                <Title title='Админ панель - новости' />
                
            </Container>
        </Layout>
    )
}

export default Index