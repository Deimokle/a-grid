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

const attachements = [
  'https://a-grid.com/wp-content/uploads/2022/11/hotellerierestauration.png',
  'https://a-grid.com/wp-content/uploads/2022/11/construction21.png',
  'https://a-grid.com/wp-content/uploads/2022/11/tendancehotellerie.png',
  'https://a-grid.com/wp-content/uploads/2022/11/takeagreen.png',  
]


const Contact = () => {
  return (
    <>
      <Grid container>
        {attachements.map((attach, i) => (
          <Grid item xs={3}>
            <img key={i} src={attach} width="100%" height="100%"/>
          </Grid>
        ))}
      </Grid>
      <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" max-width="788" max-height="443" type="text/html" src="https://www.youtube.com/embed/SuJm7vVHdls?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode nl</a></small></div><div><small><a href="https://harpangratis.se/">https://harpangratis.se/</a></small></div><div><small><a href="https://youtubeembedcode.com/de/">youtubeembedcode de</a></small></div><div><small><a href="https://skipborules.com/">skipborules.com</a></small></div><div><small><a href="https://youtubeembedcode.com/es/">youtubeembedcode es</a></small></div><div><small><a href="https://laddbox.io/">https://laddbox.io/</a></small></div><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode nl</a></small></div><div><small><a href="https://playoldgames.org/">playoldgames.org</a></small></div></iframe>
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
