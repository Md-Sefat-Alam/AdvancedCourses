import './StudentProjectShow.css'
import React from 'react';

const StudentProjectShow = (props) => {
    const { student_id, student_name, project_Name, student_batch, img, live_site_link, site_img } = props.student

    return (
        <div className='content_wrapper'>
            <div className='studentProject'>
                <div className='left_side_project'>
                    <div className='img-wrapper'>
                        <div className='left_side_img'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='left_side_text'>
                        <p>Student Id: <span>{student_id}</span></p>
                        <p>Student Batch: <span>{student_batch}</span></p>
                        <p>Name: <span>{student_name}</span></p>
                        <p>Project Name: <span>{project_Name}</span></p>
                        <p>Live Site Link: <span><a className='text-green-700' rel="noreferrer" target="_blank" href={live_site_link}>{live_site_link}</a></span></p>
                    </div>
                    <div></div>
                </div>
                <div className='right-side-project'>
                    <div>
                        <img src={site_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProjectShow;