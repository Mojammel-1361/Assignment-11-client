import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icon from "../../img/doctor_logo.jpeg";
import { AuthContext } from '../../contex/AuthProvidor/AuthProvidor';
import {
  GoogleAuthProvider,
  
} from "firebase/auth";
import useTitle from '../../Hook/useTitle';

const Login = () => {
  // const location = useLocation();
  const navigate = useNavigate();
    useTitle('Login')
    const [error, setError] =useState('');

    const {googleLogin} = useContext(AuthContext)
    const provider = new GoogleAuthProvider();
     
     
    const handleGoogle = () =>{
        googleLogin(provider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            navigate('/');
          })
          .catch((err) => console.error(err));
        
    }
    const {signIn} =useContext(AuthContext);

    
    const handleLogin = event =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        signIn(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setError('');
            from.reset();
            navigate('/');
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
        });
    }


    return (
      <div>
        <div className="hero w-full">
          <div className="hero-content grid md:grid-cols-2 mx-auto  flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <img className="w-52" src={icon} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm py-10 shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <p className="text-xl">Login</p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
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
                    value="Login"
                  />

                  <input
                    onClick={handleGoogle}
                    className="btn btn-primary mt-5"
                    type="submit"
                    name=""
                    value="Google SignUp"
                  />
                </div>
              </form>
              <p className="mx-auto">
                New User this side{" "}
                <Link className="text-orange-600" to="/signup">
                  SignUp
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;