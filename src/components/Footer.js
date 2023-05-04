import React from 'react';
const Footer = () => {
  return (
    <footer>
        <div className="container-fluid py-5" style={{backgroundColor:"#90d4c5"}}>
            <div className="row">
                <p className='text-center h2'>sunnyside</p>
                <div className=" col-4 d-flex justify-content-around mx-auto py-5">
                    <a href="/" className='text-decoration-none text-dark'>
                    About 
                   </a> 
                    <a href="/" className='text-decoration-none text-dark'>
                    Services 
                    </a> 
                    <a href="/" className='text-decoration-none text-dark'>
                    Projects
                    </a>
                    
                </div>
            <p>
                
            </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer