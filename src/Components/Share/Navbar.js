import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const navigate = useNavigate();
  const [booking, setBooking] = useState([]);
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`https://boxberry.onrender.com/carBooking/${email}`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, [booking]);

  const handleBook = () => {
    navigate('/myOrders');
  };

  const menuItems = <></>;
  return (
    <div className="  navbar bg-green-900  text-white ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black "
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case font-extrabold lg:text-3xl  sm:text-sm text-amber-500"
        >
          <img className="h-12 mr-2" src="" alt="" />
          Smart Farming
        </Link>
      </div>

      <div className="navbar-end">
        {user?.email === 'abc@def.com' && (
          <div className="font-bold hover:text-orange-400 mr-5">
            <Link to="/solveDiseases">Solve Diseases</Link>
          </div>
        )}
        {user && (
          <div className="font-bold hover:text-orange-400 mr-5">
            <Link to="/showTreatment">Show Treatment</Link>
          </div>
        )}

        {user && (
          <div className="font-bold hover:text-orange-400 mr-5">
            <Link to="/treatment">Treatment of plants</Link>
          </div>
        )}
        <div className="font-bold hover:text-orange-400 mr-5">
          <Link to="/blogs">Blogs</Link>
        </div>
        <div className="font-bold hover:text-orange-400 mr-5">
          {user ? (
            <button className=" font-bold text-orange-500" onClick={logout}>
              Sign Out
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
