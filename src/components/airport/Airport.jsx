import React, { Component } from 'react';
import styled from 'styled-components';
import airport1 from '../../assets/home/airport/airport1.png';
import airport2 from '../../assets/home/airport/airport2.png';
import { colors } from '../../media';

export default class Airport extends Component {

    constructor() {
        super();
        this.state = {
            currentImg: 0
        }
        this.images = [airport1, airport2];
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.currentImg < this.images.length - 1) {
                this.setState({
                    currentImg: this.state.currentImg + 1
                })
            } else {
                this.setState({
                    currentImg: 0
                })
            }
        }, 500)

    }
    render() {
        return (
            <Container>
                <Img src={this.images[this.state.currentImg]} />
                <TextWrapper>
                    <Title>
                        Here and now
                    </Title>
                    <Desc>
                        You want to power your business with Augmented Reality? With Ariellium, you get AR here and now - no waiting, no customized development – it’s all packed and ready to deploy. Subscribe and enjoy!
                    </Desc>
                </TextWrapper>
            </Container>
        );
    }
}

const Container = styled.div`
position: relative;
width: 80%;
height: 100vh;
margin: 0 auto;
display: grid;
grid-template-columns: 50% 50%;
`
const Img = styled.div`
width: 600px;
height: 400px;
background: url(${({ src }) => src});
background-size: 100% 100%;
align-self: center;
margin: 0 auto;
`
const TextWrapper = styled.div`
width: 400px;
align-self: center;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
const Title = styled.h1`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color: ${colors.title};
font-size: 28pt;
`
const Desc = styled.div`
width: 100%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
font-size: 20pt;
`