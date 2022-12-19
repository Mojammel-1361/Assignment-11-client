import React from 'react';
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spenner = () => {
    let [color, setColor] = useState("#46C2CB");

    return (
      <div className="sweet-loading flex items-center justify-center ">
        <ClipLoader
          color={color}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
};

export default Spenner;