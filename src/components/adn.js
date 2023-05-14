import { ArrowForwardOutlined } from '@mui/icons-material';
import { Grid, List, Button } from '@mui/material';
import * as React from 'react';
import * as styles from '../styles';

const adnInformations = {
  description: "Nous avons développé une technologie de pointe au service des bâtiments afin de les rendre plus responsables et plus durables. Notre intelligence artificielle permet une gestion optimale et autonome de la consommation des bâtiments grâce des consignes communiquées automatiquement aux systèmes de CVC. Notre algorithme s’adapte aux contraintes de votre bâtiment et propose un pilotage en temps réel de celui-ci.",
  attachements: [
    'https://a-grid.com/wp-content/uploads/2022/10/Logo-bpifrance-1-1-300x80.png',
    'https://a-grid.com/wp-content/uploads/2023/04/Logo2-01.webp',
    'https://a-grid.com/wp-content/uploads/2022/11/Concours-d-innovation-i-Lab-e1671730993472-300x124.png',
    'https://a-grid.com/wp-content/uploads/2022/10/UeCorse-1-2.jpg',
    'https://a-grid.com/wp-content/uploads/2023/04/femu_qui.png',
    'https://a-grid.com/wp-content/uploads/2022/10/logo-ademe-1-1-300x207.png',
  ],
  sides: [
    {
      title: 'Economies',
      data: '30',
      data2: '%',
      description: 'Jusqu’à 30% d’économies constatées sur les factures de nos clients actuels',
    },{
      title: 'Dépot du brevet',
      data: '2020',
      description: 'Les efforts consacrés à la technologie Agrid ont abouti à l’obtention d’un brevet',
    },{
      title: 'Reconnaissance',
      data: '2021',
      description: 'Agrid est lauréat du PIA (programme des investissements d’avenir), du concours i-Lab du ministère de l’enseignement supérieur, de la recherche et de l’innovation et est reconnue par l’ADEME',
    },
  ],
}

const relativeStyle = {
  position: 'relative',
}

const centerElementStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
};

const sideDataStyle = {
  ...styles.blue,
  fontSize: 56,
  fontWeight: 500,
}
const sideTitleStyle = {
  ...styles.blue,
  fontSize: 14,
  fontWeight: 400,
  textTransform: 'uppercase',
}

const Sides = () => {
  return (
    <div style={{marginLeft: 70}}>
      {adnInformations.sides.map((side, i) => (
        <Grid key={i} container>
          <Grid item xs="6" style={{borderRight: '1px solid grey'}}>
            <p style={sideDataStyle} >
              {side.data}
            </p>
            {side.data2 ? <span>{side.data2}</span> : ''}
            <p style={sideTitleStyle}>{side.title}</p>
          </Grid>
          <Grid item xs="6">
            <p style={styles.blue}>{side.description}</p>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

const Attachements = () => {
  return (
    <>
      <Grid container>
        {adnInformations.attachements.map((attach, i) => (
          <Grid key={i} item xs="4">
            <img src={attach} width="63%" height="auto" />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

const Adn = () => {
  return (
    <>
      <h2 style={{
        ...styles.blue,
        fontSize: '36px',
        fontWeight: 500,
        textAlign: 'center',
        padding: '0px 0px 22px 0px',
      }}>
        L'innovation dans notre ADN
      </h2>
      <p style={{textAlign: 'center', ...styles.blue}}>
        Innover est notre raison d'être, notre source d'inspiration, qui nous pousse à aller plus loin, à regarder au-delà de l'horizon, pour imaginer des solutions nouvelles qui révolutionnent notre quotidien tout en préservant notre planète.
      </p>
      <Grid container>
        <Grid item xs="6">
          <Sides />
        </Grid>
        <Grid item xs="6">
          <p style={styles.blue}>{adnInformations.description}</p>
          <Attachements />
        </Grid>
      </Grid>
      <div style={{...relativeStyle, paddingBottom: 50}}>
        <Button 
          variant="contained" 
          endIcon={<ArrowForwardOutlined />}
          style={centerElementStyle}
        >
          En savoir plus
        </Button>
      </div>
    </>
  )
}

export default Adn;
