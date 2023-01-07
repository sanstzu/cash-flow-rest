import './App.css';
import * as React from 'react'
import Navbar from './components/Navbar'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import * as Colors from '@mui/material/colors/';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';

import axios from "axios";

import { API_URL } from "./constants";

const theme = createTheme({
  typography: {
    fontFamily: [
      'IBM Plex Sans',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#a168f9',
    },
    secondary: {
      main: '#1976d2',
    },
  },
});

function App() {

  const [db, setdb] = React.useState(null);

  React.useEffect(() => {
    axios.get(API_URL).then((response) => {
      setdb(response.data);
    });
  }, [])

  if (!db) return (
    null
  );

  var income = 0, spending = 0;

  for (let i = 0; i < db.length; i++){
    if(db[i].isIncome){
      income += db[i].amount;
    } else {
      spending += db[i].amount;
    }
  }
  /*
  const [db, setdb] = React.useState(0);

  const getTransaction = () => {
    axios.get(API_URL)
    .then((response) => {
      console.log(response);
      const allTransaction = response.data;
      const lmao = 2;
      console.log(allTransaction);
      setdb(allTransaction);
      setdb(lmao)
      console.log(db);
    })
  }
  getTransaction();
  console.log(db);

  React.useEffect(() => {
    getTransaction();
  },[]);
  
  const db = [
    {
        pk: 1,
        details: "gaming",
        transactionDate: "23/09/2023",
        amount: 23.69,
        isIncome: true
    },
    {
        pk: 2,
        details: "gambit",
        transactionDate: "23/09/2023",
        amount: 4.20,
        isIncome: false
    }
  ];
  */


  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box
           component="main"
           sx={{
             backgroundColor: (theme) =>
               theme.palette.mode === 'light'
                 ? theme.palette.grey[100]
                 : theme.palette.grey[900],
             flexGrow: 1,
             height: '100vh',
             overflow: 'auto',
           }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }}
                >
                  <TransactionList database={db}/>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
                >
                  <Summary income={income} spending={spending} />
                </Paper>
              </Grid>
            </Grid>
            
          </Container>
          
        </Box>
        
      </ThemeProvider>
      
    </div>
  );
}

export default App;
