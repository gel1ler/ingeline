import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import img from '../../../public/2.jpg'

const news = [
        { id: 0, title: '0', img, description: '0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum delectus, inventore? Ea earum delectus, inventore?' },
        { id: 1, title: '1', img, description: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum delectus, inventore? Ea earum delectus, inventore?' },
        { id: 2, title: '2', img, description: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum delectus, inventore? Ea earum delectus, inventore?' },
        { id: 3, title: '3', img, description: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum delectus, inventore? Ea earum delectus, inventore?' },
        { id: 4, title: '4', img, description: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum delectus, inventore? Ea earum delectus, inventore?' },
]

const Carousel = () => {
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if (selected < 4) {
                setSelected(selected + 1)
            }
            else {
                setSelected(0)
            }
        }, 5000)
    })

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                position: 'relative',
            }}
        >
            {news.map(post => {
                let l = '20%', tr = '-50%', zi = 0, sc = 0, op = 0, a = 0.7

                if (selected === post.id) {
                    op = 1
                    l = '50%'
                    tr = '-50%',
                        zi = 10
                    sc = 1
                }
                else if (selected - post.id === 1 || selected === 0 && post.id === 4) {
                    op = a
                    l = '20%'
                    tr = '-50%',
                        zi = 9
                    sc = 0.9
                }

                else if (selected - post.id === -1 || selected === 4 && post.id === 0) {
                    op = a
                    l = '80%'
                    tr = '-50%',
                        zi = 9
                    sc = 0.9
                }

                return <Box
                    key={post.id}
                    sx={{
                        transition: 'all 0.7s ease-in-out',
                        borderRadius: 2,
                        bgcolor: '#334465',
                        opacity: op,
                        position: 'absolute',
                        left: l,
                        p: 2,
                        transform: `translate(${tr}, 0) scale(${sc})`,
                        width: ['200px', '200px', '200px', '250px'],
                        zIndex: zi,
                        textAlign: 'center',
                        cursor: 'pointer',
                        height: ['200px', '200px','200px',  '230px'],
                        overflow: 'hidden',
                        '&:hover': {
                            opacity: op + 0.05,
                            transform: `translate(${tr}, -5px) scale(${sc})`
                        }
                    }}
                >
                    <Typography variant="h4">
                        {post.title}
                    </Typography>
                    <Typography>
                        {post.description}
                    </Typography>
                </Box>
            })}
        </Box >
    )
}

export default Carousel