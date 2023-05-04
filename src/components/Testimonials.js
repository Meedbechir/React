import React from "react";
import Eliipse from "../Images/Ellipse.png";
import rachel from '../Images/rachel.png';
import monica from '../Images/monica.png';


const Testimonials = () => {
  const testimonials = [
    {
      img: Eliipse,
      para: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit",
      name: "Emily R.",
      poste: "Marketing Director",
    },
    {
      img: rachel, 
      para: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit",
      name: "Marta Silva",
      poste: "Chief Operating Officer",
    },
    {
      img: monica, 
      para: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit",
      name: "Jennie F.",
      poste: "Business Owner",
    }
  ];

  return (
    <div className="container-fluid py-5">
        <h3 className="text-center"> CLIENT TESTIMONIALS</h3>
      <div className="row">
        {testimonials.map((testimonials) => (
          <div className="col-4 mb-5 text-center py-5">
            <img src={testimonials.img} alt="" className="me-3 py-5" style={{width:"50px"}}/>
            <h5>
             {testimonials.para}
            </h5>
            <p className="text-lead fs-5">{testimonials.name}</p>
            <p className="mt-3 fs-4">
            {testimonials.poste}
            </p>
          </div>
        ))}

       
      </div>
    </div>
  );
};

export default Testimonials;
