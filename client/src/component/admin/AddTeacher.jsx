import React, { useState } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddTeacher = () => {
  const [teacherData, setTeacherData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    branch: '',
    contactno: '',
    joiningyear: '',
    dob: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({ ...teacherData, [name]: value });
  };

  const handleSubjectChange = (e) => {
    const options = e.target.options;
    const selectedSubjects = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedSubjects.push(options[i].value);
      }
    }
    setTeacherData({ ...teacherData, subjects: selectedSubjects });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add logic to submit teacher data (e.g., send to backend)
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/addfaculty', teacherData);
      console.log(response.data);
      if (response.data.success === true) {
        toast(response.data.message);
      }
      else {
          toast("All fields are Mandatory !");
      }
    } catch (error) {
      console.log(error.message)
    }
    console.log(teacherData);
    // Clear form fields
    setTeacherData({
      name: '',
      email: '',
      password: '',
      gender: '',
      branch: '',
      contactno: '',
      joiningyear: '',
      dob: ''
    });
  };

  return (
    <>
      <Topbar />
      <div className='flex'>
        <Sidebar />
        <div className="p-4 ml-64 w-1/2 mt-20">
          <h1 className="text-2xl font-bold mb-4">Add Teacher</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={teacherData.name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={teacherData.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={teacherData.password}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">gender</label>
              <select
                id="gender"
                name="gender"
                value={teacherData.gender}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="">Select gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
              <select
                id="branch"
                name="branch"
                value={teacherData.branch}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              >
                {/* ['CS','CSE','CSDS','IT','ECE','EN'] */}
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
              <label htmlFor="contactno" className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="number"
                id="contactno"
                name="contactno"
                value={teacherData.contactno}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="joiningyear" className="block text-sm font-medium text-gray-700">joiningyear</label>
              <input
                type="joiningyear"
                id="joiningyear"
                name="joiningyear"
                value={teacherData.joiningyear}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">dob</label>
              <input
                type="dob"
                id="dob"
                name="dob"
                value={teacherData.dob}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Teacher
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTeacher;
