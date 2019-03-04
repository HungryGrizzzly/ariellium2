import React, { Component } from 'react';
import styled from 'styled-components';
import { device, colors } from '../../media';
import Point from './Point';
import * as THREE from 'three';
import phoneIcon from '../../assets/home/Phone.svg';

const MAX_LEN = window.innerWidth / 10;
const POINTS_NUM = 300;
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            animIsRunnig: false
        }
        this.points = [];
        this.animate = this.animate.bind(this);
        this.threeAnimate = this.threeAnimate.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.renderScene = this.renderScene.bind(this);
        this.changeAnimStatus = this.changeAnimStatus.bind(this);
    }

    componentDidMount() {
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;
        this.ctx = this.canvas.getContext('2d');

        window.onresize = () => {
            this.canvas.width = WIDTH = window.innerWidth;
            this.canvas.height = HEIGHT = window.innerHeight;
        }

        for (let i = 0; i < POINTS_NUM; i++) {
            this.points.push(new Point(this.canvas.width, this.canvas.height));
        }
        this.animate();

        //THREE JS
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        //ADD SCENE
        this.scene = new THREE.Scene();
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        )
        this.camera.position.z = 10;
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setClearColor('#000000', 0)
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)
        //ADD CUBE
        const geometry = new THREE.SphereGeometry(3, 20, 20);
        const material = new THREE.MeshBasicMaterial({ color: colors.title, wireframe: true });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
        this.start();

        this.changeAnimStatus();

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > this.container.getBoundingClientRect().height && this.state.animIsRunnig) {
                this.stop();
                this.changeAnimStatus();
            }
            if (window.pageYOffset < this.container.getBoundingClientRect().height && !this.state.animIsRunnig) {
                this.start();
                this.changeAnimStatus();
            }
        })
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start = () => {
        this.frameId = requestAnimationFrame(this.threeAnimate)
    }

    changeAnimStatus() {
        this.setState({
            animIsRunnig: !this.state.animIsRunnig
        })
    }

    stop = () => {
        cancelAnimationFrame(this.frameId);
    }

    threeAnimate = () => {
        this.cube.rotation.y += 0.01
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.threeAnimate)
    }

    renderScene = () => {
        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera)
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.points.map(point => {
            point.update();
            point.draw(this.ctx);
        })

        for (let i = 0; i < POINTS_NUM - 1; i++) {
            for (let j = i + 1; j < POINTS_NUM; j++) {
                let dx = this.points[i].position.x - this.points[j].position.x;
                let dy = this.points[i].position.y - this.points[j].position.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_LEN) {
                    this.ctx.lineWidth = 1.5;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.points[i].position.x, this.points[i].position.y); // к одной точке
                    this.ctx.lineTo(this.points[j].position.x, this.points[j].position.y);
                    this.ctx.strokeStyle = `rgba(199, 214, 235,${(MAX_LEN - dist) / MAX_LEN})`;
                    this.ctx.stroke();
                }
            }
        }
    }

    render() {
        return (
            <Container ref={ref => (this.container = ref)}>
                <canvas ref={ref => this.canvas = ref} style={canvasStyle}></canvas>
                <Title>Augmented Reality Streaming platform</Title>
                <Desc>Every business has a right to be more than real</Desc>
                <Btn>GET A QUOTE</Btn>
                <Phone>
                <div
                    ref={(mount) => { this.mount = mount }}
                />
                </Phone>

                <Box />
            </Container>
        );
    }
}

const canvasStyle = {
    position: 'absolute',
    zIndex: 0,
    top: '0',
    left: '0'
}


const Container = styled.section`
position: relative;
z-index: 10;
display: grid;
background: linear-gradient(${colors.section}, white);
overflow: hidden;
width: 100%;
height: 100vh;
`

const Title = styled.h1`
position: absolute;
z-index: 10;
color: ${colors.title};
top: 25%;
width: 50%;
font-size: 4vw;
left: 15%;
@media ${device.tablet}{
    top: 30%;
    left: 10%;
    text-align: left;
    font-size: 30pt;
}
@media ${device.mobile}{
    top: 35%;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 8vw;
}
`


const Desc = styled.div`
position: absolute;
z-index: 10;
color: ${colors.desc};

@media ${device.desktop}{
    width: 50%;
    top: 55%;
    left: 15%;
    font-size: 14pt;
    font-weight: 300;
}
@media ${device.laptopL}{
    width: 50%;
    top: 55%;
    left: 15%;
    font-size: 14pt;
    font-weight: 300;
}
@media ${device.laptop}{
    width: 50%;
    top: 55%;
    left: 15%;
    font-size: 14pt;
    font-weight: 300;
}
@media ${device.tablet}{
    width: 50%;
    top: 50%;
    left: 10%;
    font-size: 14pt;
    font-weight: 300;
    text-align: left;
}
@media ${device.mobile}{
    width: 80%;
    top: 51%;
    left: 10%;
    font-size: 12pt;
    font-weight: 300;
    text-align: center;
}
`

const Btn = styled.button`
position: absolute;
z-index: 10;
border: 2px solid ${colors.second};
transition: .3s;
cursor: pointer;
background: transparent;
font-weight: 600;
letter-spacing: 1px;
outline: none;
color: ${colors.desc};

@media ${device.desktop}{
    width: 240px;
    height: 60px;
    top: 68%;
    left: 15%;
    font-size: 12pt;
}
@media ${device.laptopL}{
    width: 240px;
    height: 60px;
    top: 68%;
    left: 15%;
    font-size: 12pt;
}
@media ${device.laptop}{
    width: 20vw;
    height: 4vw;
    top: 65%;
    left: 15%;
    font-size: 12pt;
}
@media ${device.tablet}{
    width: 30%;
    height: 8vw;
    top: 65%;
    left: 35%;
    font-size: 18pt;
}
@media ${device.tablet}{
    width: 30%;
    height: 8vw;
    top: 65%;
    left: 10%;
    font-size: 18pt;
}
@media ${device.mobile}{
    width: 70%;
    height: 14vw;
    top: 65%;
    left: 15%;
    font-size: 4vw;
}

&:hover{
        background: ${colors.second};
        color: white;
    }
`
const Box = styled.div`
    position: absolute;
    width: 60vw;
    height: 60vw;
    background: linear-gradient( ${colors.menu}, ${colors.second});
    border-radius: 5vw;
    top: 20%;
    right: 0;
    transform: rotateZ(45deg) translateX(30%) translateY(-50%);
    @media ${device.tablet}{
        top: 30%;
    }
    @media ${device.mobile}{
        top: 30%;
        width: 150vw;
        height: 150vw;
        left: 0;
    }

`
const Phone = styled.div`
position: absolute;
z-index: 50;
top: 15%;
right: 10%;
width: 300px;
height: 600px;
background: url(${phoneIcon}) no-repeat;
div{
    position: absolute;
    z-index: 100;
    right: 50px;
    top: 25%;
    width: 250px;
    height: 250px;
}

@media ${device.tablet}{
    top: 30%;
    width: 200px;
    div{
        top: 12%;
        right: 20px;
        width: 200px;
        height: 200px;
    }
}
@media ${device.mobile}{
    width: 0;
    overflow: hidden;
}
`