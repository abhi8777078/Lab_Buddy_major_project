import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddSubject = () => {
  const [subjectData, setSubjectData] = useState({
    labName: '',
    labCode: '',
    faculty: '',
    branch: '',
    section: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubjectData({ ...subjectData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to submit subject data (e.g., send to backend)
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/addsubject', subjectData);
      if (response.data.success === true) {
        toast(response.data.message);
      }
      else {
        toast("All fields are Mandatory !");
      }
    } catch (error) {
      console.log(error.message)
    }
    console.log(subjectData);
    // Clear form fields
    setSubjectData({
      labName: '',
      labCode: '',
      faculty: '',
      branch: '',
      section: '',
      year: '',
    });
  };

  return (
    <>
      <Topbar />
      <div className='flex'>

        <Sidebar />

        <div className="p-4 ml-64 w-1/2 mt-20">
          <h1 className="text-2xl font-bold mb-4">Add Subject</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="labName" className="block text-sm font-medium text-gray-700">Lab Name</label>
              <input
                type="text"
                id="labName"
                name="labName"
                value={subjectData.labName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="labCode" className="block text-sm font-medium text-gray-700">Lab Code</label>
              <input
                type="text"
                id="labCode"
                name="labCode"
                value={subjectData.labCode}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="faculty" className="block text-sm font-medium text-gray-700">Faculty Name</label>
              <input
                type="text"
                id="faculty"
                name="faculty"
                value={subjectData.faculty}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
              <select
                id="branch"
                name="branch"
                value={subjectData.branch}
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
              <label htmlFor="section" className="block text-sm font-medium text-gray-700">Section</label>
              <select
                id="section"
                name="section"
                value={subjectData.section}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
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
                value={subjectData.year}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Subject
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddSubject;
