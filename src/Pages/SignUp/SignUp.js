import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../img/doctor_logo.jpeg";
import { AuthContext } from "../../contex/AuthProvidor/AuthProvidor";
import useTitle from "../../Hook/useTitle";
import Spenner from "../../Spenner/Spenner";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [loding, setLoding] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  useTitle("SingUp");
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    setLoding(true);
    createUser(email, password)
      .then((result) => {
        setLoding(false)
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate("/");
        toast.success("SingUp successfully");
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
  if (loding){
    return <Spenner></Spenner>;
  }
  return (
    <div>
      <div className="hero w-full">
        <div className="hero-content ">
          <div className="text-center lg:text-left">
            <img className="w-52" src={icon} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm py-10 shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <p className="text-xl">New Member Registration</p>
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
