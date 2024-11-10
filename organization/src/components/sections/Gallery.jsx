import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Gallary, GallaryVideos } from '../../assets/data/fakedata';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [all, setAll] = useState(Gallary)
  const [orphanage, setOrpahange] = useState([])
  const [widows, setWidows] = useState([]);
  const [videos, setVideos] = useState(GallaryVideos);



  const widowsData = Gallary.filter((items)=> items.catagory === "widows");
  const orphanageData = Gallary.filter((items)=> items.catagory === "orphanage");
  
 


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} onClick={()=>setAll(Gallary)} />
          <Tab label="Orphanage" {...a11yProps(1)} onClick={()=>{setOrpahange(orphanageData)}} />
          <Tab label="Widows" {...a11yProps(2)} onClick={()=>{ setWidows(widowsData)}} />
          <Tab label="Videos" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
        {all < 1 ? <p style={{color:'red'}}>there are no itmes available</p>
             :
          all.map((items, index) => {
            return (
              <div key={index} className='item'>
                <img src={items.image} alt={items.alt} width={'100%'} />
              </div>
            )
          })
        }
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div>
            {orphanage < 1 ? <p style={{color:'red'}}>there are no itmes available</p>
             :
              orphanage.map((items, index) => {
                return (
                  <div key={index} className='item'>
                    <img src={items.image} alt={items.alt} width={'100%'} />
                  </div>
                )
              })
            }
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div>
            {widows < 1 ? <p style={{color:'red'}}>there are no itmes available</p>
             : widows.map((items, index) => {
                return (
                  <div key={index} className='item'>
                    <img src={items.image} alt={items.alt} width={'100%'} />
                  </div>
                )
              })
            }
        </div>
      </CustomTabPanel> 
      <CustomTabPanel value={value} index={3}>
        <div>
            {
              videos.map((items, index) => {
                return (
                  <div key={index} className='item'>
                    <video src={items.url} controls width={'100%'} type="video/mp4"></video>
                  </div>
                )
              })
            }
        </div>
      </CustomTabPanel>
    </Box>
  );
}


