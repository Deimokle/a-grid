import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const AgridMail = 'hello@a-grid.com';
const pages = [
  "Comment ça marche?",
  "Hôtels",
  "Bureaux",
  "Agrid",
  "Jobs",
  "A propos",
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Logo = () => (
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
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor: '#fff', color: '#000'}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Logo />

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link to="/mission">{page}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Link
              key={page}
              onClick={handleCloseNavMenu}
              to="/mission"
            >
              {page}
            </Link>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <a href={'mailto:'+AgridMail}>{AgridMail}</a>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  );
}
export default ResponsiveAppBar;