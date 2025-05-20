import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Header } from './components/header';
import AppDrawer from './components/appDrawer';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <Box>
        <CssBaseline />
        <Header />
        <Box sx={{ display: 'flex' }}>
          <AppDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <AppRoutes />
          </Box>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
