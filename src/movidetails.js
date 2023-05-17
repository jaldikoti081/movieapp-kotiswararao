import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import LogoutIcon from '@mui/icons-material/Logout';
import Dummy from "./dummy";
import Simple from "./step1";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

export default function Movies() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const styles = theme => ({
    indicator: {
      backgroundColor: 'white',
    },
  })

  return (
    <div>
      <img src="https://boxigo.in/assets/images/home/boxigo_logo_small.png" style={{width:"150px",marginTop:"30px",marginLeft:"50px"}}/>
    <Box

      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 290,
        paddingTop:"70px",
      }}
    >
  
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={styles.tabs}
         TabIndicatorProps={{
          style: { background: "#f53527", height: 70}
         }}
        sx={{ borderRight: 0, borderColor: "divider",width:"250px"}}
      >
        
        <Tab icon={< LocalShippingIcon style={{color:"#f53527"}}  className={styles.tabs}/>}iconPosition="start" label="My MOVIES" {...a11yProps(0)}  />
        <Tab icon={< PersonIcon style={{color:"#f53527"}}  className={styles.tabs}/>}iconPosition="start" label="MY PROFILE" {...a11yProps(1)} />
        <Tab icon={< RequestQuoteIcon style={{color:"#f53527"}}  className={styles.tabs}/>}iconPosition="start" label="GET QUOTE" {...a11yProps(2)} />
        <Tab icon={< LogoutIcon style={{color:"#f53527"}} className={styles.tabs} />}iconPosition="start" label="LOGOUT" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
         <Simple/>

      </TabPanel>
      <TabPanel value={value} index={1}>
         My profile

      </TabPanel>
      <TabPanel value={value} index={2}>
        get Quote

      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four

      </TabPanel>
    </Box>
    </div>
  );
}
