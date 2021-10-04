import React from 'react';
import { Link } from 'react-router-dom';
import notfoundImg from '../../images/404.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound'>
            <div>
                <img src={notfoundImg} alt="" />
                {/* <div>
                    <h1>Page Not Found!!!</h1>
                </div> */}
                <button className="notFoundBtn">
                    <Link to='/home'>
                        Go to Home
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound;