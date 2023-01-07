import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function Summary(props){
    var balance = (props.income - props.spending);
    return(
        <React.Fragment>
            <Typography gutterBottom variant="h4" component="div">
                Balance:
            </Typography>
            <p style={{margin:0, fontWeight:600, color:(balance >= 0?"#55f026":"#f02a26")}} >${balance.toFixed(2)}</p>
            <Typography sx={{mt:1}} gutterBottom variant="h5" component="div">
                Income:
            </Typography>
            <p style={{margin:0}}>${props.income.toFixed(2)}</p>

            <Typography sx={{mt:1}} gutterBottom variant="h5" component="div">
                Spending:
            </Typography>
            <p style={{margin:0}}>${props.spending.toFixed(2)}</p>
        </React.Fragment>
    );
}