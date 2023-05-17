import React from 'react'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
//import SimpleAccordion from './Accordion';
import Bars from './step3';
function Step2() {
     
  return (
     <div>
              <Grid container>
       <Grid item xs={7}>
       <h3>Additional Information</h3>
        <p>Total Data</p>
       </Grid>
        <Grid item xs={5}>
        <Button variant="contained" style={{backgroundColor:'black',color:'white'}}>
      Edit Additional Info
    </Button>
        </Grid>
        </Grid>
        <Grid container>
       <Grid item xs={7}>
       <h3>House Details</h3>
       </Grid>
        <Grid item xs={5}>
        <Button variant="contained" style={{backgroundColor:'black',color:'white'}}>
      Edit House Details
    </Button>
        </Grid>
        </Grid>
        <h4 style={{color:'#f53527'}}>Existing House Details</h4>
        <Grid container>
       <Grid item xs={2}>
       <h3>Floor No</h3>
       <p>11</p>
       </Grid>
        <Grid item xs={2}>
        <h3>Elevator Available</h3>
        <p>Yes</p>
        </Grid>
        <Grid item xs={4}>
        <h3>distance from Elevator/Staircase to Truck</h3>
        <p>11 meters</p>
        </Grid>
        </Grid>
        <h4 style={{color:'#f53527'}}>New House Details</h4>
        <Grid container>
       <Grid item xs={2}>
       <h3>Floor No</h3>
       <p>11</p>
       </Grid>
        <Grid item xs={2}>
        <h3>Elevator Available</h3>
        <p>Yes</p>
        </Grid>
        <Grid item xs={4}>
        <h3>distance from Elevator/Staircase to Truck</h3>
        <p>11 meters</p>
        </Grid>
        </Grid>
        <Grid container>
       <Grid item xs={7}>
       <h3>Inventory Details</h3>
       </Grid>
        <Grid item xs={5}>
        <Button variant="contained" style={{backgroundColor:'black',color:'white'}}>
      Edit Inventory Details
    </Button>
        </Grid>
        </Grid>
      <Bars/>
    </div>
  )
}

export default Step2