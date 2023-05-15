import { Grid, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import * as React from 'react';
import AgridLogo from './agridLogo';

import * as styles from '../styles';

const offers = [
  "Comment ça marche ?",
  "Bureaux",
  "Hôtels",
  "Nos références",
  "Jobs",
  "Mon compte",
];

const abouts = [
  "Blog",
  "FAQ",
  "On parle de nous",
  "A propos",
];

const hrStyle = {
  marginTop: 15,
  marginBottom: 15,
  color: '#EBEBEF',
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <hr style={hrStyle} />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <AgridLogo />
        </Grid>
        <Grid item xs={3}>
          <List
            subheader={
              <ListSubheader component="div" style={{...styles.blue, fontSize: 20}}>
                Nos offres
              </ListSubheader>
            }
          >
            {offers.map((offer, i) => (
              <ListItem>
                <ListItemText style={{...styles.blue}}>
                  {offer}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={3}>
          <List
            subheader={
              <ListSubheader component="div" style={{...styles.blue, fontSize: 20}}>
                A propos
              </ListSubheader>
            }
          >
            {abouts.map((offer, i) => (
              <ListItem>
                <ListItemText style={{...styles.blue}}>
                  {offer}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={3} />
      </Grid>
      <hr style={hrStyle} />
      <div>
        <img width={78} height={27} loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" />
      </div>
      <div>
        <p style={{color: '#696687', fontSize: 14}}>© {year} - Agrid</p>
      </div>
    </>
  )
}

export default Footer;
