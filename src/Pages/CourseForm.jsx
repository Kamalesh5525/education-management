import React, { useState } from 'react';

const CourseForm = ({ onSubmit }) => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    teacher: '',
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(course);
    setCourse({ title: '', description: '', startDate: '', endDate: '', teacher: '' });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 border border-4 border-dark p-3" style={{borderRadius:"15px",backgroundColor:"#CDE8E5"}}>
        <form onSubmit={handleSubmit} className="mb-4" >
      <h3 className="h5 mb-3">Create a Course</h3>
      
      <div className="form-group mb-4">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={course.title}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      
      <div className="form-group mb-4">
        <input
          type="text"
          name="description"
          placeholder="Course Description"
          value={course.description}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group mb-4">
        <input
          type="date"
          name="startDate"
          value={course.startDate}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      
      <div className="form-group mb-4">
        <input
          type="date"
          name="endDate"
          value={course.endDate}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      
      <div className="form-group mb-4">
        <input
          type="text"
          name="teacher"
          placeholder="Assigned Teacher"
          value={course.teacher}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      
      <button type="submit" className="btn btn-primary mx-auto d-block mt-2">Submit</button>
    </form>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
