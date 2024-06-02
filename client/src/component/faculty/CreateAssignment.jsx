import React, { useState } from 'react';
import FacultySidebar from './FacultySidebar';
import FacultyTopbar from './FacultyTopbar';
import axios from 'axios';
import { toast } from 'react-toastify';

const CreateAssignment = () => {
    const [assignment, setAssignment] = useState({
        labstatement: '',
        branch: '',
        section: '',
        year: '',
        labcode: '',
        lastdate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAssignment(prevAssignment => ({
            ...prevAssignment,
            [name]: value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log('Assignment Created:', assignment);
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/faculty/createassignment', assignment);
            if (response.data.success === true) {
                toast(response.data.message);
            }
            else {
                toast("All fields are Mandatory !");
            }
        } catch (error) {
            console.log(error.message)
        }
        
        // Reset the form
        setAssignment({
            labstatement: '',
            branch: '',
            section: '',
            year: '',
            labcode: '',
            lastdate: '',
        });
    };



    return (
        <>
            <FacultySidebar />
            <FacultyTopbar />
            <div className="min-h-screen bg-sky-500 p-6 ml-64 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h1 className="text-center text-3xl font-bold mb-6 text-sky-700">Create Assignment</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Lab Statement</label>
                            <textarea
                                name="labstatement"
                                value={assignment.labstatement}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
                            <select
                                id="branch"
                                name="branch"
                                value={assignment.branch}
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
                                value={assignment.section}
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
                            <label className="block text-sm font-medium text-gray-700">Lab Code</label>
                            <input
                                type="text"
                                name="labcode"
                                value={assignment.labcode}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Year</label>
                            <input
                                type="text"
                                name="year"
                                value={assignment.year}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Last Submission Date</label>
                            <input
                                type="date"
                                name="lastdate"
                                value={assignment.lastdate}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded"
                            >
                                Create Assignment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateAssignment;