import './Services.css'
import React, { useEffect, useState } from 'react';
import CourseShowHandle from '../CourseShowHandle/CourseShowHandle';

const Services = () => {
    const [courses, setCourses] = useState({})
    const { web_courses, programming_courses, graphics_courses, animation_3d, marketing, electronics, health } = courses;
    useEffect(() => {
        fetch('./course_info.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className='content_wrapper'>

                {web_courses ? <CourseShowHandle course={web_courses}></CourseShowHandle> : ''}

                {programming_courses ? <CourseShowHandle course={programming_courses}></CourseShowHandle> : ''}

                {graphics_courses ? <CourseShowHandle course={graphics_courses}></CourseShowHandle> : ''}

                {animation_3d ? <CourseShowHandle course={animation_3d}></CourseShowHandle> : ''}

                {marketing ? <CourseShowHandle course={marketing}></CourseShowHandle> : ''}

                {electronics ? <CourseShowHandle course={electronics}></CourseShowHandle> : ''}

                {health ? <CourseShowHandle course={health}></CourseShowHandle> : ''}


            </div>
        </div>
    );
};

export default Services;