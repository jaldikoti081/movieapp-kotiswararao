import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Looks6RoundedIcon from '@mui/icons-material/Looks6Rounded';
import Looks4SharpIcon from '@mui/icons-material/Looks4Sharp';
import Looks5SharpIcon from '@mui/icons-material/Looks5Sharp';
import LooksTwoSharpIcon from '@mui/icons-material/LooksTwoSharp';
import LooksOneSharpIcon from '@mui/icons-material/LooksOneSharp';
import { Grid } from '@mui/material';
export default function Bars() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}sx={{backgroundColor:"white"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 ,color:"#f53527"}}>
            Forniture<Looks6RoundedIcon/>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container>
       <Grid item xs={3}>
       <h3>Sofa </h3>
        <Typography> 1 Seater Sofa</Typography>
        <h5>Wooden</h5>
        <Typography> 2 Seater Sofa</Typography>
        <h5>Wooden</h5>
        <Typography> 3Seater Sofa</Typography>
        <h5>Fabric</h5>
        <h5>Sofa cum Bed</h5>
        <Typography> Sectional Sofa</Typography>
        <h5> 4 piece</h5>
        <Typography> Sofa Forest</Typography>
        <Typography> Ottoman</Typography>

       </Grid>
       <Grid item xs={2} sx={{marginTop:"48px"}}>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>

       </Grid>
       <Grid item xs={3}>
        <h3>Table</h3>
        <Typography>Center/Coffe</Typography>
         <h5>Wooden</h5>
         <Typography> Teapoy</Typography>
         <h5>Glass</h5>
         <Typography> SideTable</Typography>
         <h5>Glass</h5>
         <Typography> 4 Seater DainingTable</Typography>
         <h5>Metal Dismatable</h5>
         <Typography>Ironbord</Typography>
         <Typography>Plastictable</Typography>
         <Typography>Draftictable</Typography>

         
        </Grid>
        <Grid item xs={4} sx={{marginTop:"50px"}}>
       <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>

     </Grid>
        </Grid>
       
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{marginTop:"5px",backgroundColor:"white",}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0,color:"#f53527" }}>
            Electronics<Looks4SharpIcon/>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container>
       <Grid item xs={3}>
       <h3>Sofa </h3>
        <Typography> 1 Seater Sofa</Typography>
        <h5>Wooden</h5>
        <Typography> 2 Seater Sofa</Typography>
        <h5>Wooden</h5>
        <Typography> 3Seater Sofa</Typography>
        <h5>Fabric</h5>
        <h5>Sofa cum Bed</h5>
        <Typography> Sectional Sofa</Typography>
        <h5> 4 piece</h5>
        <Typography> Sofa Forest</Typography>
        <Typography> Ottoman</Typography>

       </Grid>
       <Grid item xs={2} sx={{marginTop:"48px"}}>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>

       </Grid>
       <Grid item xs={3}>
        <h3>Table</h3>
        <Typography>Center/Coffe</Typography>
         <h5>Wooden</h5>
         <Typography> Teapoy</Typography>
         <h5>Glass</h5>
         <Typography> SideTable</Typography>
         <h5>Glass</h5>
         <Typography> 4 Seater DainingTable</Typography>
         <h5>Metal Dismatable</h5>
         <Typography>Ironbord</Typography>
         <Typography>Plastictable</Typography>
         <Typography>Draftictable</Typography>

         
        </Grid>
        <Grid item xs={4} sx={{marginTop:"50px"}}>
       <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>

     </Grid>
        </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{marginTop:"5px",backgroundColor:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 ,color:"#f53527"}}>
            Vehicle<Looks5SharpIcon/>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container>
       <Grid item xs={3}>
       <h3>Sofa </h3>
        <Typography> 1 Seater Sofa</Typography>
        <h5>Wooden</h5>
        <Typography> 2 Seater Sofa</Typography>
        <h5>Wooden</h5>
        <Typography> 3Seater Sofa</Typography>
        <h5>Fabric</h5>
        <h5>Sofa cum Bed</h5>
        <Typography> Sectional Sofa</Typography>
        <h5> 4 piece</h5>
        <Typography> Sofa Forest</Typography>
        <Typography> Ottoman</Typography>

       </Grid>
       <Grid item xs={2} sx={{marginTop:"48px"}}>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>

       </Grid>
       <Grid item xs={3}>
        <h3>Table</h3>
        <Typography>Center/Coffe</Typography>
         <h5>Wooden</h5>
         <Typography> Teapoy</Typography>
         <h5>Glass</h5>
         <Typography> SideTable</Typography>
         <h5>Glass</h5>
         <Typography> 4 Seater DainingTable</Typography>
         <h5>Metal Dismatable</h5>
         <Typography>Ironbord</Typography>
         <Typography>Plastictable</Typography>
         <Typography>Draftictable</Typography>

         
        </Grid>
        <Grid item xs={4} sx={{marginTop:"50px"}}>
       <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>

     </Grid>
        </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{marginTop:"5px",backgroundColor:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 ,color:"#f53527"}}>
            Boxes/Trolley<LooksTwoSharpIcon/>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
          <Grid container>
       <Grid item xs={3}>
       <h3>Sofa </h3>
        <Typography> 1 Seater Sofa</Typography>
        <h5>Wooden</h5>
        <Typography> 2 Seater Sofa</Typography>
        <h5>Wooden</h5>
        <Typography> 3Seater Sofa</Typography>
        <h5>Fabric</h5>
        <h5>Sofa cum Bed</h5>
        <Typography> Sectional Sofa</Typography>
        <h5> 4 piece</h5>
        <Typography> Sofa Forest</Typography>
        <Typography> Ottoman</Typography>

       </Grid>
       <Grid item xs={2} sx={{marginTop:"48px"}}>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>

       </Grid>
       <Grid item xs={3}>
        <h3>Table</h3>
        <Typography>Center/Coffe</Typography>
         <h5>Wooden</h5>
         <Typography> Teapoy</Typography>
         <h5>Glass</h5>
         <Typography> SideTable</Typography>
         <h5>Glass</h5>
         <Typography> 4 Seater DainingTable</Typography>
         <h5>Metal Dismatable</h5>
         <Typography>Ironbord</Typography>
         <Typography>Plastictable</Typography>
         <Typography>Draftictable</Typography>

         
        </Grid>
        <Grid item xs={4} sx={{marginTop:"50px"}}>
       <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>

     </Grid>
        </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{marginTop:"5px",backgroundColor:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 ,color:"#f53527"}}>
            Custom Items<LooksOneSharpIcon/>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container>
       <Grid item xs={3}>
       <h3>Sofa </h3>
        <Typography> 1 Seater Sofa</Typography>
        <h5>Wooden</h5>
        <Typography> 2 Seater Sofa</Typography>
        <h5>Wooden</h5>
        <Typography> 3Seater Sofa</Typography>
        <h5>Fabric</h5>
        <h5>Sofa cum Bed</h5>
        <Typography> Sectional Sofa</Typography>
        <h5> 4 piece</h5>
        <Typography> Sofa Forest</Typography>
        <Typography> Ottoman</Typography>

       </Grid>
       <Grid item xs={2} sx={{marginTop:"48px"}}>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>

       </Grid>
       <Grid item xs={3}>
        <h3>Table</h3>
        <Typography>Center/Coffe</Typography>
         <h5>Wooden</h5>
         <Typography> Teapoy</Typography>
         <h5>Glass</h5>
         <Typography> SideTable</Typography>
         <h5>Glass</h5>
         <Typography> 4 Seater DainingTable</Typography>
         <h5>Metal Dismatable</h5>
         <Typography>Ironbord</Typography>
         <Typography>Plastictable</Typography>
         <Typography>Draftictable</Typography>

         
        </Grid>
        <Grid item xs={4} sx={{marginTop:"50px"}}>
       <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>
        <h4>1</h4>

     </Grid>
        </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
