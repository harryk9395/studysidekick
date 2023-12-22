import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createMuiTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import EastIcon from '@mui/icons-material/East';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { spacing } from '@mui/system';
import FadeIn from 'react-fade-in';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Rubik Doodle Shadow',
        'cursive',
      ].join('.'),
    }
  });
  return (

    <React.Fragment>
      <CssBaseline />

      <Grid container justifyContent="center" alignItems={"center"} direction="column" style={{ minHeight: '100vh' }} spacing={2}>
        <Box sx={{ marginBottom: 5 }}>
          <FadeIn>
            <Typography variant="h3" color="black" fontFamily={'Rubik Doodle Shadow'}>
              Choose your topic!
            </Typography>
          </FadeIn>
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <FadeIn delay={150}>
            <FormControl style={{ minWidth: 400 }}>
              <InputLabel id="demo-simple-select-label">SAT Topic</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={1}>Reading</MenuItem>
                <MenuItem value={2}>Writing</MenuItem>
                <MenuItem value={3}>Math: No Calculator</MenuItem>
                <MenuItem value={4}>Math: Calculator</MenuItem>
              </Select>
            </FormControl>
          </FadeIn>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <FadeIn delay={500}>
            <Button variant="contained" endIcon={<EastIcon />} size="large">Generate</Button>
          </FadeIn>
        </Box>
      </Grid>
    </React.Fragment >
  );
}
