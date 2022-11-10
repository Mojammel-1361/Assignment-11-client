import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contex/AuthProvidor/AuthProvidor";
import useTitle from "../../Hook/useTitle";
import AllComentRow from "./AllComentRow";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Details = () => {
  useTitle("Details");
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  const { _id, img, title, description, price } = useLoaderData();
  const hendelPlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const dept = form.dept.value;
    const name = form.name.value;
    const email = form.email.value;
    const massages = form.massages.value;

    const review = {
      service: _id,
      dept,
      name,
      email,
      massages,
    };

    fetch("https://doctor-server-two.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review Done Successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch("https://doctor-server-two.vercel.app/allRevievs")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="card card-compact mx-auto w-4/6 m-10 bg-base-100 shadow-xl">
        <figure>
          <PhotoProvider>
            {
              <PhotoView src={img}>
                <img src={img} alt="Shoes" />
              </PhotoView>
            }
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2>{description}</h2>
          <div className="card-actions justify-between">
            <div className="text-xl">Visiting price: {price} $</div>
            <Link to="/seeall" className="btn btn-primary btn-xs">
              back
            </Link>
          </div>
        </div>
      </div>

      {/* start */}

      <div className="card card-compact mx-auto w-4/6 m-10 bg-base-100 shadow-xl">
        <div className="overflow-x-auto w-full">
          <samp className="mx-auto text-2xl">Review</samp>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name & Email</th>
                {/* <th>Email</th> */}

                <th>Review/Massages</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <AllComentRow
                  key={service._id}
                  service={service}
                ></AllComentRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* end */}

      <div>
        <form onSubmit={hendelPlaceReview}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mx-auto w-4/6">
            <samp className="mx-auto text-4xl">Write Your Review</samp>
            <samp className="mx-auto text-2xl">
              Your are write about to {title}.
            </samp>
            <input
              name="dept"
              type="text"
              placeholder="Name"
              defaultValue={title}
              readOnly
              className="input input-bordered w-full "
            />
            <input
              name="name"
              type="text"
              placeholder="Name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full "
              required
            />
            <input
              required
              name="email"
              type="text"
              placeholder="Email"
              defaultValue={user?.email}
              className="input input-bordered w-full "
            />
            <textarea
              name="massages"
              className="textarea textarea-accent "
              placeholder="Your Review"
              required
            ></textarea>

            {user?.email ? (
              <>
                <input className="btn" type="submit" name="" value="Review" />
              </>
            ) : (
              <>
                <Link className="btn text-red-600   " to="/login">
                  Place Login and Post Review
                </Link>{" "}
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
