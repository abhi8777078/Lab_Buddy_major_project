import React, { useEffect, useState } from 'react';
import StudentTopbar from './StudentTopbar';
import StudentSidebar from './StudentSidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const navigate = useNavigate();
    const [assignments, setAssignments] = useState([]);
    const [userdata, setUserdata] = useState([]);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupText, setPopupText] = useState('');


    // submit assignment 
    const [submitass, setSubmitass] = useState({
        name: '',
        branch: '',
        section: '',
        labanswer: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubmitass(prevAssignment => ({
            ...prevAssignment,
            [name]: value,
        }));
    };
    // Function to toggle the popup and set the text
    const openPopup = (text) => {
        setPopupText(text);
        setIsPopupOpen(true);
    };

    // Function to close the popup
    const closePopup = () => {
        setIsPopupOpen(false);
        setPopupText('');
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = axios.get('http://localhost:8080/api/v1/auth/student/getassignment');
                setAssignments((await response).data);
                const studentUser = JSON.parse(localStorage.getItem('user'));
                setUserdata(studentUser);
                // console.log((await response).data)
                // console.log(studentUser.branch)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()
    }, [])

    const filteredData = assignments.filter(item => {
        return item.branch === userdata.branch && item.section === userdata.section;
    })

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/student/submitassignment', submitass);
            if (response.data.success === true) {
                toast("assignment submitted");
            }
            else {
                toast("All fields are Mandatory !");
            }
        } catch (error) {
            console.log(error.message)
        }
        setSubmitass(
            {
                name: '',
                branch: '',
                section: '',
                labanswer: ''
            }
        )
        setAssignments([])
    }
    return (
        <>
            <StudentTopbar />
            <StudentSidebar />

            <div className="min-h-screen bg-sky-500 p-6 ml-64 mt-16">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <h1 className="text-center text-3xl font-bold mb-6 text-sky-700">Practical Assignment List</h1>
                    <table className="w-full border-collapse border border-sky-700">
                        <thead>
                            <tr>
                                <th className="border border-sky-700 p-2">Subject</th>
                                <th className="border border-sky-700 p-2">Lab Statement</th>
                                <th className="border border-sky-700 p-2">Submit</th>
                                <th className="border border-sky-700 p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((filteredData, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border border-sky-700 p-2">{filteredData.labcode}</td>
                                    <td className="border border-sky-700 p-2">
                                        {filteredData.labstatement}
                                    </td>
                                    <td className="border border-sky-700 p-2">
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                                            onClick={() => openPopup('Lab Details for Experiment 1')}
                                        >
                                            Experiment 1
                                        </button>
                                    </td>
                                    <td className="border border-sky-700 p-2">
                                        false
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
            {/* Popup Box */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4">{popupText}</h2>
                        <form onSubmit={handlesubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={submitass.name}
                                    onChange={handleChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
                                <select
                                    id="branch"
                                    name="branch"
                                    value={submitass.branch}
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
                                    value={submitass.section}
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
                                <label className="block text-gray-700 font-bold mb-2">Lab Statement</label>
                                <textarea
                                    name="labanswer"
                                    value={submitass.labanswer}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
                                    onClick={closePopup}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Dashboard;