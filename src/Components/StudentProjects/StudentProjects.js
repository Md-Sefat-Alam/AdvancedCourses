import React, { useEffect, useState } from 'react';
import StudentProjectShow from '../StudentProjectShow/StudentProjectShow';

const StudentProjects = () => {
    const [studentData, setStudentData] = useState([]);
    useEffect(() => {
        fetch('./ourStudentProjects.json')
            .then(res => res.json())
            .then(data => setStudentData(data))
    }, [])
    return (
        <div>
            {
                studentData ? studentData.map(student => <StudentProjectShow key={student.student_id} student={student}></StudentProjectShow>)
                    : console.log('waiting for responds')
            }
        </div>
    );
};

export default StudentProjects;