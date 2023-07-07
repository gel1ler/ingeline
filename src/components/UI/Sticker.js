import React from "react"
import { Box } from "@mui/material"
import Image from 'next/image'

const Sticker = ({ small }) => (
    <Box sx={{ position: 'absolute', top: small ? -10 : -20, left: 20, width: small ? 30 : 50, height: small ? 30 : 50 }}>
        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
                src='/bookmark.svg'
                fill
            />
        </Box>
    </Box>
)

export default Sticker