import { Box, Card, CardContent } from '@mui/material';
import * as React from 'react';

import { blue, secondaryBlue } from '../styles';

const dataNews = [
  {
    title: "Ces start-ups qui économisent l'énergie des bureaux",
    description: "AGRID permet aux entreprises et hôtels d’adapter leur consommation en fonction de l’usage réel du bâtiment. […] Concrètement, il a développé un logiciel sous abonnement qui se connecte aux systèmes de chauffage et de climatisation des bâtiments. Une intelligence artificielle permettra ensuite des optimisations automatisées […]",
    from: 'LesEchos',
    img: '',
    date: '16/09/2022', 
  },
];

const News = () => {
  return (
    <>
      <Box style={{position: 'relative', padding: '50px 0px 50px 0px', marginBottom: 50}}>
        <div style={{height: '100%', width: '100%', backgroundColor: '#E6E6E6', position: 'absolute', top: 0, left: 0}}></div>
        {dataNews.map((data, i) => (
          <Card key={i} sx={{ display: 'flex', position: 'relative' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <p style={{...secondaryBlue, textAlign: 'center', fontSize: 30}}>{data.title}</p>
              </CardContent>
            </Box>
            <CardContent sx={{ }}>
              <p style={{...blue, fontSize: 18}}>{data.description}</p>
              <p style={{fontSize: 13}}>{data.date}</p>
            </CardContent>
          </Card>
        ))}
      </Box>
    </> 
  );
}

export default News;
