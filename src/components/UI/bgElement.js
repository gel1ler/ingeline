import Image from 'next/image'
import React from 'react'

const BgElement = ({ src, rotation }) => {
  return (
    <Image
      src={src}
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