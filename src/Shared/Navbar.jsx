import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);
  const HandleLogout = () => {
    Logout().then(() => {
      Swal.fire({
        icon: "success",
        title: "Successful",
        text: "  Successfully LogOut ",
      });
    });
  };

  const nav = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-[#FFDC39] rounded-none font-bold  "
              : " "
          }
        >
          Home{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-[#FFDC39] rounded-none font-bold  "
              : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-[#FFDC39] rounded-none font-bold  "
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
      {/* dropdown */}

      {user && (
        <details className="dropdown">
          <summary className="m-1 ">Dashboard</summary>
          {/* <li className="m-1 ">Dashboard</li> */}
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <NavLink
                to="/addservices"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " bg-[#FFDC39] rounded-none font-bold  "
                    : ""
                }
              >
                Add-services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myservices"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " bg-[#FFDC39] rounded-none font-bold  "
                    : ""
                }
              >
                My-services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/myschedule"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " bg-[#FFDC39] rounded-none font-bold  "
                    : ""
                }
              >
                My-schedules
              </NavLink>
            </li>
          </ul>
        </details>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100  h-24 ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <Link to="/">
          <img
            className=" lg:w-[300px] w-[100px]  "
            src="./oneservice-logo-RGB-no-subline.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1  ">{nav}</ul>
      </div>
      {/* <div className="navbar-end ">
        <Link to="/login">
          <button className="btn btn-ghost ">Login</button>
        </Link>
      </div> */}
      <div className="navbar-end ">
        {user ? (
          <div className="flex">
            <div className=" flex  flex-col lg:flex-row items-center gap-2 lg:mr-3">
              <span className="lg:text-lg  font-semibold">
                {user.displayName}
              </span>
              <div className="avatar">
                <div className="w-8 mask rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>

            <button onClick={HandleLogout} className="btn btn-ghost ">
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-ghost ">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
