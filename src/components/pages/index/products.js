import React from 'react'
import { Box, Typography, Button, Card, CardActions, CardContent, CardMedia, ImageList, ImageListItem } from '@mui/material'
import Subtitle from '@/components/UI/Subtitle'
import Image from 'next/image'
import { productsData } from '@/db/productsData'
import Link from 'next/link'
import { AddBoxOutlined } from '@mui/icons-material'
import Sticker from '@/components/UI/sticker'

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
            }}
            id='contacts_anchor'
            data-aos='fade-right'
        >
            <Subtitle>
                Продукция
            </Subtitle>
            <Box sx={{ display: 'grid', gridTemplate: '1fr 1fr / 3fr 1fr 1fr', gap: 2, height: '70vh' }}>
                <Box
                    sx={{
                        position: 'relative',
                        gridRowStart: 1,
                        gridRowEnd: 3,
                        p: 3,
                        display: 'flex',
                        alignItems: 'flex-end'
                    }}
                >


                    <Image
                        src={products[0].img}
                        fill
                        objectFit='cover'
                        style={{ zIndex: -1 }}
                    />
                    <Box
                        className='shadow'
                        sx={{
                            width: '50%',
                            bgcolor: 'white',
                            position: 'relative',
                            px: 5,
                            py: 1,
                        }}
                        className='column-centered'
                    >
                        <Sticker />
                        <Typography variant='h4' >
                            Трубы
                        </Typography>
                        <Typography variant='h6' textAlign='center' sx={{ mt: 2 }}>
                            asjasdk;ljas dlkjas;ldkjfa; slkdjf;laskdj fl;kas j dl;fkajsd;lfkja sldkjf;la skjdf;l kasjdlfj asl;dkfjals;  jfl;asjdl;fkajsd l;fkj; sladkjf;las kdfg kjhgjkg
                        </Typography>
                        <Box>
                            <Button color='secondary' variant='outlined' sx={{ mx: 'auto', my: 2, width: 'max-content' }}>
                                Подробнее
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'flex-end',

                    }}
                    className='shadow'
                >
                    <Image
                        src={products[0].img}
                        fill
                        objectFit='cover'
                    />
                    <Box
                        sx={{
                            width: '100%',
                            bgcolor: 'white',
                            position: 'relative',
                        }}
                        className='column-centered'
                    >
                        <Sticker small />
                        <Typography variant='h4' >
                            Трубы
                        </Typography>
                        <Box>
                            <Button color='secondary' variant='outlined' sx={{ mx: 'auto', my: 2, width: 'max-content' }}>
                                Подробнее
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ position: 'relative' }}>
                    <Image
                        src={products[0].img}
                        fill
                        objectFit='cover'
                    />
                </Box>
                <Box sx={{ position: 'relative' }}>
                    <Image
                        src={products[0].img}
                        fill
                        objectFit='cover'
                    />
                </Box>
                <Box sx={{ position: 'relative' }}>
                    <Image
                        src={products[0].img}
                        fill
                        objectFit='cover'
                    />
                </Box>
            </Box>
            <Box sx={{ width: 'max-content', mx: 'auto', mt: 4 }}>
                <Typography variant='h6' className='cp'>
                    Посмотреть весь перечень продукции
                </Typography>
            </Box>
        </Box>
    )
}

export default Products