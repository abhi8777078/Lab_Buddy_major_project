import React, { useEffect, useState } from 'react'
import FacultySidebar from './FacultySidebar';
import FacultyTopbar from './FacultyTopbar';
import axios from 'axios';

const CheckAssignment = () => {
  const [students, setStudent] = useState([]);
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await axios.get('http://localhost:8080/api/v1/auth/student/getsubmittedassignment');
        setStudent(response.data);
        const loginuser = JSON.parse(localStorage.getItem('user'));
        setUserdata(loginuser);

        // console.log((await response).data)
        console.log(response.data)

      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  fetchData()
  }, [])
  
  const fitlerData = students.filter(item => {
    return item.branch === userdata.branch;
  })
  console.log(fitlerData)
    return (
        <>
            <FacultySidebar />
            <FacultyTopbar/>
            <div className="max-w-full mx-auto mt-16 ml-64">
      <table className="min-w-full bg-white shadow-md overflow-hidden">
        <thead className="bg-gradient-to-r bg-blue-500 to-green-500 text-white">
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Batch</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Section</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Lab Answer</th>
            {/* <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Subject</th> */}
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Digital Sign</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {fitlerData.map((student, index) => (
            <tr key={index} className="bg-white border-b border-gray-200">
              <td className="text-left py-3 px-4">{student.name}</td>
              <td className="text-left py-3 px-4">{student.branch}</td>
              <td className="text-left py-3 px-4">{student.section}</td>
              <td className="text-left py-3 px-4">{student.labanswer}</td>
              <td className="text-left py-3 px-4">submitted</td>
              {/* <td className="text-left py-3 px-4">{students.subject}</td> */}
              {/* <td className="text-left py-3 px-4">{students.turnedIn ? 'Turned in' : 'Not turned in'}</td> */}
              <td className="text-left py-3 px-4">
                <input type="checkbox" checked={student.digitalSign} className="form-checkbox bg-blue-500" readOnly />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

        </>
    )
}

export default CheckAssignment
