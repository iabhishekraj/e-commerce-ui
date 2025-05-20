import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, ListItemButton } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const AppDrawer = () => {
  const navigate = useNavigate();
  const menuItems = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Category', path: '/category' },
    { text: 'Products', path: '/products' },
  ];

  return (<Drawer
    variant="permanent"
    anchor="left"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        position: 'relative',
        top: 0,
        width: drawerWidth,
        height: 'calc(100vh - 64px)',
        boxSizing: 'border-box',
      },
    }}
  >
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {menuItems.map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate(path)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
  )
}

export default AppDrawer;
