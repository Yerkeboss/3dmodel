/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/land.glb')
 
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.016']} position={[1, -30, 1]} scale = {[10,10,10]} />
    </group>

    
    // rotation={[0, -0.32, 0]
  )
}

useGLTF.preload('/land.glb')