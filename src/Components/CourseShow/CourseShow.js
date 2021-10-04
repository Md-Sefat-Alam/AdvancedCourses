import './CourseShow.css'
import React from 'react';

const CourseShow = (props) => {
    const { id, duration, duration_in, name, teacher_name, cost } = props.info;
    return (
        <div className='course-show'>
            <h2 className='text-gray-400'>course id: <span className='text-details'>{id}</span></h2>

            <p className='text-gray-400'>Duration: <span className='text-details'>{duration} {duration_in}</span></p>

            <h1 className='text-gray-400'>Course Name: <span className='text-details'>{name}</span></h1>

            <h3 className='text-gray-400'>Teacher Name: <span className='text-details'>{teacher_name}</span></h3>
            <p className='text-gray-400'>Cost: <span className='text-details'>{cost}</span></p>
        </div>
    );
};

export default CourseShow;