import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {

    return (
        <div className='h-16 bg-gray-100'>
            <div className='content_wrapper'>
                <div style={{ userSelect: 'none' }} className='text-3xl font-bold'>
                    <span className='text-yellow-600'>Advanced</span> Courses
                </div>
                <div className='navlinks mt-1'>
                    <NavLink activeClassName='activeStyle' to='/home'>Home</NavLink>
                    <NavLink activeClassName='activeStyle' to='/services'>Services</NavLink>
                    <NavLink activeClassName='activeStyle' to='/student-projects'>Student Projects</NavLink>
                    <NavLink activeClassName='activeStyle' to='/about'>About Us</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
