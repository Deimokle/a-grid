import * as React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import Carousel from '../components/carousel';
import Widget from '../components/widget';

import Footer from '../components/footer';
import Contact from '../components/contact';
import Adn from '../components/adn';

const mainStyle = {
  margin: 0,
}

const AgridPage = () => {

  return (
    <main style={mainStyle}>
      <NavBar />
      <Carousel />
      <Widget />
      <Adn />
      <Contact />
      <Footer />
    </main>
  )
}

export default AgridPage;
