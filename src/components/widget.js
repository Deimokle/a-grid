import * as React from 'react';
import {
  Business,
  TrendingUp,
  Visibility,
  Phone,
} from '@mui/icons-material';

const widgets = [
  {
    icon: Business,
    title: 'Pilotage automatique',
    description: 'Une intelligence artificielle à la pointe de la technologie',
  },{
    icon: TrendingUp,
    title: 'Dashboard & analytics',
    description: 'De la donnée en temps réel sur vos bâtiments; des rapports réguliers'
  },{
    icon: Visibility,
    title: 'Maintenance prédictive',
    description: 'Un outil pour anticiper les pannes de vos équipements'
  },{
    icon: Phone,
    title: 'Service client efficace',
    description: 'Nous vous accompagnons au quotidien'
  },
];

const Widget = () => {
  return (
    <div>
      {widgets.map((w, i) => (
        <div>
          <w.icon />
          <h3>{w.title}</h3>
          <p>{w.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Widget;
