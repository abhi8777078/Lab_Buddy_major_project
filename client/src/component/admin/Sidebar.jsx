import React from "react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
    navigate('/');
    // window.location.reload(); 
  }
  return (
    <>
      <div className="flex">
        <div className="bg-blue-600 text-white w-64 flex flex-col h-full fixed shadow-lg">
          <div className="flex items-center justify-center h-20 border-b border-blue-400">
            <h1 className="text-2xl font-extrabold">Lab Buddy</h1>
          </div>
          <nav className="flex-grow">
            <ul className="mt-6 space-y-2">
              <li>
                <Link
                  to="/addstudent"
                  className="block py-3 px-6 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  ADD STUDENT
                </Link>
              </li>
              <li>
                <Link
                  to="/addteacher"
                  className="block py-3 px-6 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  ADD FACULTY
                </Link>
              </li>
              <li>
                <Link
                  to="/addsubject"
                  className="block py-3 px-6 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  ADD SUBJECTS
                </Link>
              </li>
              <li>
                <Link
                  to="/showstudent"
                  className="block py-3 px-6 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  ALL STUDENT
                </Link>
              </li>
              <li>
                <Link
                  to="/showfaculty"
                  className="block py-3 px-6 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  ALL FACULTY
                </Link>
              </li>
              <li>
                <Link
                  to="/showsubject"
                  className="block py-3 px-6 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  ALL SUBJECTS
                </Link>
              </li>
            </ul>
          </nav>
          <div className="py-4 px-6 border-t border-blue-400">
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </div>
        {/* <div className="flex-grow">
          <Topbar />
          <Outlet />
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
