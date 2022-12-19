import React from 'react';
import baner1 from '../../../img/b1.png'
import baner2 from '../../../img/b2.png'
import baner3 from '../../../img/b3.png'

const Baner = () => {
    return (
      <div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img alt="" src={baner2} className="w-full h-96" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img alt="" src={baner1} className="w-full h-96" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img alt="" src={baner3} className="w-full h-96" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
    );
};

export default Baner;