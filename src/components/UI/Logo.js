import React from 'react'
import { Box, Typography } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import { Model } from '../Models/Scene'

const Light = ({ brightness, color }) => {
    return (
        <rectAreaLight
            width={5}
            height={5}
            color={color}
            intensity={brightness}
            position={[4, 4, 4]}
            lookAt={[0, 0, 0]}
            penumbra={1}
            castShadow
        />
    )
}

const Logo = ({ footer }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 0 }}>
            <Canvas
                camera={{ position: [0, 1, 0], fov: 90, near: 0.01 }}
                style={{ maxWidth: '400px', maxHeight: footer ? '100px' : null }}
            >
                <Light brightness={6} color={"white"} />
                <ambientLight intensity={0.4} />
                <Model footer={footer} />
            </Canvas>
            <Typography variant='h2'>
                Инжелайн
            </Typography>
        </Box>
    )
}

export default Logo