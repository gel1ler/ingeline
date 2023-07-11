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
                {products.slice(1, 5).map((product, key) => (
                    <SmallCard product={product} key={key} />
                ))}
            </Box>
            <More />
        </Box >
    )
}

export default Products