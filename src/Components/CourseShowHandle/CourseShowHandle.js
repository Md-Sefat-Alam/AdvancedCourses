import React from 'react';
import CourseShow from '../CourseShow/CourseShow';

const CourseShowHandle = (props) => {

    const { detail } = props.course;
    const { title } = props.course;

    return (
        <div>
            <div className='mb-20'>
                <h4 className='my-5 bg-green-100 text-2xl font-bold p-2'>{title} courses</h4>
                <div className='cart-wrapper'>
                    {
                        detail ? detail.map(data => {
                            return (
                                <CourseShow key={data.id} info={data} numberOfPrint='all'></CourseShow>
                            )
                        })
                            : console.log('waiting for responds')
                    }
                </div>
            </div>
        </div>
    );
};

export default CourseShowHandle;