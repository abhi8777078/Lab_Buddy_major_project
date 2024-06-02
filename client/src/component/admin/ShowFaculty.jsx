import React, { useEffect, useState } from 'react'
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import axios from 'axios';

const ShowFaculty = () => {
    // Dummy faculty data
    const [facultyMembers, setFacultyMembers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/auth/showallfaculty');
                setFacultyMembers(response.data);
            } catch (error) {
                
            }
        };
        fetchData();
    },[])

    return (
        <>
            <Topbar />
            <Sidebar/>
            <div className="min-h-screen bg-gray-100 p-4 ml-64 mt-20">
                <h1 className="text-2xl font-bold mb-4">Faculty List</h1>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-300">Name</th>
                            <th className="py-2 px-4 border-b border-gray-300">Email</th>
                            <th className="py-2 px-4 border-b border-gray-300">Branch</th>
                            <th className="py-2 px-4 border-b border-gray-300">Contact No</th>
                            <th className="py-2 px-4 border-b border-gray-300">Gender</th>
                            <th className="py-2 px-4 border-b border-gray-300">Joing Yr</th>
                            <th className="py-2 px-4 border-b border-gray-300">Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {facultyMembers.map(faculty => (
                            <tr key={faculty.id}>
                                <td className="py-2 px-4 border-b border-gray-300">{faculty.name}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{faculty.email}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{faculty.branch}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{faculty.contactno}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{faculty.gender}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{faculty.joiningyear}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{faculty.dob}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ShowFaculty
