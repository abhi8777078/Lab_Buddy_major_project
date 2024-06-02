import React, { useEffect, useState } from 'react'
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import axios from 'axios';

const ShowSubject = () => {
    const [subjects, setSubject] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/auth/showallsubject');
                setSubject(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])


    return (
        <>
            <Topbar />
            <Sidebar />
            <div className="min-h-screen bg-gray-100 p-4 ml-64 mt-20">
                <h1 className="text-2xl font-bold mb-4">Subject List</h1>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-300">Lab Name</th>
                            <th className="py-2 px-4 border-b border-gray-300">Lab Code</th>
                            <th className="py-2 px-4 border-b border-gray-300">Faculty Name</th>
                            <th className="py-2 px-4 border-b border-gray-300">Branch</th>
                            <th className="py-2 px-4 border-b border-gray-300">Section</th>
                            <th className="py-2 px-4 border-b border-gray-300">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map(subject => (
                            <tr key={subject.id}>
                                <td className="py-2 px-4 border-b border-gray-300">{subject.labName}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{subject.labCode}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{subject.faculty}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{subject.branch}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{subject.section}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{subject.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ShowSubject
