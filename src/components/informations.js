import * as React from 'react';
import { Grid } from '@mui/material';


const attachements = [
  'https://a-grid.com/wp-content/uploads/2022/11/hotellerierestauration.png',
  'https://a-grid.com/wp-content/uploads/2022/11/construction21.png',
  'https://a-grid.com/wp-content/uploads/2022/11/tendancehotellerie.png',
  'https://a-grid.com/wp-content/uploads/2022/11/takeagreen.png',
  'https://a-grid.com/wp-content/uploads/2022/11/7.png',
  'https://a-grid.com/wp-content/uploads/2022/10/corse-net-info-300x66.png',
  'https://a-grid.com/wp-content/uploads/2022/10/lesechojpeg.png',
  'https://a-grid.com/wp-content/uploads/2022/11/bfm.png',
  'https://a-grid.com/wp-content/uploads/2022/11/snapkey.png',
  'https://a-grid.com/wp-content/uploads/2023/03/EULogo-black-300x35.png',
  'https://a-grid.com/wp-content/uploads/2022/10/journal-des-palaces-300x95.png',
];

const Informations = () => {
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
    </>
  )
}

export default Informations;
