import React from 'react';


const Address = () => {
    return (
      <div>
        <div className="hero  bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row ">
            <iframe
              width="406"
              height="412"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=dhaka&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
           
            <div>
              <h1 className="text-5xl font-bold">Chamber Address</h1>
              <p className="py-6">
                Address: Sabamun Tower, 152/1/H Green Rd, Dhaka 1205
                <br />
                Mobile: 01733543615
              </p>

              <p className="text-2xl font-bold">Open Hours:</p>
              <p className="py-6 text-xl gap-1">
                Wednesday 9AM 11PM <br />
                Thursday 9AM 11PM
                <br /> Friday 5AM 12PM
                <br /> Saturday 9AM 11PM
                <br /> Sunday 9AM 11PM
                <br /> Monday 9AM 11PM
                <br /> Tuesday 9AM 11PM
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Address;