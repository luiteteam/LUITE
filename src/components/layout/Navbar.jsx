import React, { useState, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavLink, Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

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
  { label: 'Home', path: '/', icon: <HomeIcon fontSize="small" sx={{ mr: 1 }} /> },
  { label: 'About', path: '/about', icon: <InfoIcon fontSize="small" sx={{ mr: 1 }} />, submenu: aboutMenu },
  { label: 'Services', path: '/services', icon: <WorkIcon fontSize="small" sx={{ mr: 1 }} />, submenu: servicesMenu },
  { label: 'Portfolio', path: '/portfolio', icon: <FolderIcon fontSize="small" sx={{ mr: 1 }} /> },
  { label: 'Career', path: '/career', icon: <PersonIcon fontSize="small" sx={{ mr: 1 }} /> },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  color: theme.palette.text.primary,
  padding: '8px 16px',
  boxShadow: 'none',
  position: 'relative',
  animation: 'fadeIn 0.8s ease-in',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
}));

const StyledLogo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StyledNavButton = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.9rem',
  color: theme.palette.text.primary,
  background: 'transparent',
  border: 'none',
  boxShadow: 'none',
  margin: theme.spacing(0, 1.2),
  padding: '6px 12px',
  minWidth: 'auto',
  transition: 'color 0.3s ease',
  textTransform: 'none',
  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  '&:hover': {
    color: theme.palette.primary.main,
    background: 'transparent',
    boxShadow: 'none',
  },
  '&:focus': {
    background: 'transparent',
    boxShadow: 'none',
    outline: 'none',
  },
  '&:active': {
    background: 'transparent',
    boxShadow: 'none',
  },
  '&.Mui-focusVisible': {
    background: 'transparent',
    boxShadow: 'none',
  },
  // Remove all Material-UI button states
  '&.MuiButton-root': {
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    '&:focus': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
}));

