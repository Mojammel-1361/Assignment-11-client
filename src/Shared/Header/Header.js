import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthProvidor/AuthProvidor';
import logo from '../../img/doctor_logo.jpeg'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const menuItem = <>
    <li>
        <Link className='font-semibold' to='/'>Home</Link>
     </li>
    <li>
        
     </li>
    </>

    const handelLogOut = () =>{
        logOut()
        .then( () =>{})
        .catch(error => console.error(error))
    }
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItem}
              </ul>
            </div>
            <p className="btn btn-ghost normal-case text-xl">
              <img className="w-9" src={logo} alt="" />
              <h1>P_Doctor </h1>
            </p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItem}</ul>
          </div>
          <div className="navbar-end">
            <a href="/">
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <button onClick={handelLogOut} className="btn btn-xs m-1">
                    Log Out
                  </button>
                </>
              ) : (
                <button className="btn btn-outline btn-primary">
                  <Link className="font-semibold " to="/login">
                    Login
                  </Link>
                </button>
              )}
            </a>
          </div>
        </div>
      </div>
    );
};

export default Header;