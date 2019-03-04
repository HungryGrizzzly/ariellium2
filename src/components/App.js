import React, { Component, Fragment } from 'react';
import Menu from './menu/Menu';
import Main from './main/Main';
import WhyAriellium from './whyAriellium/WhyAriellium';
import Airport from './airport/Airport';
import ThirdBlock from './thirdBlock/ThirdBlock';
import FourthBlock from './fourthBlock/FourthBlock';
import FithBlock from './fithBlock/FithBlock';

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <Menu />
        <Main />
        <WhyAriellium />
        {/* <Airport /> */}
        <ThirdBlock />
        <FourthBlock />
        <FithBlock />
      </Fragment>
    );
  }
}

