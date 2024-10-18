import React from 'react'
import { useState } from 'react'
import { Gallary, GallaryVideos } from '../../assets/data/fakedata'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Pagination from '../pagination/pagination';




export default function Gallery() {

  const [filter, setFilter] = useState(Gallary)
  const [video, setVideo] = useState(GallaryVideos)


  const handleTabClick = (types) => {
     const setTypes = Gallary.filter((elem, i) =>{
      return elem.catagory === types;
     })
     console.log(setTypes)
     setFilter(setTypes)
  }


  return (
    <Tabs>
    <TabList>
    <div className='tabs-items'>
        <Tab onClick={()=>{setFilter(Gallary)}}><li>all</li></Tab>
      <Tab onClick={()=>{handleTabClick("orphanage")}}><li >Orphanage</li></Tab>
      <Tab onClick={()=>{handleTabClick("widows")}}><li >widows</li></Tab>
      <Tab><li>Videos</li></Tab>
        </div>
    </TabList>

    <TabPanel>
    <div className='gallery-items'>
          {
            filter.map((items, index)=>{
              return (
                <div key={index} className='item'>
                  <img src={items.image} alt={items.name}/>
                </div>
              )
            })
          }
        </div>
    </TabPanel>
    <TabPanel>
    <div className='gallery-items'>
          {
            filter.map((items, index)=>{
              return (
                <div key={index} className='item'>
                  <img src={items.image} alt={items.name}/>
                  <div className='gallery-item-info'>
                    <h3>{items.name}</h3>
                    <p>{items.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
    </TabPanel> 
    <TabPanel>
    <div className='gallery-items'>
          {
            filter.map((items, index)=>{
              return (
                <div key={index} className='item'>
                  <img src={items.image} alt={items.name}/>
                  <div className='gallery-item-info'>
                    <h3>{items.name}</h3>
                    <p>{items.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
    </TabPanel> 
    <TabPanel>
    <div className='gallery-items'>
          {
            video.map((items, index)=>{
              return (
                <div key={index} className='item'>
                  <video src={'https://www.youtube.com/watch?v=l8QMO7DM5vc&pp=ygUGd2lkb3dz'} controls width={'100%'} type="video/mp4"></video>
                </div>
              )
            })
          }
        </div>
    </TabPanel>
      <div className="pagination">
          <Pagination />
      </div>
  </Tabs>

  )
}




