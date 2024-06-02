import React, { useEffect, useState } from 'react'
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import axios from 'axios';

const ShowStudent = () => {
    // Dummy student data
    const [students, setStudent] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = axios.get('http://localhost:8080/api/v1/auth/showallstudent');
                setStudent((await response).data);
                console.log((await response).data)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()
    }, [])

    return (
        <>
            <Topbar />
            <Sidebar />
            <div className="min-h-screen bg-gray-100 p-4 ml-64 mt-20">
                <h1 className="text-2xl font-bold mb-4">Student List</h1>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-300">Name</th>
                            <th className="py-2 px-4 border-b border-gray-300">Email</th>
                            <th className="py-2 px-4 border-b border-gray-300">Roll Number</th>
                            <th className="py-2 px-4 border-b border-gray-300">Branch</th>
                            <th className="py-2 px-4 border-b border-gray-300">Section</th>
                            <th className="py-2 px-4 border-b border-gray-300">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td className="py-2 px-4 border-b border-gray-300">{student.name}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{student.email}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{student.rollno}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{student.branch}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{student.section}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{student.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}


export default ShowStudent
