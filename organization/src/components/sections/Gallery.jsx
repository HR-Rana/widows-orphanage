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
        <div className='gallery-items'>
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
        <div className='gallery-items'>
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
        <div className='gallery-items'>
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
        <div className='gallery-items'>
            {
              videos.map((items, index) => {
                return (
                  <div key={index} className='item'>
                        <iframe width="100%" height="363" src="https://www.youtube.com/embed/iUtnZpzkbG8?list=PLGoWuvyH709vpTCVrjaJtaaFfite9U6u8" title="No Copyright Drone Shots | Royalty free drone shots | free stock videos | Drone footage nature shots" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
                  </div>
                )
              })
            }
        </div>
      </CustomTabPanel>
    </Box>
  );
}


