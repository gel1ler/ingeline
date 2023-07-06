import React from 'react'
import { Box, Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import Subtitle from '@/components/UI/Subtitle'
import Image from 'next/image'
import { productsData } from '@/db/productsData'
import Link from 'next/link'

const Product = ({ img, name, description, shortDescription, id }) => {
    return (
        <Card
            sx={
                {
                    minHeight: '50vh',
                    maxWidth: 330,
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
        >
            <Image
                src={img}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: '50%' }}
                alt="product"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography textAlign='center' gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography textAlign='center' variant="body2" color="text.secondary">
                    {shortDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Box sx={{ mx: 'auto' }}>
                    <Link href={`/products/${id}`}>
                        <Button color="secondary" size="small">Подробнее</Button>
                    </Link>
                </Box>
            </CardActions>
        </Card>
    )
}

const Products = ({ products }) => {
    console.log(products)
    return (
        <Box
            sx={{
                py: 10,
                height: '100vh',
                position: 'relative',
                overflow: 'hidden'
            }}
            id='contacts_anchor'
            data-aos='fade-right'
        >
            <Subtitle>
                Продукция
            </Subtitle>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: ['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr'],
                    gridTemplateRows: '1fr 1fr',
                    mx: 'auto',
                    gap: 4,
                }}
            >
                {products.slice(0, 8).map((i, key) =>
                    <Product name={i.name} description={i.description} shortDescription={i.shortDescription} img={i.img} key={key} id={key} />
                )

                }
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    background: 'linear-gradient(0deg, white, 90%, transparent)',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    mx: 'auto',
                    width: '100%',
                    height: '20vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    pb: 4
                }}
            >
                <Box sx={{ width: 'max-content' }}>
                    <Typography variant='h6' className='cp'>
                        Посмотреть весь перечень продукции
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Products