import { Box, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h3" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5">
        Page not found
      </Typography>
      <Typography variant="body1">
        The page you're looking for doesn't exist.
      </Typography>
    </Box>
  );
};

export default NotFound;