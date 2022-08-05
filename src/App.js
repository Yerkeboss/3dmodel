import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Toucan from "./Toucan.js";
import Squirrel from "./Squirrel.js";
import Fox from "./Fox.js";
import Land from "./Land";
import { OrbitControls } from "@react-three/drei/OrbitControls";
import "./styles.css";
import Tree1 from "./Tree1.js";
import Tree2 from "./Tree2.js";
import Tree3 from "./Tree3.js";
import * as THREE from 'three';



export default function App() {
  return (
    <Canvas camera position = {{position: [-100,-100,-100], zoom:1}}>
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <Toucan />
        <Squirrel/>
        <Fox/>
        <Land/>
        <Tree1/>
        <Tree2/>
        <Tree3/>
      </Suspense>
    </Canvas>
  );
}
// console.log(Land);
