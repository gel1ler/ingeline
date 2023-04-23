import React from 'react'
import { Box, Typography } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { Model } from '../Models/Scene'
import { OrbitControls } from '@react-three/drei'

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
        />
    )
}

const Logo = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 1, 0], fov: 90, near: 0.01 }} style={{ maxWidth: '400px' }}>
                <Light brightness={6} color={"white"} />
                <ambientLight intensity={0.4} />
                <Model />
            </Canvas>
            <Typography variant='h2'>
                Инжелайн
            </Typography>
        </Box>
    )
}

export default Logo