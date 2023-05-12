import * as React from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const AgridLogo = () => (
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="menu"
  >
    <Link to="/">
      <img style={{width: 'auto', maxWidth: 106}} class="wpda-builder-logo" src="https://a-grid.com/wp-content/uploads/2021/05/logo-e1666622319651.png" alt="logo" title="logo" />
    </Link>
  </IconButton>
)

export default AgridLogo;
