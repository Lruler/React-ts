import React from 'react';
import img from '../../static/images/download.jpg';
import img1 from '../../static/images/download-1.jpg';
import img2 from '../../static/images/download-2.jpg';
import img3 from '../../static/images/download-3.jpg';
import img4 from '../../static/images/download-4.jpg';
import img5 from '../../static/images/download-5.jpg';
import './index.css';

const Abbr: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="out-div out-front">
            <img src={img} alt="" />
          </div>
          <div className="out-div out-back">
            <img src={img1} alt="" />
          </div>
          <div className="out-div out-left">
            <img src={img2} alt="" />
          </div>
          <div className="out-div out-right">
            <img src={img3} alt="" />
          </div>
          <div className="out-div out-top">
            <img src={img4} alt="" />
          </div>
          <div className="out-div out-bottom">
            <img src={img5} alt="" />
          </div>

          <div className="in-div in-front">
            <img src={img} alt="" />
          </div>
          <div className="in-div in-back">
            <img src={img1} alt="" />
          </div>
          <div className="in-div in-left">
            <img src={img2} alt="" />
          </div>
          <div className="in-div in-right">
            <img src={img3} alt="" />
          </div>
          <div className="in-div in-top">
            <img src={img4} alt="" />
          </div>
          <div className="in-div in-bottom">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Abbr;
