import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contex/AuthProvidor/AuthProvidor";
import useTitle from "../../../Hook/useTitle";
import Spenner from "../../../Spenner/Spenner";
import ServicesCard from "./ServicesCard";

const Services = () => {
  useTitle("Services");
  const [loding, setLoding] = useState(false);
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setLoding(true);
    fetch("https://doctor-server-two.vercel.app/services")
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
        <p className="text-3xl font-bold">
          I am skilled and Experienced in the following subject
        </p>
        <p className="m-5">
          well-known retailer of medicine in Bangladesh. We provide all kinds of
          life saving medicine, which are available in all branches of Popular
          Diagnostics Ltd. Our aim is to provide good medicine and best service
          quality to the patients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* <h2>services: {services.length}</h2> */}
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>

      <div className="flex justify-center mb-5">
        {user?.email ? (
          <>
            <Link className="btn btn-wide m-5" to="/seeall">
              See All
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Services;
