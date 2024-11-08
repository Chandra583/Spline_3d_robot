import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Spline from "@splinetool/react-spline";
import "./App.css";

function Box(props) {
  return (
    <mesh {...props} receiveShadow castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      {/* Main section with split layout */}
      <section className="split-section">
        {/* Added heading */}
        <div className="left-div">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>asdfafadsfdasf asdasd</p>
        </div>

        <div className="content-right">
          <div className="spline-container">
            {/* <Spline scene="https://prod.spline.design/dB8UdZs-XfBTebFa/scene.splinecode" /> */}
            {/* <Spline scene="https://prod.spline.design/g2HUve91PgXBed5F/scene.splinecode" /> */}

            <Spline scene="https://prod.spline.design/dB8UdZs-XfBTebFa/scene.splinecode" />
            {/* <Spline scene="https://prod.spline.design/g2HUve91PgXBed5F/scene.splinecode" /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
