/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 stripes.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/3_stripes/stripes.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve001.geometry} material={materials.SVGMat} rotation={[Math.PI / 2, 0, 0]}  />
    </group>
  )
}


useGLTF.preload('/stripes.gltf')
