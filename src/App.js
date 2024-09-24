import React from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Student Management App</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
}

export default App;
