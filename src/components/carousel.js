import { Paper } from '@mui/material';
import * as React from 'react';
import Carousel from 'react-material-ui-carousel';

const images = [
  {
    title: 'Une IA qui rend les bâtiments intelligents',
    description: 'L\'innovation qui maitrise votre consommation énergétique',
    src: 'https://a-grid.com/wp-content/uploads/2023/01/nastuh-abootalebi-J1rNS2qv8BQ-unsplash1-1.jpg',
  },{
    title: 'Une gestion intelligente pour différentes activités',
    description: 'Allier confort et sobriété énergétique devient possible',
    src: 'https://a-grid.com/wp-content/uploads/2023/01/rhema-kallianpur-uocSnWMhnAs-unsplash11-scaled-1.jpeg',
  },{
    title: 'Une solution responsable pour des usages durable',
    description: 'La technologie qui apporte des réponses aux enjeux RSE',
    src: 'https://a-grid.com/wp-content/uploads/2022/12/yibei-geng-UdYbiywGeg-unsplash-scaled.jpg',
  },
];

const ItemCarousel = ({image}) => (
  <Paper>
    <h1>{image.title}</h1>
    <h3>{image.description}</h3>
    <a href="mailto:hello@a-grid.com">
      Nous contacter
    </a>
  </Paper>
)

const HomeCarousel = () => {
  return (
    <Carousel
      style={{height: '100%', width: '100%'}}
      navButtonsProps={{style: {display: 'none'}}}
      indicatorIconButtonProps={{style: {display: 'none'}}}
    >
        {images.map((image, index) => (
            <ItemCarousel key={index} image={image} />
        ))}
    </Carousel>
  )
}

export default HomeCarousel;
