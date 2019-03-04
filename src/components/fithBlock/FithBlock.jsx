import React, { Component } from 'react';
import styled from 'styled-components';
import { colors, device } from '../../media';

const cards = [
    {
        title: '4K Cinema grade AR',
        desc: 'Typical AR has very low resolution as graphics have to be 3d-rendered on the device. ARiellium builds graphics in the cloud. So say hello to 4k AR!',
        src: ''
    },
    {
        title: 'Connecting dots',
        desc: 'All AR events and activities are analyzed in the cloud and are subject to Artificial Intelligence training. Thus your product gets better every day.',
        src: ''
    },
    {
        title: 'Pixel Perfect',
        desc: "Human eye won't be able to tell the difference between what's real and what's actually augmented. AR quality is unprecedented.",
        src: ''
    },
    {
        title: 'Creative Magnet',
        desc: 'Creativity is not scalable. We do not to simply provide you with the best AR-platform, we help creating the best customer journey possible.',
        src: ''
    }
]
const specs = [
    'Absolute compatibility: our platform is device-agnostic.',
    'Short time to market: you can start your AR journey right now.',
    'Cost efficiency: you get "out of the box" solution NOW.',
    'Easy to use: typical time from a quote to a pilot is 7 days.',
    'Flexibility: you are free to use ARiellium Cloud Factory.',
    'Battery friendly: ARiellium is the most power-savvy AR!'
]

export default function FithBlock() {

    return (
        <Container id='feauter' >
            <Wrapper>
                <Cards>
                    {cards.map((card, index) => (
                        <Card key={index} title={card.title} desc={card.desc} src={card.src} />
                    ))}
                </Cards>
                <div className="text">
                    <div className="title">
                        Unique Features <br />
                        That Only ARielliumhas to offer:
                    </div>
                    <div className="desc">
                        <p>At this moment we are the only cloud streaming AR platform in the world, with numerous patents protecting our IP: </p>
                    </div>
                    <div className="specs">
                        {specs.map((spec, index) => (
                            <Spec text={spec} />
                        ))}
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
}

function Card({ title, desc, src }) {
    return (
        <CardWrapper>
            <div className="image"></div>
            <CardTitle>{title}</CardTitle>
            <CardDesc>{desc}</CardDesc>
        </CardWrapper>
    )
}

function Spec({ text }) {
    return (
        <div className="spec">
            <div className="icon"></div>
            <div className="text">{text}</div>
        </div>
    )
}

const Container = styled.section`
width: 100%;
background: ${colors.section};
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`
width: 80%;
display: grid;
grid-template-columns: 48% 48%;
grid-column-gap: 2%;
@media only screen and ${device.desktop}{
        grid-template-columns: 49% 49%;
    }
    @media only screen and ${device.laptopL}{
        grid-template-columns: 49% 49%;
    }
    @media only screen and ${device.laptop}{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    @media only screen and ${device.tablet}{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    @media only screen and ${device.mobile}{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
`
const Cards = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
const CardWrapper = styled.div`
width: 250px;
height: 250px;
margin-top: 40px;
display: grid;
grid-template-rows: 70px 50px 130px;

transition: .3s;
&:hover{
    background: linear-gradient(-45deg, ${colors.menu}, ${colors.second});
    color: white;
    h3{
        color: white;
    }
}
`
const CardTitle = styled.h3`
align-self: center;
margin: 0 auto;
color: ${colors.title};
transition: .1s;

`
const CardDesc = styled.div`
width: 80%;
align-self: flex-start;
margin: 0 auto;
font-size: 11pt;
font-weight: 400;
text-align: center;
`