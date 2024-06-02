import React from 'react';
import adminImg from "../assets/admin.png";
import facultyImg from "../assets/faculty.png";
import studentImg from "../assets/student.png";
import { useNavigate } from "react-router-dom";

const HOME = () => {
    const navigate = useNavigate();
    const handleadminlogin = (e) => {
        e.preventDefault();
        navigate('/login');
    };
    const handleFacultyLogin = (e) => {
        e.preventDefault();
        navigate('/loginfaculty');
    };
    const handleStudentLogin = (e) => {
        e.preventDefault();
        navigate('/studentlogin');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
            <h1 className="text-5xl font-extrabold mb-12 drop-shadow-lg">LAB BUDDY</h1>
            <div className="flex justify-center gap-8 w-4/5">
                <div className="w-1/3 p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img src={adminImg} alt="Admin" className="w-32 h-32 mx-auto mb-4 rounded-full shadow-md" />
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin</h2>
                    <button
                        className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
                        onClick={handleadminlogin}
                    >
                        Login
                    </button>
                </div>
                <div className="w-1/3 p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img src={facultyImg} alt="Faculty" className="w-32 h-32 mx-auto mb-4 rounded-full shadow-md" />
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Faculty</h2>
                    <button
                        className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
                        onClick={handleFacultyLogin}
                    >
                        Login
                    </button>
                </div>
                <div className="w-1/3 p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <img src={studentImg} alt="Student" className="w-32 h-32 mx-auto mb-4 rounded-full shadow-md" />
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Student</h2>
                    <button
                        className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
                        onClick={handleStudentLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HOME;
