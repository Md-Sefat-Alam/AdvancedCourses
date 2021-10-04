import './BestOffer.css'
import React from 'react';
import { Link } from 'react-router-dom';

const BestOffer = (props) => {
    const offerCourse = [];
    const { courses } = props;
    for (const cor in courses) {
        // let data = courses[cor].detail.map(data => data.offer);
        courses[cor].detail.map(data => {
            if (data.offer > 50) {
                offerCourse.push(data);
            }
        });
    }
    console.log(offerCourse)
    return (
        <div className='grid grid-cols-2 gap-16'>
            {
                offerCourse.map(course => {
                    const { id, duration, duration_in, name, teacher_name, cost, offer } = course;
                    const price = parseInt(cost) - (parseInt(cost)) * (parseInt(offer) / 100);
                    return (
                        <div>
                            <div className='flex justify-evenly bestOferWrapper'>
                                <div className='bestOfferLeft'>
                                    <h1>{offer}%</h1>
                                    <span>OFF</span>
                                </div>
                                <div className='bestOfferRight flex flex-col justify-center items-left text-gray-700 text-sm'>
                                    <h1 className='my-2'>Course Id: <span className='font-bold text-black'>{id}</span></h1>
                                    <p className='my-2'>Duration: <span className='font-bold text-black'>{duration} {duration_in}</span></p>
                                    <p className='my-2'>Course Name: <span className='font-bold text-black'>{name}</span></p>
                                    <p className='my-2'>Teacher Name: <span className='font-bold text-black'>{teacher_name}</span></p>
                                    <p className='my-2'>Cost: <span className='line-through text-red-700 font-bold'>{cost}</span> <span className=' font-bold text-green-800 text-xl'>{price}</span></p>
                                </div>
                            </div>
                            <div className='text-center'>
                                <Link to='/services'>
                                    <button className='bg-yellow-600 px-5 py-1 rounded text-white font-bold'>Enroll Now</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default BestOffer;