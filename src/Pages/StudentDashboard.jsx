import React, { useState } from 'react';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Math 201', assignments: [{ title: 'Assignment 1', dueDate: '2024-10-15' }] }
  ]);
  const [submissions, setSubmissions] = useState({});

  // Handle assignment submission
  const handleSubmit = (courseId, assignmentTitle, submission) => {
    setSubmissions({ ...submissions, [`${courseId}-${assignmentTitle}`]: submission });
  };

  return (
    <div className="container my-4">
      <h1 className="h2 mb-4 text-center">Student Dashboard - View Courses & Submit Assignments</h1>
      
      {/* Display Enrolled Courses */}
      <section>
        <h2 className="h4 mb-4">My Courses</h2>
        {courses.map(course => (
          <div key={course.id} className="mb-4 border border-dark border-4  rounded p-3" style={{backgroundColor:"#BFCFE7",borderRadius:"15px"}}>
            <h3 className="h5 mb-3">{course.title}</h3>
            <ul className="list-unstyled">
              {course.assignments.map(assignment => (
                <li key={assignment.title} className="mb-3">
                  <div>
                    <strong>{assignment.title}</strong> - Due: {assignment.dueDate}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(course.id, assignment.title, e.target.submission.value);
                    }}
                    className="mt-2"
                  >
                    <div className="input-group mb-2">
                      <input
                        type="text"
                        name="submission"
                        placeholder="Submit Assignment URL"
                        className="form-control"
                      />
                      <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                  </form>
                  <p className="mt-2">
                    Submission: {submissions[`${course.id}-${assignment.title}`] || 'Not submitted yet'}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StudentDashboard;
