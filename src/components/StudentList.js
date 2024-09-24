import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent, updateStudent } from '../store/store';

function StudentList() {
  const students = useSelector(state => state.students);
  const dispatch = useDispatch();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Roll No</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.rollNo}</td>
            <td>
              <button onClick={() => dispatch(deleteStudent(student.id))} className="btn btn-danger me-2">Delete</button>
              <button onClick={() => dispatch(updateStudent({ ...student, name: "Updated" }))} className="btn btn-warning">Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
