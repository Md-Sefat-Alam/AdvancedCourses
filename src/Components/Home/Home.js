import './Home.css'
import React, { useEffect, useState } from 'react';
import CourseShowHandle from '../CourseShowHandle/CourseShowHandle';
import BestOffer from '../BestOffer/BestOffer';

const Home = () => {
    const [courses, setCourses] = useState({})
    const { web_courses, programming_courses } = courses;
    // const { offer } = courses.web_courses.detail;


    useEffect(() => {
        fetch('./course_info.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);


    return (
        <div className='content_wrapper'>
            <div className="home_best_offer">
                <div className='pt-5 text-gray-700 text-3xl font-bold text-left'>
                    <h1 className='my-10'>Top Offers</h1>
                </div>
                <BestOffer courses={courses}></BestOffer>
            </div>

            <div>
                <div className='pt-5 text-gray-700 text-3xl font-bold text-right'>
                    <h2 className='my-10'>Services</h2>
                </div>
                <div>
                    {web_courses ? <CourseShowHandle course={web_courses}></CourseShowHandle> : ''}
                    {web_courses ? <CourseShowHandle course={programming_courses}></CourseShowHandle> : ''}
                </div>
            </div>
        </div>
    );
};

export default Home;