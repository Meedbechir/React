import React from "react";
import img0 from '../Images/img0.jpg';
import img7 from '../Images/img7.jpg';
import img8 from '../Images/img8.jpg';
import img9 from '../Images/img9.jpg';


const SecondPart = () => {
  const imgs = [
    {
      img: img0,
    },
    {
      img: img9, 
    },
    {
      img: img7, 
    },
    {
      img: img8,  
    }
  ];

  return (
    <div className="container-fluid">
      <div className="row g-0">
        {imgs.map((imgs) => (
          <div className="col-3 mb-5">
            <img src={imgs.img} alt="" className="me-3" style={{width:'100%', height:'100%'}}/>
          </div>
        ))}

       
      </div>
    </div>
  );
};

export default SecondPart;
