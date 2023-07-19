import React from 'react'
import { Box } from '@mui/material'
import Subtitle from '@/components/UI/Subtitle'
import SmallCard from './smallCard'
import More from './more'
import BigCard from './bigCard'

const Products = ({ products }) => {
    return (
        <Box
            sx={{
                py: 10,
                position: 'relative'
            }}
            id='products_anchor'
        >
            <Subtitle>
                Продукция
            </Subtitle>
            <Box sx={{ display: 'grid', gridTemplate: '1fr 1fr / 3fr 1fr 1fr', gap: 2, height: '70vh' }}>
                <BigCard product={products[0]} />
                <SmallCard product={products[1]} />
                <SmallCard product={products[2]} />
                <Box sx={{ gridColumn: '3/4', gridRow: '1/3', display: 'grid', position: 'relative' }} data-aos='fade-left'>
                    <SmallCard product={products[3]} />
                    <SmallCard product={products[4]} />
                    <More />
                </Box>
            </Box>
        </Box >
    )
}

export default Products