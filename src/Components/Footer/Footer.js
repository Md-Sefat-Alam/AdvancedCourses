import './Footer.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className='bg-gray-900'>
            <div className='content_wrapper'>
                <div className='flex justify-evenly py-10 footer-container'>
                    <div className='text-3xl font-bold flex items-center justify-center'>
                        <div style={{ userSelect: 'none' }}>
                            <span className='text-yellow-600'>Advanced</span> Courses
                        </div>
                    </div>
                    <div className='text-white'>
                        <ul>
                            <Link to='/home'><li>Home</li></Link>
                            <Link to='/services'><li>Services</li></Link>
                            <Link to='/student-projects'><li>Students Projects</li></Link>
                            <Link to='/about'><li>About Us</li></Link>
                        </ul>
                    </div>
                    <div className='text-white'>
                        <ul>
                            <a className='cursor-pointer' rel="noreferrer" target="_blank" href="https://www.facebook.com/"><li>facebook</li></a>
                            <a className='cursor-pointer' rel="noreferrer" target="_blank" href="https://www.youtube.com/"><li>youtube</li></a>
                            <a className='cursor-pointer' rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><li>linkedin</li></a>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className='text-white text-center'>© 2022 All Right Reserved By Advanced Courses</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;