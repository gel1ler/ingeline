import { Box } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const BgElement = ({ src, ref, rotation }) => {
  

  return (
    <Image
      src={src}
      ref={ref}
      style={{
        position: 'absolute',
        width: '100vw',
        height: 'auto',
        zIndex: -1,
        transform: `translateY(-50%) rotate(${rotation}deg)`,
        opacity: .3,
        filter: 'blur(2px)',
        top: '50%',
        right: '-60%'
      }}
    />
  )
}

export default BgElement