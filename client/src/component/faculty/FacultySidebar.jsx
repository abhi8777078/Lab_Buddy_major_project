import React from 'react'
import { Link } from "react-router-dom";

const FacultySidebar = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload(); 
        navigate('/');
    }
    return (
        <>
            <div className="flex">
                <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white w-64 flex flex-col h-full fixed shadow-lg transition-transform transform ">
                    <div className="flex items-center justify-center h-20 border-b border-blue-300">
                        <h1 className="text-2xl font-extrabold">Lab Buddy</h1>
                    </div>
                    <nav className="flex-grow overflow-y-auto">
                        <ul className="mt-6 space-y-2">
                            <li>
                                <Link
                                    to="/facultydashboard"
                                    className="block py-2 px-4 bg-blue-600 hover:bg-blue-800 rounded-md transition-colors duration-300"
                                >
                                    DASHBOARD
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/createassignment"
                                    className="block py-2 px-4 bg-blue-600 hover:bg-blue-800 rounded-md transition-colors duration-300"
                                >
                                    CREATE ASSIGNMENT
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/checkassignment"
                                    className="block py-2 px-4 bg-blue-600 hover:bg-blue-800 rounded-md transition-colors duration-300"
                                >
                                    CHECK ASSIGNMENT
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="py-4 px-4 border-t border-blue-300">
                        <button
                            onClick={handleLogout}
                            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-transform transform hover:scale-105"
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
    )
}

export default FacultySidebar
