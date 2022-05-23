/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: haseslp (https://sketchfab.com/haseslp)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/book-of-anver-b0d5912ab0bb4e9e967ee412b6127e15
title: book of anver
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/anverbook.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 300, 200, 200]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.09}>
          <group position={[5.1, 0, -6.27]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['Box001_Material_#32_0'].geometry} material={materials.Material_32} />
            <mesh geometry={nodes['Box001_Material_#34_0'].geometry} material={materials.Material_34} />
            <mesh geometry={nodes['Box001_Material_#96_0'].geometry} material={materials.Material_96} />
            <mesh geometry={nodes['Box001_Material_#40_0'].geometry} material={materials.Material_40} />
            <mesh geometry={nodes['Box001_Material_#153_0'].geometry} material={materials.Material_153} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/anverbook.gltf')
