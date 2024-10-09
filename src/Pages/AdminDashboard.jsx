import React, { useState } from 'react';
import CourseForm from './CourseForm';
import EnrollStudentForm from './EnrollStudentForm';
import AssignGradesForm from './AssignGradesForm';
import DataTable from './DataTable';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState([]);

  // Handlers for form submissions
  const handleCourseSubmit = (course) => {
    setCourses([...courses, course]);
  };

  const handleStudentEnroll = (student) => {
    setStudents([...students, student]);
  };

  const handleGradeAssign = (grade) => {
    setGrades([...grades, grade]);
  };

  return (
    <div className="container p-4" >
      <h1 className="display-4 mb-4 "style={{fontWeight:"800"}} >Admin Dashboard</h1>

      <div className="mb-4">
        <CourseForm onSubmit={handleCourseSubmit} />
      </div>
      <div className="mb-4">
        <EnrollStudentForm onEnroll={handleStudentEnroll} />
      </div>
      <div className="mb-4">
        <AssignGradesForm onAssign={handleGradeAssign} />
      </div>

      <h2 className="display-5 mb-4" style={{fontWeight:"600"}}>Courses</h2>
      <DataTable data={courses} columns={['title', 'description', 'startDate', 'endDate', 'teacher']} filterKey="title" />

      <h2 className="display-5 mb-4" style={{fontWeight:"600"}}>Students</h2>
      <DataTable data={students} columns={['name', 'course']} filterKey="name" />

      <h2 className="display-5 mb-4"style={{fontWeight:"600"}}>Grades</h2>
      <DataTable data={grades} columns={['student', 'course', 'grade']} filterKey="student" />
    </div>
  );
};

export default AdminDashboard;
