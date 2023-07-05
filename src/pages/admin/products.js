import React from 'react'
import Layout from '@/components/Layout/Layout'
import { Box, Container, Input } from '@mui/material'
import Title from '../../components/UI/Title'

const Item = i => {
    return(
        <Box>
            
        </Box>
    )
}

const Index = () => {
    return (
        <Layout>
            <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: ['98vw', '98vw', '98vw', '90vw']}} maxWidth={false}>
                <Title title='Админ панель - продукция' />
                <Box>
                    <Item />
                </Box>
            </Container>
        </Layout>
    )
}

export default Index