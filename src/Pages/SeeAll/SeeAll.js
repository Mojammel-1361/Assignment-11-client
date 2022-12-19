import React, { useEffect, useState } from "react";
import useTitle from "../../Hook/useTitle";
import Spenner from "../../Spenner/Spenner";
import SeeAllCard from "./SeeAllCard";

const SeeAll = () => {
  const [loding, setLoding] = useState(false);
  useTitle("allService");
  const [services, setServices] = useState([]);
  useEffect(() => {
    setLoding(true);
    fetch("https://doctor-server-two.vercel.app/servicesAll")
      .then((res) => res.json())
      .then((data) => {
        setLoding(false);
        setServices(data);
      });
      
  }, []);
  if (loding) {
    return <Spenner></Spenner>;
  }
  return (
    <div>
      <div className="text-center m-8">
        <p className="text-4xl font-bold">
          I am skilled and Experienced in the following subject
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* <h2>services: {services.length}</h2> */}
        {services.map((service) => (
          <SeeAllCard key={service._id} service={service}></SeeAllCard>
        ))}
      </div>
    </div>
  );
};

export default SeeAll;
