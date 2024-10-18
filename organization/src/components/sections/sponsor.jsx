// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css'



// import { sponsor } from '../../assets/data/fakedata';

// export default function Sponsor() {
//   return (
//     <div className='sponsor-section'>
//         <div className="sponsor-container">
//           <Swiper
//           spaceBetween={50}
//           slidesPerView={3}
//           onSlideChange={() => console.log('slide change')}
//           onSwiper={(swiper) => console.log(swiper)}
//           >
//           <SwiperSlide>Slide 1</SwiperSlide>
//           <SwiperSlide>Slide 2</SwiperSlide>
//           <SwiperSlide>Slide 3</SwiperSlide>
//           <SwiperSlide>Slide 4</SwiperSlide>
//           ...
//           </Swiper>
//         </div>
//     </div>
//   )
// }


// <Swiper
// spaceBetween={30}
// centeredSlides={true}
// autoplay={{
//   delay: 2500,
//   disableOnInteraction: false,
// }}
// pagination={{
//   clickable: true,
// }}
// navigation={true}
// modules={[Autoplay, Pagination, Navigation]}
// className="mySwiper"
// >
// {
//  


// }

// </Swiper>





import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';



// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { sponsor } from '../../assets/data/fakedata';

export default function Sponsor() {
  return (
    <div className='sponsor-section'>
      <div>
         <h3>Top Sponsor </h3>
      </div><br />
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
        }}
        draggable={true}
        loop={true}
       
        className="mySwiper"
      >
        {
          sponsor.map((items) =>{
                return(
                  <SwiperSlide  key={items.company}>
                    <div className="items">
                        <span>
                            <img src={items.image} alt={items.company} />
                        </span>
                        <p>{items.company}</p>
                    </div>             
                  </SwiperSlide>
                )
              })
        }
      </Swiper>
    </div>
  );
}
