import React, { useState, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const aboutMenu = [
  { label: 'Overview', path: '/about#overview' },
  { label: 'Team', path: '/team' },
];

const servicesMenu = [
  { label: 'Web Development', path: '/services#web' },
  { label: 'Mobile Apps', path: '/services#mobile' },
  { label: 'UI/UX Design', path: '/services#uiux' },
  { label: 'E-commerce', path: '/services#ecommerce' },
  { label: 'Performance', path: '/services#performance' },
  { label: 'Custom Solutions', path: '/services#custom' },
];

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', submenu: aboutMenu },
  { label: 'Services', submenu: servicesMenu },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
  { label: 'Career', path: '/career' },
];

function Navbar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null); // 'about' | 'services' | null
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const menuButtonRefs = {
    about: useRef(),
    services: useRef(),
  };

  // Helper to check if a route is active
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path.split('#')[0]);
  };

  // Desktop submenu open/close handlers (click only)
  const handleMenuToggle = (menu, event) => {
    if (openMenu === menu) {
      setOpenMenu(null);
      setAnchorEl(null);
    } else {
      setOpenMenu(menu);
      setAnchorEl(event.currentTarget);
    }
  };
  const handleMenuClose = () => {
    setOpenMenu(null);
    setAnchorEl(null);
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        anchorEl &&
        !anchorEl.contains(event.target) &&
        !document.querySelector('.desktop-menu')?.contains(event.target)
      ) {
        handleMenuClose();
      }
    }
    if (openMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenu, anchorEl]);

  return (
    <AppBar position="relative" elevation={0} color="default">
      <Toolbar>
        <RouterLink to="/" style={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Box
            component="img"
            src="/logo.jpg"
            alt="LUITE Logo"
            sx={{ height: 48, width: 'auto', display: 'block' }}
          />
        </RouterLink>
        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          <Button
            component={RouterLink}
            to="/"
            sx={{
              color: isActive('/') ? 'primary.main' : 'text.primary',
              fontWeight: 500,
              mx: 1,
              borderBottom: isActive('/') ? '2px solid #589bfb' : '2px solid transparent',
              borderRadius: 0,
              transition: 'border 0.2s',
              '&:hover': {
                borderBottom: '2px solid #589bfb',
                bgcolor: 'transparent',
              },
            }}
          >
            Home
          </Button>
          {/* About with submenu */}
          <Button
            ref={menuButtonRefs.about}
            className="desktop-menu-btn"
            sx={{
              color: openMenu === 'about' || isActive('/about') ? 'primary.main' : 'text.primary',
              fontWeight: 500,
              mx: 1,
              borderBottom: openMenu === 'about' || isActive('/about') ? '2px solid #589bfb' : '2px solid transparent',
              borderRadius: 0,
              transition: 'border 0.2s',
              '&:hover': {
                borderBottom: '2px solid #589bfb',
                bgcolor: 'transparent',
              },
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
            aria-haspopup="true"
            aria-controls="about-menu"
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            tabIndex={0}
            onClick={e => handleMenuToggle('about', e)}
          >
            About
          </Button>
          <Menu
            id="about-menu"
            className="desktop-menu"
            anchorEl={openMenu === 'about' ? anchorEl : null}
            open={openMenu === 'about'}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            {aboutMenu.map((item) => (
              <MenuItem
                key={item.label}
                component={RouterLink}
                to={item.path}
                onClick={handleMenuClose}
                sx={{
                  color: isActive('/about') ? 'primary.main' : 'text.primary',
                  fontWeight: 500,
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
          {/* Services with submenu */}
          <Button
            ref={menuButtonRefs.services}
            className="desktop-menu-btn"
            sx={{
              color: openMenu === 'services' || isActive('/services') ? 'primary.main' : 'text.primary',
              fontWeight: 500,
              mx: 1,
              borderBottom: openMenu === 'services' || isActive('/services') ? '2px solid #589bfb' : '2px solid transparent',
              borderRadius: 0,
              transition: 'border 0.2s',
              '&:hover': {
                borderBottom: '2px solid #589bfb',
                bgcolor: 'transparent',
              },
              display: 'flex',
              alignItems: 'center',
              minWidth: 0
            }}
            aria-haspopup="true"
            aria-controls="services-menu"
            endIcon={<ArrowDropDownIcon fontSize="small" />}
            tabIndex={0}
            onClick={e => handleMenuToggle('services', e)}
          >
            Services
          </Button>
          <Menu
            id="services-menu"
            className="desktop-menu"
            anchorEl={openMenu === 'services' ? anchorEl : null}
            open={openMenu === 'services'}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            {servicesMenu.map((item) => (
              <MenuItem
                key={item.label}
                component={RouterLink}
                to={item.path}
                onClick={handleMenuClose}
                sx={{
                  color: isActive('/services') ? 'primary.main' : 'text.primary',
                  fontWeight: 500,
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
          <Button
            component={RouterLink}
            to="/portfolio"
            sx={{
              color: isActive('/portfolio') ? 'primary.main' : 'text.primary',
              fontWeight: 500,
              mx: 1,
              borderBottom: isActive('/portfolio') ? '2px solid #589bfb' : '2px solid transparent',
              borderRadius: 0,
              transition: 'border 0.2s',
              '&:hover': {
                borderBottom: '2px solid #589bfb',
                bgcolor: 'transparent',
              },
            }}
          >
            Portfolio
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            sx={{
              color: isActive('/contact') ? 'primary.main' : 'text.primary',
              fontWeight: 500,
              mx: 1,
              borderBottom: isActive('/contact') ? '2px solid #589bfb' : '2px solid transparent',
              borderRadius: 0,
              transition: 'border 0.2s',
              '&:hover': {
                borderBottom: '2px solid #589bfb',
                bgcolor: 'transparent',
              },
            }}
          >
            Contact
          </Button>
          <Button
            component={RouterLink}
            to="/career"
            sx={{
              color: isActive('/career') ? 'primary.main' : 'text.primary',
              fontWeight: 500,
              mx: 1,
              borderBottom: isActive('/career') ? '2px solid #589bfb' : '2px solid transparent',
              borderRadius: 0,
              transition: 'border 0.2s',
              '&:hover': {
                borderBottom: '2px solid #589bfb',
                bgcolor: 'transparent',
              },
            }}
          >
            Career
          </Button>
        </Box>
        {/* Mobile Nav */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" edge="end" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Box sx={{ width: 260, pt: 2 }} role="presentation">
              <List>
                <ListItem button component={RouterLink} to="/" onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary="Home" />
                </ListItem>
                {/* About with collapse */}
                <ListItem button onClick={() => setMobileAboutOpen(!mobileAboutOpen)}>
                  <ListItemText primary="About" />
                  {mobileAboutOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={mobileAboutOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {aboutMenu.map((item) => (
                      <ListItem
                        button
                        key={item.label}
                        component={RouterLink}
                        to={item.path}
                        sx={{ pl: 4 }}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
                {/* Services with collapse */}
                <ListItem button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                  <ListItemText primary="Services" />
                  {mobileServicesOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {servicesMenu.map((item) => (
                      <ListItem
                        button
                        key={item.label}
                        component={RouterLink}
                        to={item.path}
                        sx={{ pl: 4 }}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
                <ListItem button component={RouterLink} to="/portfolio" onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary="Portfolio" />
                </ListItem>
                <ListItem button component={RouterLink} to="/contact" onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary="Contact" />
                </ListItem>
                <ListItem button component={RouterLink} to="/career" onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary="Career" />
                </ListItem>
              </List>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ textAlign: 'center', pb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  © {new Date().getFullYear()} LUITE
                </Typography>
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
