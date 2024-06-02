import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    password: '',
    section: '',
    branch: '',
    rollno: '',
    year: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/addstudent', studentData);
      console.log(response.data);
      if (response.data.success === true) {
        toast.success(response.data.message);
      } else {
        toast.error("All fields are mandatory!");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("An error occurred while adding the student.");
    }
    setStudentData({
      name: '',
      email: '',
      password: '',
      rollno: '',
      branch: '',
      section: '',
      year: ''
    });
  };

  return (
    <>
      <Topbar />
      <div className='flex'>
        <Sidebar />
        <div className="p-8 ml-64 w-full max-w-3xl mt-20">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Add Student</h1>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={studentData.name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={studentData.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={studentData.password}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rollno" className="block text-sm font-medium text-gray-700">Roll Number</label>
              <input
                type="text"
                id="rollno"
                name="rollno"
                value={studentData.rollno}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
              <select
                id="branch"
                name="branch"
                value={studentData.branch}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="">Select Branch</option>
                <option value="CS">CS</option>
                <option value="CSE">CSE</option>
                <option value="CSDS">CSDS</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="EN">EN</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="section" className="block text-sm font-medium text-gray-700">Section</label>
              <select
                id="section"
                name="section"
                value={studentData.section}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
              <input
                type="text"
                id="year"
                name="year"
                value={studentData.year}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Add Student
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddStudent;
