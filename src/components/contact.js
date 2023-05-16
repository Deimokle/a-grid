import { CalendarMonth, PinDropOutlined, SmartphoneOutlined } from '@mui/icons-material';
import { Grid, Button, List, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import * as React from 'react';

const relativeStyle = {
  position: 'relative',
}

const centerElementStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
};

const Contact = () => {
  return (
    <>
      <div style={{...relativeStyle, paddingBottom: 50}}>
        <Button 
          variant="contained" 
          endIcon={<CalendarMonth />}
          style={centerElementStyle}
        >
          Prendre rendez-vous
        </Button>
      </div>
      <Grid container style={{ marginTop: 10 }}>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={4}>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <SmartphoneOutlined />
                  </ListItemIcon>
                  <ListItemText primary={"+33 6 52 24 69 73"} secondary={"hello@a-grid.com"} />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item xs={4}>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <PinDropOutlined />
                  </ListItemIcon>
                  <ListItemText primary={"Paris - Ajaccio"} />
                </ListItemButton>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact;
