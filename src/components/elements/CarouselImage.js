// import React from "react";
// import { Carousel } from "antd";

// import Image from "../../assets/image/image";

// function CarouselImage() {
//   return (
//     <div className="container w-100 carouselresp">
//       <Carousel autoplay>
//         <div>
//           <img src={Image.Carousel2} className="w-100" />
//         </div>
//         <div>
//           <img src={Image.Carousel3} className="w-100" />
//         </div>
//         <div>
//           <img src={Image.Carousel1} className="w-100" />
//         </div>
//       </Carousel>
//     </div>
//   );
// }

// export default CarouselImage;

// import React, { useEffect } from "react";
// import { Carousel } from "antd";
// import { connect } from "react-redux";
// import { getImage } from "../../redux/actions/mainactionslider";

// const CarouselImage = ({ sliderimages, getImage }) => {
//   useEffect(() => {
//     getImage();
//   }, []);

//   return (
//     <div className="container w-100 carouselresp">
//       {sliderimages ? (
//         <Carousel autoplay>
//           {sliderimages.map((image, index) => (
//             <div key={index}>
//               <img src={image.imageUrl} className="w-100" alt="carousel" />
//             </div>
//           ))}
//         </Carousel>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   sliderimages: state.sliderimages,
// });

// export default connect(mapStateToProps, { getImage })(CarouselImage);

import React, { useEffect } from "react";
import { Carousel } from "antd";
import { connect } from "react-redux";
import { getImage } from "../../redux/actions/mainactionslider";

const CarouselImage = ({ sliderimages, getImage }) => {
  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="container w-100 carouselresp">
      {sliderimages ? (
        <Carousel autoplay>
          {sliderimages.map((image) => (
            <div key={image.id}>
              <img src={image.imageUrl} className="w-100" alt="carousel" />
            </div>
          ))}
        </Carousel>
      ) : (
        <div>Loading...</div>

      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sliderimages: state.sliderimages,
});

export default connect(mapStateToProps, { getImage })(CarouselImage);
