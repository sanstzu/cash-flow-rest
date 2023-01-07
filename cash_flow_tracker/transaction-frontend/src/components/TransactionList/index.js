import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Drawer from '@mui/material/Drawer';
import TableCell from '@mui/material/TableCell';
import Toolbar from '@mui/material/Toolbar';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'

import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { API_URL } from '../../constants/'
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormCreator from '../FormCreator';
import FormUpdater from '../FormUpdater';

export default function TransactionList(props){
    //pk, date, details, amount, isIncome

    const [passedValue, setPassedValue] = React.useState({
        pk: '',
        transactionDate: '',
        details: '',
        amount: 0,
        isIncome:false,
    });

    const [stateUpdater, setStateUpdater] = React.useState(false);
    const toggleUpdater = (open = !stateUpdater) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
      }
      
      setStateUpdater(!stateUpdater);
      console.log(stateUpdater);
    };

    const [stateCreator, setStateCreator] = React.useState(false);
    const toggleCreator = (open = !stateCreator) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
      }
  
      setStateCreator(!stateCreator);
      console.log(stateCreator);
    };
    


    /*
    const modifyActive = (method, date ='', details='', amount='') => { return (<TableRow key="new" sx={{bgcolor: "#e3e3e3"}}  >
        <input type="hidden" name="_method" value={method} />
        <TableCell><input type="date" defaultValue={date}/></TableCell>
        <TableCell><input type="text" defaultValue={details}/></TableCell>
        <TableCell style={{fontWeight: 900}} ><input type="number" defaultValue={amount}/></TableCell>
        <TableCell sx={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            {/*Buttons for editing }
            <IconButton onClick>
                <CheckIcon />
            </IconButton>
            <IconButton onClick={() => setModifyTransaction(null)}>
                <CloseIcon />
                
            </IconButton>
        </TableCell>
    </TableRow>);};

    const [modifyTransaction, setModifyTransaction] = React.useState(null);
    
    const toggleModify = () => {
        if(!modifyTransaction) setModifyTransaction(modifyActive());
        else setModifyTransaction(null);
    }
    */


    const deleteTransaction = (row) => {
        console.log(`${API_URL}${row}`)
        axios.delete(`${API_URL}${row}`).then(() => {
            window.location.reload();
        })
    }

    const db = props.database;
    console.log(db)
    return(
        <React.Fragment>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Transaction List
                <Button sx = {{ml: 4}}variant="contained" onClick={
                    toggleCreator()
                }>Create</Button>
            </Typography>
            <form method="post">
            
            <TableHead>
                <TableRow>
                    <TableCell width="20%">Date</TableCell>
                    <TableCell width="50%">Details</TableCell>
                    <TableCell width="20%">Amount</TableCell>
                </TableRow>
                {db.map((row) => (
                    <TableRow key={row.pk} sx={{bgcolor:  row.isIncome?"#cbffab":"#ffa8ae"}}  >
                        <TableCell>{row.transactionDate}</TableCell>
                        <TableCell>{row.details}</TableCell>
                        <TableCell style={{fontWeight: 900}}>${row.amount.toFixed(2)}</TableCell>
                        <TableCell sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            {/*Buttons for editing */}
                            <IconButton onClick={ () => {
                                setPassedValue(row);
                                setStateUpdater(!stateUpdater);
                            }}>
                                <EditIcon />
                                
                            </IconButton>
                            <IconButton onClick={() => deleteTransaction(row.pk)}>
                                <DeleteIcon />
                                
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
                {/*modifyTransaction*/}
                    
                
            </TableHead>
            </form>
            <Drawer
                anchor="right"
                open={stateUpdater}
                onClose={toggleUpdater(false)}
                sx={{
                    width: 0.5,
                }}
            >
                <Toolbar
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
                }}
                >
                <IconButton onClick={toggleUpdater()}>
                    <ChevronRightIcon />
                </IconButton>
                </Toolbar>
                <Divider />
                <FormUpdater val={passedValue} />

            </Drawer>
            <Drawer
                anchor="right"
                open={stateCreator}
                onClose={toggleCreator(false)}
                sx={{
                    width: 0.5,
                }}
            >
                <Toolbar
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
                }}
                >
                <IconButton onClick={toggleCreator()}>
                    <ChevronRightIcon />
                </IconButton>
                </Toolbar>
                <Divider />
                <FormCreator />
            </Drawer>
        </React.Fragment>
    );
}