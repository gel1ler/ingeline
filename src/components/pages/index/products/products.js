import React, { useState } from 'react'
import { Box } from '@mui/material'
import Subtitle from '../../../UI/Subtitle'
import Page from './page'
import Slider from './slider'
import TrackVisibility from 'react-on-screen'
import ProductTitle from './productTitle'

const Products = ({ products }) => {
    const [current, setCurrent] = useState(0)
    return (
        <Box
            sx={{
                bgcolor: 'white',
                display: ['block', 'block', 'grid'],
                gridTemplateColumns: '1fr 1fr',
                gap: 3
            }}
        >
            <Box
                id='about_anchor'
                sx={{
                    height: '100vh',
                    position: ['static', 'static', 'sticky'],
                    top: '0',
                    transition: 'all 0.2s ease-out',
                    bgcolor: 'white',
                    pt: [5, 5, 10],
                }}
            >
                <Subtitle>
                    Продукция
                </Subtitle>
                <Box sx={{ mx: 'auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                        {products.slice(0, 4).map((i, key) =>
                            <ProductTitle
                                key={key}
                                num={key}
                                current={current}
                                title={i.name}
                                link={'/products/' + i.id}
                                description={i.shortDescription}
                                data-aos='fade-left'
                            />
                        )}
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {products.slice(0, 4).map((product, key) => {
                    return (
                        <Page title={product.name} id={'product' + product.id} key={key}>
                            <TrackVisibility>
                                <Slider setMainCurrent={setCurrent} num={key} additional={product.additionalImg} main={product.mainImg} />
                            </TrackVisibility>
                        </Page>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Products