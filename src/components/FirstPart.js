import React from "react";
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import imgg from '../Images/imgg.jpg';


const FirstPart = () => {
  const images = [
    {
      img: img1,
    },
    {
      img: img2, 
    },
    {
      img: img3, 
    },
    {
      img: img4,  
    },
    {
      img: img5,
    },
    {
      img: imgg,
    }
  ];

  return (
    <div className="container-fluid">
      <div className="row g-0">
        {images.map((images) => (
          <div className="col-6 mx-0">
            <img src={images.img} alt="" className="me-3" style={{width:'100%', height:'100%'}}/>
          </div>
        ))}

       
      </div>
    </div>
  );
};

export default FirstPart;
