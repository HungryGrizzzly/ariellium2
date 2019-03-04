import React, { Component } from 'react';
import styled from 'styled-components';
import productsIcon from '../../assets/home/products.png';
import dataIcon from '../../assets/home/data.png';
import oneveryIcon from '../../assets/home/onevery.png';
import { device, colors } from '../../media';

const cards = [
    {
        title: 'PRODUCTS 2.0',
        desc: 'The very same product or service can get better with the help of Augmented Reality. Better. More informative. More fun.',
        src: productsIcon
    },
    {
        title: 'Data Analysis',
        desc: "ARiellium provides you with key business insights that influence your business. You'll be able to adjust your product on the go.",
        src: dataIcon
    },
    {
        title: 'On every device!',
        desc: 'ARiellium has no restrictions in comparison to traditional solutions. Our cloud streaming AR works on every device, every browser, every computer.',
        src: oneveryIcon
    }
]

export default function FourthBlock() {

    return (
        <Container>
            <Desc>
                <Title>Why Ariellium is <br></br>
                    Best for your Business</Title>
                <Text>
                    <p>Mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system, and expound. mistaken you a complete account.</p>
                    <p>Mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system.</p>
                </Text>
                <Btn>READ MORE</Btn>
            </Desc>
            <Cards>
                {cards.map(card => (
                    <Card title={card.title} desc={card.desc} src={card.src} />
                ))}
            </Cards>
        </Container>
    );
}

function Card({ title, desc, src }) {
    return (
        <CardWrapper>
            <Image src={src}></Image>
            <CardTitle>{title}</CardTitle>
            <CardDesc>{desc}</CardDesc>
        </CardWrapper>
    )
}

const Container = styled.section`
width: 80%;
margin: 0 auto;
display: grid;
grid-column-gap: 2%;
padding-top: 60px;
padding-bottom: 60px;
@media only screen and ${device.desktop}{
        grid-template-columns: 49% 49%;
    }
    @media only screen and ${device.laptopL}{
        grid-template-columns: 49% 49%;
    }
    @media only screen and ${device.laptop}{
        grid-template-columns: 49% 49%;
    }
    @media only screen and ${device.tablet}{
        grid-template-columns: 49% 49%;
    }
@media screen and ${device.mobile}{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;    
    }
`
const Desc = styled.article`
width: 100%;
align-self: center;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
const Title = styled.h2`
color: ${colors.title};
text-align: center;
`
const Text = styled.div`
width: 90%;
color: ${colors.desc};
    p{
        margin-top: 40px;
        text-align: center;
    }
`
const Btn = styled.div`
width: 200px;
height: 60px;
border: 2px solid ${colors.second};
font-size: 14pt;
font-weight: 500;
margin-top: 40px;
display: flex;
justify-content: center;
align-items: center;
color: ${colors.desc};
cursor: pointer;
transition: .3s;
&:hover{
    background: ${colors.second};
    color: white;
}
`
const Cards = styled.article`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
@media screen and ${device.mobile}{
    margin-top: 40px;
}
`
const CardWrapper = styled.div`
height: 25vh;
display: grid;
grid-template-columns: 25% 75%;
grid-template-rows: 35% 65%;
transition: .3s;
margin-top: 20px;
margin-bottom: 20px;
&:hover {
    box-shadow: 0 10px 20px 2px rgba(0, 0, 0, .1);
}
@media screen and ${device.desktop} {
    width: 80%;
}
@media screen and ${device.laptopL} {
    width: 80%;
}
@media screen and ${device.laptop} {
    width: 80%;
}
@media screen and ${device.tablet} {
    width: 100%;
}
@media screen and ${device.mobile} {
    height: 300px;
    width: 100%;
}
`
const Image = styled.div`
grid-row-start: 1;
grid-row-end: 3;
width: 70px;
height: 70px;
align-self: center;
margin: 0 auto;
background: url(${({ src }) => (src)}) no-repeat;
background-size: 70px 70px;
`
const CardTitle = styled.h4`
align-self: center;
margin: 0 auto;
grid-column-start: 2;
grid-row-start: 1;
color: ${colors.title};
font-weight: 400;
font-size: 20pt;
`
const CardDesc = styled.div`
width: 80%;
text-align: left;
margin: 0 auto;
font-size: 10pt;
color: ${colors.desc};
font-weight: 500;
line-height: 20pt;
`
