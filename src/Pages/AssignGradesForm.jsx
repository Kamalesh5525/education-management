import React, { useState } from 'react';

const AssignGradesForm = ({ onAssign }) => {
  const [grade, setGrade] = useState({ student: '', course: '', grade: '' });

  const handleChange = (e) => {
    setGrade({ ...grade, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAssign(grade);
    setGrade({ student: '', course: '', grade: '' });
  };

  return (
   <div className="container">
    <div className="row">
      <div className="col-lg-12 border border-dark border-4 p-3" style={{borderRadius:"15px",backgroundColor:"#CDE8E5"}}>
      <form onSubmit={handleSubmit} className="mb-4">
      <h3 className="h5 mb-3">Assign Grade</h3>
      <div className="form-group mb-3">
        <input
          type="text"
          name="student"
          placeholder="Student Name"
          value={grade.student}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="text"
          name="course"
          placeholder="Course Title"
          value={grade.course}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={grade.grade}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary d-block mx-auto">Assign</button>
    </form>
      </div>
    </div>
   </div>
  );
};

export default AssignGradesForm;
