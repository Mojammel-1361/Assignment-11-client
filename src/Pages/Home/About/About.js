import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../../img/doctor review.jpeg';

const About = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img
              alt="/"
              src={about}
              className="max-w-md rounded-lg shadow-2xl w-96"
            />
            <div>
              <h1 className="text-5xl font-bold">
                About This Doctor Rating Site
              </h1>
              <p className="py-6">
                Reviews: Doctors, dentists, chiropractors, acupuncturists,
                psychologists, and other specialists
                <br />
                <br /> Rating format: Percentage of patients that recommend the
                health provider. Each professional is ranked based on the
                criteria you selected for sorting. <br />
                <br />
                What you can find: A list of specialists near you that you can
                sort based on what's most important to you. For instance, you
                can sort by quality and patient feedback, type of insurance they
                accept, distance from you, and the doctor's gender.
                <br />
                <br /> Details you can see: Directions and maps. How long health
                professionals have been in practice, their education and
                training, licensing and certification, how many office locations
                they have, hospital affiliations, what types of insurance they
                cover, languages spoken, and whether they are accepting new
                patients.
              </p>
              <Link to="/login" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;