import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CardMain } from './CardMain';

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="fixed" style={{backgroundColor: '#E50046'}} >
        <Toolbar >
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
            <MenuIcon /> 
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleSidebar}
      >
        <div
          style={{
            width: 250,
            padding: 20,
          }}
        >
          <List style={{cursor:'pointer'}}>
            <ListItem button>
              <ListItemText primary="Recursos" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Carrinho" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Contato" />
            </ListItem>
            <Divider />
           
          </List>
        </div>
      </Drawer>

      <main style={{ marginLeft: open ? 250 : 0, transition: 'margin-left 0.3s ease' }}>
        <div style={{ paddingTop: 64, paddingLeft: 20 }}>
          <h2>Bem vindo(a)</h2>
          <p>Estes são os recursos visuais para o Ministério Infantil disponíveis para venda</p>
          <CardMain/>
        </div>
      </main> 
     
    </>
  );
};

export default Sidebar;
