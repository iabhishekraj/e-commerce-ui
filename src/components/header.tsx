import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        Admin Panel - E - commerce
      </Typography>
    </Toolbar>
  </AppBar>
);