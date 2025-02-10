import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image1 from '../Images/image1.jpeg';
import Image2 from '../Images/images2.jpeg';
import Image3 from '../Images/images3.jpeg';

const Baner = () => {
  const images = [Image1, Image2, Image3];
    // "/images/devImage1.jpg",
    // "/images/devImage2.jpg",
    // "/images/devImage3.jpg",
    // "https://media.istockphoto.com/id/1294971867/vector/devops-software-development-and-it-operation-methodology.jpg?s=612x612&w=0&k=20&c=1wx83yJS4yKm0ObcIRTvzoGdSrJpJUdkRQNGrl7mUIU=",
    // "https://t4.ftcdn.net/jpg/05/05/41/65/360_F_505416517_O3GFNtbjfyAuVwxYwovIFaGHMHgRS1kg.jpg",
    // "https://img.freepik.com/premium-photo/devops-web-development-operations-intertwined-infinity-symbol-design-concept-devops-web-development-operations-infinity-design_864588-233369.jpg?semt=ais_hybrid"
  

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      {/* Swiper Carousel - Responsive */}
      <div className="w-full max-w-7xl px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] object-cover rounded-lg shadow-md"
                style={{
                                        width: "1400px",
                                        height: "400px",
                                        margin: "auto",
                                        marginTop: "20px",
                                        display: "block",
                                        borderRadius: "10px",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                                      }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Heading & Description */}
      <div className="text-center mt-6 px-6 mb-8 mx-4">
  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-700" sx={{margin:"20px"}}>DevOps</h1>
  <p className="text-gray-700 mt-3 max-w-3xl text-sm sm:text-base leading-relaxed">
    DevOps is a software development methodology that combines 
    <strong> Development (Dev) </strong> and <strong> Operations (Ops) </strong> 
    to improve collaboration, automation, and deployment speed.
  </p>
</div>


    </div>
  );
};

export default Baner;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// const Baner = () => {
//   const images = [
//     "https://media.istockphoto.com/id/1294971867/vector/devops-software-development-and-it-operation-methodology.jpg?s=612x612&w=0&k=20&c=1wx83yJS4yKm0ObcIRTvzoGdSrJpJUdkRQNGrl7mUIU=",
//     "https://t4.ftcdn.net/jpg/05/05/41/65/360_F_505416517_O3GFNtbjfyAuVwxYwovIFaGHMHgRS1kg.jpg",
//     "https://img.freepik.com/premium-photo/devops-web-development-operations-intertwined-infinity-symbol-design-concept-devops-web-development-operations-infinity-design_864588-233369.jpg?semt=ais_hybrid"
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
//       {/* Swiper Carousel - Centered & Full Width */}
//       <div className="w-full flex justify-center">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop={true}
//           className="w-full max-w-screen-xl"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index} className="flex justify-center items-center">
//               <img
//                 src={img}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-[80vh] object-cover rounded-lg"
//                 style={{
//                       width: "1400px",
//                       height: "400px",
//                       margin: "auto",
//                       marginTop: "20px",
//                       display: "block",
//                       borderRadius: "10px",
//                       boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
//                     }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Heading & Description */}
//       <div className="text-center mt-6 px-4">
//         <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">DevOps</h1>
//         <p className="text-gray-700 mt-3 max-w-3xl text-sm sm:text-base leading-relaxed">
//           DevOps is a software development methodology that combines 
//           <strong> Development (Dev) </strong> and <strong> Operations (Ops) </strong> 
//           to improve collaboration, automation, and deployment speed.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Baner;



