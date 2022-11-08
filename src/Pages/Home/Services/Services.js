import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
      <div>
        <div className='text-center m-5'>
          <p className="text-2xl font-bold">My all services Hear</p>
          <p>
            well-known retailer of medicine in Bangladesh. We provide all kinds
            of life saving medicine, which are available in all branches of
            Popular Diagnostics Ltd. Our aim is to provide good medicine and
            best service quality to the patients.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {/* <h2>services: {services.length}</h2> */}
            {
                services.map(service => <ServicesCard
                key={service._id}
                service={service}
                ></ServicesCard>)
            }
        </div>
      </div>
    );
};

export default Services;