import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

const news = [
    { id: 0, title: '0', description: '0', neighbors: [1, 4] },
    { id: 1, title: '1', description: '1', neighbors: [0, 2] },
    { id: 2, title: '2', description: '2', neighbors: [1, 3] },
    { id: 3, title: '3', description: '3', neighbors: [2, 4] },
    { id: 4, title: '4', description: '4', neighbors: [3, 0] },
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
        }, 300000)
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
                let op, pos
                if (selected === post.id) {
                    op = 1
                    
                }
                // else if () {
                //     console.log(post.id, selected, post.neighbors.indexOf(selected))
                //     op = 0.85
                // }
                else {
                    op = 0.7
                }

                return <Box
                    key={post.id}
                    sx={{
                        transition: 'all 0.2s ease-out',
                        bgcolor: '#334465',
                        opacity: op,
                        position: 'absolute',
                        transform: 'translate(-180px)'
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
        </Box>
    )
}

export default Carousel