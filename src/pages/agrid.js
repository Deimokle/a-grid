import * as React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import Carousel from '../components/carousel';
import Widget from '../components/widget';

import Adn from '../components/adn';
import News from '../components/news';
import Contact from '../components/contact';
import Footer from '../components/footer';

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
      <News />
      <Contact />
      <Footer />
    </main>
  )
}

export default AgridPage;
