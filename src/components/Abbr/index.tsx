import React from 'react';
import './index.css';

const Abbr: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="out-div out-front"></div>
          <div className="out-div out-back"></div>
          <div className="out-div out-left"></div>
          <div className="out-div out-right"></div>
          <div className="out-div out-top"></div>
          <div className="out-div out-bottom"></div>

          <div className="in-div in-front"></div>
          <div className="in-div in-back"></div>
          <div className="in-div in-left"></div>
          <div className="in-div in-right"></div>
          <div className="in-div in-top"></div>
          <div className="in-div in-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default Abbr;
