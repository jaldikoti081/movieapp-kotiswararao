import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button ,Divider} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Dummy from './dummy';
import React, { useState, useEffect } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import Grid from '@mui/material/Grid';
import { AiFillHome } from "react-icons/ai";
import { BsBuildings } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc";
import { GrEdit } from "react-icons/gr";
import { AiFillCheckSquare } from "react-icons/ai";
import { GoAlert } from "react-icons/go";

import Step2 from './step2';
function Simple() {
   const [dummyData, setDummyData] = useState([]);
   const [showAdditionalData, setShowAdditionalData] = useState(false);

   
  
    useEffect(() => {
      debugger
        const fetchData = async () => {
          try {
            const response = await fetch('http://test.api.boxigo.in/sample-data/');
            const data = await response.json();
            setDummyData(data.Customer_Estimate_Flow);
            
          } catch (error) {
            console.log('Error fetching dummy data:', error);
          }
        };
    
        fetchData();
      }, []);
  
      const handleViewMoreDetails = () => {
        setShowAdditionalData(!showAdditionalData);
      };
  return (
    <div style={{marginLeft:'10px'}}>
           {dummyData.map(items => (
     
      <div>
      <Grid container   columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4.5}>
          <h4>From</h4>
        <div key={items.id}>
          {items.moving_from}
        </div>
        </Grid>
        <Grid item xs={2}>
          <div > <BsArrowRightCircle style={{color:'#f53527',marginBottom:'-80px',marginRight:'-30px'}} size={'30px'}/> </div>
        </Grid>
        <Grid item xs={4}>
          <h4>To</h4>
          <div> {items.moving_to}</div>
        </Grid>
        <Grid item xs={1}>
          <h5>Request#</h5>
          <div style={{color:'#f53527'}}> <b>{items.estimate_id}</b></div>
        </Grid>
      </Grid>

      <Grid container rowSpacing={3} style={{paddingTop:'20px'}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={1.5}>
        <div key={items.id}> {<AiFillHome style={{color:'#f53527'}} />}
          {items.property_size}
        </div>
        </Grid>
        <Grid item xs={1}>
          <div >{<BsBuildings style={{color:'#f53527'}} />} {items.old_floor_no} </div>
        </Grid>
        <Grid item xs={1.5}>
          
          <div>{<GiPathDistance style={{color:'#f53527'}} />} {items.distance}</div>
        </Grid>
        <Grid item xs={3}>
          
          <div>{<FcCalendar style={{color:'#f53527'}} />} {items.moving_on} {<GrEdit/>}</div>
          
        </Grid>
        <Grid item xs={2}>
          
          <div> {<AiFillCheckSquare style={{color:'#f53527'}} />}is flexible</div>
          
        </Grid>
        <Grid item xs={1.5}>
        <button style={{color:'#f53527',padding:'3px',borderColor:"#f53527"}} 
        onClick={handleViewMoreDetails}>
        {showAdditionalData ? 'View More Details' : 'View More Details'}
      </button>

      
        </Grid>
        <Grid item xs={1.5}>
          <button style={{backgroundColor:'#f53527',color:'white',padding:'3px'}} >quotes awaiting</button>
        </Grid>
      </Grid>
      <div style={{paddingTop:'20px'}}>{<GoAlert style={{color:'#f53527'}}/>}<b style={{paddingLeft:'10px'}}>Disclaimer:</b>please update your move date before two days of shifting </div>
      {showAdditionalData && <Step2 />}
        <Divider />
            </div>
      ))}
      
   
    </div>
  );
}

export default Simple;