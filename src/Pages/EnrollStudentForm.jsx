import React, { useState } from 'react';

const EnrollStudentForm = ({ onEnroll }) => {
  const [student, setStudent] = useState({ name: '', course: '' });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnroll(student);
    setStudent({ name: '', course: '' });
  };

  return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 border border-dark border-4 p-4" style={{borderRadius:"15px",backgroundColor:"#CDE8E5"}}>
          <form onSubmit={handleSubmit} className="mb-4">
      <h3 className="h5 mb-3">Enroll Student</h3>
      
      <div className="form-group mb-4">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      
      <div className="form-group mb-4">
        <input
          type="text"
          name="course"
          placeholder="Course Title"
          value={student.course}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      
      <button type="submit" className="btn btn-primary mx-auto d-block">Enroll</button>
    </form>
          </div>
        </div>
      </div>
  );
};

export default EnrollStudentForm;
