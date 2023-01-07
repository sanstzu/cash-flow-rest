import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'

import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { API_URL } from '../../constants'
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function FormCreator(props) {

    const [formType,setFormType] = React.useState('POST');
    const [tempValue, setTempValue] = React.useState({
        details: "",
        amount: 0,
        isIncome: false,
    });

    function updateTemp(field, value){
        setTempValue({...tempValue, [field]: value});
    }

    function create(){
        axios.post(API_URL, tempValue).then(() => {
            window.location.reload();
        });
    }
    return(
        <Box sx={{p: 2, width: 500}}>
            
            <FormControl  sx={{ m: 1, width: 0.75}}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    {formType === 'POST' ? "Create new transaction":"Update existing transaction"}
                    
                </Typography>
                <TextField
                    required
                    label="Details"
                    defaultValue={tempValue.details}
                    onChange={(event) => {
                        updateTemp('details', event.target.value);
                    }}
                    sx={{ m: 1 }}
                />

                <TextField
                    required
                    defaultValue=''
                    onChange={(event) => {
                        updateTemp('amount', event.target.value);
                    }}
                    label="Amount"
                    sx={{ m: 1 }}
                />
                <FormControlLabel
                    control={<Checkbox 
                        onChange={(event) => {
                            updateTemp( 'isIncome', event.target.checked);
                        }} 
                    />}
                    sx={{ m: 1 }} 
                    label="Income" />
                <Button sx = {{ml: 1}}variant="contained" onClick={() => {
                    console.log(tempValue);
                    create();
                }}>Submit</Button>
            </FormControl>
        </Box>
    );
}