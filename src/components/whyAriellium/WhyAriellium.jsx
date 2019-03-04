import React, { Component } from 'react';
import styled from 'styled-components';
import { device, colors } from '../../media';
import arrow from '../../assets/home/arrow.svg';
import directions from '../../assets/home/directions.svg';
import cup from '../../assets/home/cup.svg';


const cards = [
    {
        title: 'Here and now',
        desc: 'You want to power your business with Augmented Reality? With Ariellium, you get AR here and now - no waiting, no customized development – it’s all packed and ready to deploy. Subscribe and enjoy!',
        src: arrow
    },
    {
        title: 'No limits',
        desc: "Most AR products require modern premium smartphones to function properly. It's a market stopper! Ariellium works on all smartphones - AR layer is streamed directly to user device. It just works!",
        src: directions
    },
    {
        title: 'Easy to customize',
        desc: 'Typical AR apps require hundreds of MB of memory storage and kill phone battery battery 250% faster than YouTube videos. But not Ariellium. Our solution consumes as much power as a media player.',
        src: cup
    }
]

export default function WhyAriellium() {

    return (
        <Container>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} desc={card.desc} src={card.src} ></Card>
            ))}
        </Container>
    );
}

function Card({ title, desc, src }) {
    return (
        <CardContainer>
            <Icon src={src} >
                <div></div>
            </Icon>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
        </CardContainer>
    )
}


const Container = styled.section`
position: relative;
width: 80%;
margin: 0 auto;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
padding-top: 20px;
padding-bottom: 20px;

`
const CardContainer = styled.div`
border: 1px solid ${colors.section};
width: 350px;
height: 450px;
display: grid;
grid-template-rows: 40% 10% 50%;
margin-top: 30px;
margin-bottom: 30px;
@media ${device.desktop}{
}
@media ${device.laptopL}{
}
@media ${device.laptop}{
}
@media ${device.tablet}{
    width: 80%;
}
@media ${device.mobile}{
    width: 100%;
}

`
const Icon = styled.div`
width: 100px;
height: 100px;
border-radius: 50px;
background: rgba(0,0,0,.1);
align-self: center;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
div{
    width: 60px;
    height: 60px;
    background: url(${({ src }) => (src)}) no-repeat;
    background-size: 60px 60px;
}
`
const Title = styled.h4`
align-self: center;
margin: 0 auto;
color: ${colors.title};
@media ${device.desktop}{
    font-size: 20pt;
}
@media ${device.laptopL}{
    font-size: 20pt;
}
@media ${device.laptop}{
    font-size: 20pt;
}
@media ${device.tablet}{
    font-size: 20pt;
}
@media ${device.mobile}{
    font-size: 20pt;
}

`
const Desc = styled.div`
width: 80%;
align-self: center;
margin: 0 auto;
text-align: center;
font-size: 12pt;
font-weight: 300;
line-height: 30px;
@media ${device.desktop}{
    font-size: 12pt;
}
@media ${device.laptopL}{
    font-size: 12pt;
}
@media ${device.laptop}{
    font-size: 12pt;
}
@media ${device.tablet}{
    font-size: 12pt;
}
@media ${device.mobile}{
    font-size: 10pt;
}

`
