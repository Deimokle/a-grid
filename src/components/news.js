import { Box, Card, CardContent } from '@mui/material';
import * as React from 'react';

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
      <Box>
        {dataNews.map((data, i) => (
          <Card key={i} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <p>{data.title}</p>
              </CardContent>
            </Box>
            <CardContent sx={{ }}>
              <p>{data.description}</p>
              <p>{data.date}</p>
            </CardContent>
          </Card>
        ))}
      </Box>
    </> 
  );
}

export default News;
