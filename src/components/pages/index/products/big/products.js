import React, { useState } from 'react'
import { Box } from '@mui/material'
import Slider from './slider'
import ProductTitle from './productTitle'
import Image from 'next/image'
import pipe from 'public/products/3d/pipe.jpg'
import list from 'public/products/3d/list.jpg'

const d3 = [pipe, list, list, list]

const Products = ({ products }) => {
    const [current, setCurrent] = useState(0)
    return (
        <Box
            id='products_anchor'

        >
            {products.slice(0, 4).map((product, key) => {
                let num = key
                return (
                    <Box
                        key={key}
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
                            src={d3[num]}
                            fill
                            style={{
                                zIndex: -1,
                                objectFit: 'cover',
                                maxWidth: '80vw',
                                position: 'absolute',
                                left: num % 2 == 1 ? '20vw' : 0,
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
                        {key % 2 == 0 ?
                            <ProductTitle
                                title={product.name}
                                link={'/products/' + product.id}
                                description={product.description}
                                num={key}
                            />
                            :
                            null
                        }
                        <Slider
                            setMainCurrent={setCurrent}
                            num={key}
                            additional={product.additionalImg}
                            main={product.mainImg}
                        />
                        {key % 2 == 1 ?
                            <ProductTitle
                                current={current}
                                title={product.name}
                                link={'/products/' + product.id}
                                description={product.description}
                                num={key}
                            />
                            :
                            null
                        }
                    </Box >
                )
            })}
        </Box >
    )
}

export default Products