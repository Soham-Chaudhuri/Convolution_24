// import React from "react";
// // import "swiper/react"
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { EffectCoverflow, Navigation } from "swiper";
// import 'swiper/css';

// // Import Swiper styles
// // import "swiper/swiper-bundle.min.css";

// // Install Swiper modules
// SwiperCore.use([EffectCoverflow, Navigation]);

// const YourComponent = () => {
//   return (
//     <div className="re_dashboard_body">
//       <h1>New Movies</h1>

//       {/* Swiper */}
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView="auto"
//         coverflowEffect={{
//           rotate: 15,
//           stretch: 0,
//           depth: 300,
//           modifier: 1,
//           slideShadows: false,
//         }}
//         loop={true}
//       >
//         {/* Repeat the following block for each card */}
//         <SwiperSlide>
//           <div class="card">
//             <div class="card_top">
//               <div class="card_img">
//                 <img
//                   src="./public/inquizzitive-logo-1@2x.png"
//                   alt="Card Image"
//                 />
//               </div>
//               <div class="card_top_para">
//                 <span class="card_top_span"> Last Date to Apply: </span>
//                 <br />
//                 <span class="card_top_date"> XX YY ZZZZ </span>
//                 <br />
//                 <span class="card_top_event">
//                   Event on: <br />
//                   <span class="card_top_date">XX YY ZZZZ</span>
//                 </span>
//               </div>
//             </div>
//             <div class="card_mid_bar"></div>
//             <div class="card-content">
//               <p class="card-text">Lorem ipsum</p>
//               <a href="#" class="card_top_date">
//                 Know more
//               </a>
//               <div class="card-title">Register Now &#8594;</div>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div class="card">
//             <div class="card_top">
//               <div class="card_img">
//                 <img
//                   src="./public/inquizzitive-logo-1@2x.png"
//                   alt="Card Image"
//                 />
//               </div>
//               <div class="card_top_para">
//                 <span class="card_top_span"> Last Date to Apply: </span>
//                 <br />
//                 <span class="card_top_date"> XX YY ZZZZ </span>
//                 <br />
//                 <span class="card_top_event">
//                   Event on: <br />
//                   <span class="card_top_date">XX YY ZZZZ</span>
//                 </span>
//               </div>
//             </div>
//             <div class="card_mid_bar"></div>
//             <div class="card-content">
//               <p class="card-text">Lorem ipsum</p>
//               <a href="#" class="card_top_date">
//                 Know more
//               </a>
//               <div class="card-title">Register Now &#8594;</div>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Repeat for each slide */}
//       </Swiper>
//     </div>
//   );
// };

// export default YourComponent;
