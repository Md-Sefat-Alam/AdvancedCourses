import img from '../../images/aboutus.jpg';
import './AboutUs.css'
import React from 'react';

const AboutUs = () => {
    return (
        <div className='content_wrapper'>
            <div className="about_top">
                <div className='about_left'>
                    <h1>ABOUT US</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident perspiciatis laborum id suscipit officiis et eius autem facere, illum amet tempore explicabo quidem similique? Tenetur sed officia possimus aut ab ipsa nihil perspiciatis, dicta voluptas quia animi omnis facilis quod asperiores, aperiam ut cumque corrupti. Recusandae quisquam, molestias fugit obcaecati quo nihil tempore! Saepe debitis natus id. Quaerat, veniam culpa quasi quibusdam blanditiis neque optio temporibus fugit consequuntur atque molestias! Vitae doloremque consequuntur totam, repudiandae dolor omnis vero reprehenderit libero possimus dolorum esse beatae excepturi quae, magnam voluptatem est placeat nesciunt quos nisi at dolore? Repudiandae tempore aut ex eaque.</p>
                    <button>Learn More</button>
                </div>
                <div className="about_right">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='contactUs'>
                <div>
                    <h1 className='text-3xl'>Contact With Us</h1>
                    <div className='p-5'>
                        <p>
                            <span>Name </span> <input placeholder='enter name' type="text" />
                            <br />
                            <span>Email </span> <input placeholder='enter email' type="text" />
                        </p>
                        <p>
                            <span>Message </span> <textarea cols='30' rows='3' placeholder='message...' type="text" />
                        </p>
                    </div>
                </div>
                <button className>Submit</button>
            </div>
        </div>
    );
};

export default AboutUs;