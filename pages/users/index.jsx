import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
export default function StudentProfileTable({ }) {
  const [students, setStudents] = useState([])
  async function fetchData() {
    try {
      const data = await axios.get('/api/profile')
      const res = data.data.users
      console.log(res);


      setStudents(res)
      console.log(students);


    } catch (error) {
      console.log(error);

    }

  }
  useEffect(() => {

    fetchData()
    return () => {

    };
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Student Database</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Student ID</th>
              <th className="px-4 py-2 border border-gray-300">Department</th>
              <th className="px-4 py-2 border border-gray-300">Education</th>
              <th className="px-4 py-2 border border-gray-300">Email</th>
              <th className="px-4 py-2 border border-gray-300">Phone</th>
              <th className="px-4 py-2 border border-gray-300">Leadership Position</th>
              <th className="px-4 py-2 border border-gray-300">Position</th>
              <th className="px-4 py-2 border border-gray-300">Post</th>
              <th className="px-4 py-2 border border-gray-300">Motivation</th>
              <th className="px-4 py-2 border border-gray-300">Professional Skills</th>
              <th className="px-4 py-2 border border-gray-300">Facebook</th>
              <th className="px-4 py-2 border border-gray-300">Instagram</th>
              <th className="px-4 py-2 border border-gray-300">Twitter</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">{student?.name}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.studentId}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.department}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.education}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.email}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.phone}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.leadershipPosition}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.position}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.post}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.motivation}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.proskills}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.facebook}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.instagram}</td>
                <td className="px-4 py-2 border border-gray-300">{student?.twitter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
