import './App.css';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import React, {Suspense} from "react";
import Anverbook from "./component/Anverbook"
import Page1 from './image/list/page-1';
import Page2 from './image/list/page-2';
import Page3 from './image/list/page-3';
import Page4 from './image/list/page-4';
import Page5 from './image/list/page-5';
import Page6 from './image/list/page-6';
import Page7 from './image/list/page-7';


function App(){
    return (
        <div className="App">
            <div className="app__page-title">
                <p>БЕСТИАРИЙ</p>
            </div>
            <div className="app__page-info">
                <p>Наша работа является уникальным проектом.Все монстры вымышлены и индивидуальны.</p>
            </div>
            <div className="app__page-3d">
                <div className="container">
                    <p>Здесь вы можете лицезреть бестиарий в ЗD и 2D визуализации.</p>
                </div>
            </div>
            <div className="app__page-book3d">
                <Canvas className="canvas">
                    <OrbitControls enableZoom={false}/>
                    <ambientLight intensity={0.5}/>
                    <directionalLight position={[-2, 5, 2]} intensity={1}/>
                    <Suspense fallback="null">
                        <Anverbook/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="app__page-2d">
                <div className="container">
                    <div className="list">
                        <img src={Page1} alt=""/>
                    </div>
                    <div className="list">
                        <img src={Page2} alt=""/>
                    </div>
                    <div className="list">
                        <img src={Page3} alt=""/>
                    </div>
                    <div className="list">
                        <img src={Page4} alt=""/>
                    </div>
                    <div className="list">
                        <img src={Page5} alt=""/>
                    </div>
                    <div className="list">
                        <img src={Page6} alt=""/>
                    </div>
                    <div className="list">
                        <img src={Page7} alt=""/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
