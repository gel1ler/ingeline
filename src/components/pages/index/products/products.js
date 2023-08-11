import React, { useState } from 'react'
import { Box } from '@mui/material'
import Slider from './slider'
import ProductTitle from './productTitle'
import Image from 'next/image'

const Products = ({ products }) => {
    const [current, setCurrent] = useState(0)
    return (
        <Box
            id='products_anchor'

        >
            {products.slice(0, 4).map((product, key) =>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        height: '100vh',
                        gap: 5,
                        p: 10,
                        position: 'relative',
                    }}
                >
                    <Image
                        src={'/3d.jpg'}
                        fill
                        style={{
                            zIndex: -1,
                            objectFit: 'cover',
                            maxWidth: '80vw'
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'linear-gradient(to bottom, white 40%, rgba(255,255,255,0.8) 70%, transparent)',
                            zIndex: -1
                        }}
                    />
                    <ProductTitle
                        current={current}
                        title={product.name}
                        link={'/products/' + product.id}
                        description={product.description}
                    />
                    <Slider setMainCurrent={setCurrent} num={key} additional={product.additionalImg} main={product.mainImg} />
                </Box >
            )}
        </Box >
    )
}

export default Products