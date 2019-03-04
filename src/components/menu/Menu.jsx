import React, { Component, useState } from 'react';
import styled from 'styled-components';
import logoIcon from '../../assets/Arlogo.svg';
import { colors } from '../../media';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            isFixed: true,
            previousOffset: 0,
            hide: false,
            normal: window.innerWidth > 1200 ? true : false
        }
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                if (this.state.isFixed === true) {
                    this.setState({
                        isFixed: false
                    })
                }
                if (window.pageYOffset > this.state.previousOffset && !this.state.hide) {
                    this.hide();
                }
                if (window.pageYOffset < this.state.previousOffset && this.state.hide) {
                    this.show();
                }
            }
            if (window.pageYOffset === 0 && this.state.isFixed === false) {
                this.setState({
                    isFixed: true,
                    hide: false
                })
            }
            this.setState({
                previousOffset: window.pageYOffset
            })
        })
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1200 && !this.state.normal) {
                this.setState({
                    normal: true
                })
            }
            if (window.innerWidth <= 1200 && this.state.normal) {
                this.setState({
                    normal: false
                })
            }
        })
    }

    hide() {
        this.setState({
            hide: true
        })
    }

    show() {
        this.setState({
            hide: false
        })
    }

    render() {
        return (
            this.state.normal ? <NormalMenu fixed={this.state.isFixed} hide={this.state.hide} show={this.show} /> : <MobileMenu />
        );
    }
}


function NormalMenu({ fixed, hide, show }) {

    return (
        <Nav fixed={fixed} hide={hide}>
            <Logo fixed={fixed} onClick={show}></Logo>
            <MenuDiv fixed={fixed}>
                <A href="#about" fixed={fixed}>About</A>
                <A href="#feauters" fixed={fixed}>Feauters</A>
                <A href="#contacts" fixed={fixed}>Contacts</A>
            </MenuDiv>
        </Nav>
    );
}

function MobileMenu() {
    const [shown, setShown] = useState(false);

    function showMenu() {
        setShown(!shown);
    }

    return (
        <MobNav>
            <MobLogo />
            <MobBtn shown={shown} onClick={showMenu}>
                <span ></span>
            </MobBtn>
            <MobMenu shown={shown}>
                <Link shown={shown} delay={.3}><a href="#about" onClick={showMenu}>About</a></Link>
                <Link shown={shown} delay={.6}><a href="#feauters" onClick={showMenu}>Feauters</a></Link>
                <Link shown={shown} delay={.9}><a href="#contacts" onClick={showMenu}>Contacts</a></Link>
            </MobMenu>
        </MobNav>
    );
}

const Nav = styled.nav`
z-index: 1000;
position: fixed;
width: 100%;
height: 80px;
display: flex;
justify-content: flex-end;
align-items: center;
transition: .3s;
background:${({ fixed }) => (fixed ? 'transparent' : colors.menu)};
transform: ${({ hide }) => (hide ? 'translateY(-80px)' : 'translateY(0)')};
`
const Logo = styled.div`
position: absolute;
top: 10px;
left: 15%;
width: 100px;
height: 100px;
transition: .3s;
cursor: pointer;
background: url(${logoIcon});
transform: ${({ fixed }) => (fixed ? 'translateY(2vw)' : 'translateY(0)')};
`
const MenuDiv = styled.div`
position: absolute;
top: 0;
right: 10%;
width: 30%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
transition: .3s;
transform: ${({ fixed }) => (fixed ? 'translateY(2vw) translateX(-20%)' : 'translateY(0) translateX(0)')}
`
const A = styled.a`
text-decoration: none;
transition: .3s;
font-size: 1.2vw;
font-weight: 400;
color: ${({ fixed }) => (fixed ? colors.title : 'white')};
&:hover{
    color: black;
}
`
/*Mobile menu*/
const MobNav = styled.nav`
position: fixed;
z-index: 1000;
top: 0;
left: 0;
width: 100%;
height: 80px;
background: ${colors.menu};
`
const MobLogo = styled.div`
position: absolute;
width: 80px;
height: 80;
`
const MobBtn = styled.div`
position: absolute;
top: 0;
right: 0;
width: 80px;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
span {
        position: relative;
        width: 60%;
        background: white;
        transition: .3s;
        height: ${({ shown }) => (shown ? '0' : '4px')};

        &::before {
            position: absolute;
            content: '';
            left: 0;
            width: 100%;
            height: 4px;
            background: white;
            transition: .3s;
            top: ${({ shown }) => (shown ? '0' : '-10px')};
            transform: ${({ shown }) => (shown ? 'rotateZ(135deg)' : 'rotateZ(0)')};
        }
        &::after{
            position: absolute;
            content: '';
            width: 100%;
            height: 4px;
            background: white;
            top: ${({ shown }) => (shown ? '0' : '10px')};
            transition: .3s;
            transform: ${({ shown }) => (shown ? 'rotateZ(-135deg)' : 'rotateZ(0)')};
        }
    }
`

const MobMenu = styled.div`
position: absolute;
top: 100%;
left: 0;
width: 100%;
background: ${colors.menu};
overflow: hidden;
transition: .3s ease-in-out;    
display: flex;
display: grid;
grid-template-rows: auto;
transition-delay:  ${({ shown }) => (shown ? '0s' : '.4s')};
height: ${({ shown }) => (shown ? 'calc(100vh - 80px)' : '0')};
`
const Link = styled.div`
width: 80%;
height: 60px;
background: white;
display: flex;
justify-content: center;
align-items: center;
transition: .3s;
transition-delay:  ${({ shown, delay }) => (shown ? delay : '0')}s;
width: ${({ shown }) => (shown ? '80%' : '0%')};
align-self: center;
margin-left: 10%;
    a{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 30px;
        color: ${colors.menu};
        transition: ${({ shown }) => (shown ? '.3s' : '0')};
        transition-delay:  ${({ shown }) => (shown ? '1.2s' : '0')};
        opacity: ${({ shown }) => (shown ? '1' : '0')};
    }
`