const StyledContactButton = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.9rem',
  color: theme.palette.text.primary,
  background: 'transparent',
  border: 'none',
  boxShadow: 'none',
  margin: theme.spacing(0, 1.2),
  padding: '6px 12px',
  minWidth: 'auto',
  transition: 'color 0.3s ease',
  textTransform: 'none',
  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  '&:hover': {
    color: theme.palette.primary.main,
    background: 'transparent',
    boxShadow: 'none',
  },
  '&:focus': {
    background: 'transparent',
    boxShadow: 'none',
    outline: 'none',
  },
  '&:active': {
    background: 'transparent',
    boxShadow: 'none',
  },
  '&.Mui-focusVisible': {
    background: 'transparent',
    boxShadow: 'none',
  },
  // Remove all Material-UI button states
  '&.MuiButton-root': {
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    '&:focus': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
  '&:focus': {
    backgroundColor: 'transparent',
  },
  '&:active': {
    backgroundColor: 'transparent',
  },
}));

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
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

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Desktop submenu handlers
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

  const drawer = (
    <Box sx={{ bgcolor: 'rgba(40, 40, 40, 0.2)', backdropFilter: 'blur(10px)', height: '100%', p: 2 }}>
      <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {navItems.map((item) => (
          <React.Fragment key={item.path}>
            {item.submenu ? (
              <>
                <ListItem
                  button
                  onClick={() => {
                    if (item.label === 'About') {
                      setMobileAboutOpen(!mobileAboutOpen);
                    } else if (item.label === 'Services') {
                      setMobileServicesOpen(!mobileServicesOpen);
                    }
                  }}
                  sx={{
                    color: isActive(item.path) ? '#589bfb' : '#a0a0a0',
                    fontWeight: isActive(item.path) ? 'bold' : 'normal',
                    py: 1.2,
                    justifyContent: 'center',
                    transition: 'color 0.3s ease',
                    '&:hover': { 
                      color: '#589bfb', 
                      background: 'transparent',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item.icon}
                  <ListItemText primary={item.label} />
                  {item.label === 'About' ? 
                    (mobileAboutOpen ? <ExpandLess /> : <ExpandMore />) :
                    (mobileServicesOpen ? <ExpandLess /> : <ExpandMore />)
                  }
                </ListItem>
                <Collapse 
                  in={item.label === 'About' ? mobileAboutOpen : mobileServicesOpen} 
                  timeout="auto" 
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.submenu.map((subItem) => (
                      <ListItem
                        button
                        key={subItem.label}
                        component={NavLink}
                        to={subItem.path}
                        sx={{ 
                          pl: 4,
                          color: '#a0a0a0',
                          '&.active': { color: '#589bfb', fontWeight: 'bold' },
                          '&:hover': { 
                            color: '#589bfb', 
                            background: 'transparent',
                            backgroundColor: 'transparent',
                          },
                        }}
                        onClick={handleDrawerToggle}
                      >
                        <ListItemText primary={subItem.label} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem
                component={NavLink}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  '&.active': { color: '#589bfb', fontWeight: 'bold' },
                  color: '#a0a0a0',
                  py: 1.2,
                  justifyContent: 'center',
                  transition: 'color 0.3s ease',
                  '&:hover': { 
                    color: '#589bfb', 
                    background: 'transparent',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.icon}
                <ListItemText primary={item.label} />
              </ListItem>
            )}
          </React.Fragment>
        ))}
        <ListItem
          component={NavLink}
          to="/contact"
          onClick={handleDrawerToggle}
          sx={{
            '&.active': { color: '#589bfb', fontWeight: 'bold' },
            color: '#a0a0a0',
            py: 1.2,
            justifyContent: 'center',
            transition: 'color 0.3s ease',
            '&:hover': { 
              color: '#589bfb', 
              background: 'transparent',
              backgroundColor: 'transparent',
            },
          }}
        >
          <ContactMailIcon fontSize="small" sx={{ mr: 1 }} />
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ textAlign: 'center', pb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} LUITE
        </Typography>
      </Box>
    </Box>
  );

  return (
    <StyledAppBar position="relative">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '48px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <StyledLogo component={RouterLink} to="/">
            <Box
              component="img"
              src="/logo.jpg"
              alt="LUITE Logo"
              sx={{ height: 40, width: 'auto', display: 'block' }}
            />
          </StyledLogo>
        </Box>
        
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            alignItems: 'center',
          }}
        >
          {navItems.map((item) => (
            <React.Fragment key={item.path}>
              {item.submenu ? (
                <>
                  <StyledNavButton
                    ref={menuButtonRefs[item.label.toLowerCase()]}
                    className={isActive(item.path) ? 'active' : ''}
                    endIcon={<ArrowDropDownIcon fontSize="small" />}
                    onClick={(e) => handleMenuToggle(item.label.toLowerCase(), e)}
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                  >
                    {item.icon}
                    {item.label}
                  </StyledNavButton>
                  <Menu
                    className="desktop-menu"
                    anchorEl={openMenu === item.label.toLowerCase() ? anchorEl : null}
                    open={openMenu === item.label.toLowerCase()}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  >
                    {item.submenu.map((subItem) => (
                      <MenuItem
                        key={subItem.label}
                        component={RouterLink}
                        to={subItem.path}
                        onClick={handleMenuClose}
                        sx={{
                          color: isActive(subItem.path) ? 'primary.main' : 'text.primary',
                          fontWeight: isActive(subItem.path) ? 600 : 500,
                          '&:hover': {
                            color: 'primary.main',
                            backgroundColor: 'transparent',
                          },
                        }}
                      >
                        {subItem.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <StyledNavButton
                  component={NavLink}
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                >
                  {item.icon}
                  {item.label}
                </StyledNavButton>
              )}
            </React.Fragment>
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <StyledContactButton
            component={NavLink}
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
            sx={{ display: { xs: 'none', md: 'flex' } }}
            disableRipple
            disableFocusRipple
            disableTouchRipple
          >
            <ContactMailIcon fontSize="small" sx={{ mr: 1 }} />
            Contact
          </StyledContactButton>
          <StyledIconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, ml: 1 }}
            disableRipple
            disableFocusRipple
            disableTouchRipple
          >
            <MenuIcon />
          </StyledIconButton>
        </Box>
      </Toolbar>
      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: 'rgba(40, 40, 40, 0.2)',
            backdropFilter: 'blur(10px)',
            width: '250px',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
}

export default Navbar;