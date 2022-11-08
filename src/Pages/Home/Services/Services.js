import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:6600/services")
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[])
    return (
      <div>
        <div className="text-center m-8">
          <p className="text-3xl font-bold">
            I am skilled and Experienced in the following subject
          </p>
          <p className="m-5">
            well-known retailer of medicine in Bangladesh. We provide all kinds
            of life saving medicine, which are available in all branches of
            Popular Diagnostics Ltd. Our aim is to provide good medicine and
            best service quality to the patients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* <h2>services: {services.length}</h2> */}
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </div>

        <div className="flex justify-center">
            <Link className="btn btn-wide m-5" to="/seeall">
              See All
            </Link>
        </div>
      </div>
    );
};

export default Services;