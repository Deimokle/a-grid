import * as React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import Carousel from '../components/carousel';
import Widget from '../components/widget';

import "../styles.css"

const mainStyle = {
  margin: 0,
}

const AgridPage = () => {

  return (
    <main style={mainStyle}>
      <NavBar />
      <Carousel />
      <Widget />
    </main>
  )
}

export default AgridPage;
