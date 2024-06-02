import React, { useEffect, useState } from 'react'
import FacultySidebar from './FacultySidebar';
import FacultyTopbar from './FacultyTopbar';
import axios from 'axios';
const Faculty = () => {
    const [data, setData] = useState([])
    const [facultydata, setFacultydata] = useState([])
    // const [filterData,setFilterdata]=useState([])

    // useEffect
    useEffect(() => {
        fetchData();
        const facultyUser = JSON.parse(localStorage.getItem('user'));
        setFacultydata(facultyUser);
    }, []);

    // fetch data 
    const fetchData = async () => {
        try {
            const students = await axios.get('http://localhost:8080/api/v1/auth/showallstudent');
            setData((await students).data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    // console.log(data)
    // console.log(facultydata)
    const filteredData = data.filter(student => {
        return student.branch===facultydata.branch
    });
    console.log(filteredData)
    // console.log()

    return (
        <>
            <FacultySidebar />
            <FacultyTopbar />
            <div className="min-h-screen  p-6 ml-64 mt-12">
                {/* Header */}

                <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg mb-6">
                    <h1 className="text-center text-3xl font-bold">All Student Allotted to You</h1>
                </div>



                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Branch</th>
                            <th className="px-4 py-2">Section</th>
                            <th className="px-4 py-2">Roll No</th>
                            {/* <th className="px-4 py-2">Year</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                        <tr key={index}>
                                <td className="border px-4 py-2">{row.name }</td>
                            <td className="border px-4 py-2">{row.branch}</td>
                                <td className="border px-4 py-2">{row.section }</td>
                                <td className="border px-4 py-2">{row.rollno }</td>
                        </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    );
}
export default Faculty
