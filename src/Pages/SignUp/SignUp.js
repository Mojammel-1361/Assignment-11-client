import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../img/doctor_logo.jpeg";
import { AuthContext } from "../../contex/AuthProvidor/AuthProvidor";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handelUpdateUserProfile(name);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handelUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="hero w-100% ">
        <div className="hero-content grid md:grid-cols-2 mx-auto  flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-52" src={icon} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm py-10 shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <p className="text-xl">Registration</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    href=""
                    className="text-red-600 label-text-alt link link-hover"
                  >
                    {error}
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  name=""
                  value="Sing Up"
                />
              </div>
            </form>
            <p className="mx-auto">
              Already have a account{" "}
              <Link className="text-orange-600" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
