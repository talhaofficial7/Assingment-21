import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStudent } from '../store/store';

function StudentUpdateForm({ student, setEditingStudent }) {
  const [name, setName] = useState(student.name);
  const [age, setAge] = useState(student.age);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudent({ ...student, name, age }));
    setEditingStudent(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h2>Edit Student</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          className="form-control"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success mt-3">Update Student</button>
      <button 
        type="button" 
        className="btn btn-secondary mt-3 ms-2" 
        onClick={() => setEditingStudent(null)}>
        Cancel
      </button>
    </form>
  );
}

export default StudentUpdateForm;
