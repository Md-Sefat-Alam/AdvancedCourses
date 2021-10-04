import './BestOffer.css'
import React from 'react';
import { parse } from 'postcss';

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
        <>
            {
                offerCourse.map(course => {
                    const { id, duration, duration_in, name, teacher_name, cost, offer } = course;
                    const price = (parseInt(cost)) * (parseInt(offer) / 100);
                    return (
                        <div className='flex justify-evenly bestOferWrapper border-b-2'>
                            <div className='bestOfferLeft'>
                                <h1>{offer}%</h1>
                                <span>OFF</span>
                            </div>
                            <div className='bestOfferRight flex flex-col justify-center items-left text-xl text-gray-700'>
                                <h1 className='my-2'>Course Id: <span className='font-bold text-black'>{id}</span></h1>
                                <p className='my-2'>Duration: <span className='font-bold text-black'>{duration} {duration_in}</span></p>
                                <p className='my-2'>Course Name: <span className='font-bold text-black'>{name}</span></p>
                                <p className='my-2'>Teacher Name: <span className='font-bold text-black'>{teacher_name}</span></p>
                                <p className='my-2'>Cost: <span className='line-through text-black font-bold'>{cost}</span> <span className='text-red-700 font-bold'>{price}</span></p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default BestOffer;