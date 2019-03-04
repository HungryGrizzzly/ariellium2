import React from 'react';
import styled from 'styled-components';
import phoneIcon from '../../assets/home/phone2.png';
import checkedIcon from '../../assets/home/checked.svg';
import { colors, device } from '../../media';

const specs = [
    'New acquisition channels based own WOW-mechanics',
    'New customer retention mechanics',
    'New revenue streams based on augmented products'
]

export default function ThirdBlock() {

    function scrollTo(id) {
        console.log(id);
        window.scroll({
            top: document.getElementById(id).offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <Container id='about'>
            <Wrapper>
                <Image></Image>
                <Text>
                    <Title>Why Ariellium?</Title>
                    <Desc>
                        <p>Human brain is an amazing data processor. Yet, the Universe around us contains petabytes of data that our brain cannot work with at the moment. It requires help.</p>
                        <p>By adding an easy and fun to read visual data layer over the real word, we empower you to bring your customers additional value here and now: </p>
                    </Desc>
                    <Specs>
                        {specs.map((spec, index) => (
                            <Spec key={index} text={spec} />
                        ))}
                    </Specs>
                    <Btn href='#contacts'>Know more</Btn>
                </Text>
            </Wrapper>
        </Container>
    );
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
    padding-top: 80px;
    padding-bottom: 80px;

`
const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-column-gap: 2%;
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
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
`
const Image = styled.div`
    align-self: center;
    margin: 0 auto;
    background: url(${phoneIcon});
    background-size: 100% 100%;

    @media screen and ${device.desktop} {
        
    }
    @media screen and ${device.laptopL} {
        width: 550px;
        height: 600px;
    }
    @media screen and ${device.laptop} {
        width: 550px;
        height: 600px;
    }
    @media screen and ${device.tablet} {
        width: 500px;
        height: 500px;
    }
    @media screen and ${device.mobile} {
        width: 200px;
        height: 300px;
    }
`
const Text = styled.div`
    width: 100%;
    margin: 0 auto;
    align-self: center;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
`
const Title = styled.h2`
    width: 100%;
    text-align: center;
    color: ${colors.title};
    font-size: 20pt;
`
const Desc = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    p{
        width: 100%;
        font-weight: 300;
        color: ${colors.desc};
        font-size: 14pt;
    }
`
const Specs = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .spec{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10px;
        .icon{
            width: 20px;
            height: 20px;
            background: url(${checkedIcon}) no-repeat;
            background-size: 100% 100%;
        }
        .text{
            margin-left: 20px;
            font-size: 14pt;
            color: ${colors.title};
            font-weight: 300;
        }
    }
`
const Btn = styled.a`
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
    text-decoration: none;
    transition: .3s;
    &:hover{
        background: ${colors.second};
        color: white;
    }
`
