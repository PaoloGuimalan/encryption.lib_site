import React from 'react'
import Particles from 'react-particles-js';
import Config from './particle_config';

function Particle() {
    return (
        <div style={{height: "100%", width: "100%"}}>
            <Particles params={Config}></Particles>
        </div>
    )
}

export default Particle;
