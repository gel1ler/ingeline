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
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
            }}
        >
            <Box
                sx={{ width: '25vw', maxWidth: footer ? 100 : 300 }}>
                <svg id="_Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 608.31 443.66">
                    <g fill='#f7931e'>
                        <path d="m0,163.82C100.44,111.54,200.88,59.25,301.32,6.96c8.26-3.07,36.12-12.34,68.19-2.68,28,8.43,43.2,26.48,48.47,33.45L120.35,192.66c-6.76,3.26-36.77,16.83-72.38,5.45-27.19-8.69-42.57-27.11-47.97-34.29" />
                        <path d="m95.16,284.36c100.44-52.29,200.88-104.57,301.32-156.86,8.26-3.07,36.12-12.34,68.19-2.68,28,8.43,43.2,26.48,48.47,33.45l-297.63,154.94c-6.76,3.26-36.77,16.83-72.38,5.45-27.19-8.69-42.57-27.11-47.97-34.29" />
                        <path d="m190.32,404.9c100.44-52.29,200.88-104.57,301.32-156.86,8.26-3.07,36.12-12.34,68.19-2.68,28,8.43,43.2,26.48,48.47,33.45l-297.63,154.94c-6.76,3.26-36.77,16.83-72.38,5.45-27.19-8.69-42.57-27.11-47.97-34.29" />
                    </g>
                </svg>
            </Box>
            <Typography variant={footer ? "h4" : 'h2'}>
                Инжелайн
            </Typography>
        </Box>
    )

    // return (
    //     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 0 }}>
    //         <Canvas
    //             camera={{ position: [0, 1, 0], fov: 90, near: 0.01 }}
    //             style={{ maxWidth: '400px', maxHeight: footer ? '100px' : null }}
    //         >
    //             <Light brightness={6} color={"white"} />
    //             <ambientLight intensity={0.4} />
    //             <Model footer={footer} />
    //         </Canvas>
    //         <Typography variant='h2'>
    //             Инжелайн
    //         </Typography>
    //     </Box>
    // )
}

export default Logo