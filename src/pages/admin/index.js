import React from 'react'
import Layout from '@/components/Layout/Layout'
import { Container, Typography, Box } from '@mui/material'
import Title from '../../components/UI/Title'
import Link from 'next/link'

const Index = () => {
  return (
    <Layout>
      <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw', mt: '70px' }} maxWidth={false}>
        <Title title='Админ панель' />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Link href='/admin/products'>
            <Typography variant='h5' sx={{ textDecoration: 'underline' }}>
              Продукция
            </Typography>
          </Link>
          <Link href='/admin/news'>
            <Typography variant='h5' sx={{ textDecoration: 'underline' }}>
              Новости
            </Typography>
          </Link>
        </Box>
      </Container>
    </Layout>
  )
}

export default Index