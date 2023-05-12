import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import {
  BusinessOutlined,
  TrendingUpOutlined,
  VisibilityOutlined,
  PhoneOutlined,
} from '@mui/icons-material';

const widgets = [
  {
    icon: BusinessOutlined,
    color: '#3D88CD',
    backgroundColor: '#C4E3FF',
    title: 'Pilotage automatique',
    description: 'Une intelligence artificielle à la pointe de la technologie',
  },{
    icon: TrendingUpOutlined,
    color: '#53A174',
    backgroundColor: '#DCF1DD',
    title: 'Dashboard & analytics',
    description: 'De la donnée en temps réel sur vos bâtiments; des rapports réguliers'
  },{
    icon: VisibilityOutlined,
    color: '#59237A',
    backgroundColor: '#E6E1F3',
    title: 'Maintenance prédictive',
    description: 'Un outil pour anticiper les pannes de vos équipements'
  },{
    icon: PhoneOutlined,
    color: '#993C22',
    backgroundColor: '#FAEEC4',
    title: 'Service client efficace',
    description: 'Nous vous accompagnons au quotidien'
  },
];

const Widget = () => {
  return (
    <Grid container spacing={2}>
      {widgets.map(({color, backgroundColor, ...w}, i) => (
        <Grid key={i} item xs={3}>
          <Card style={{ height: '100%', position: 'relative' }}>
            <CardHeader style={{ backgroundColor: color, position: 'absolute', top: -25, width: '100%' }} />
            <CardContent>
              <w.icon style={{color, backgroundColor, display: 'block', margin: 'auto', borderRadius: 50, height: 30, width: 30 }} />
              <Typography variant={"h5"} component="div">
                {w.title}
              </Typography>
              <Typography variant="body2">
                {w.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Widget;
