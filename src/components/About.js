import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h2>Quem é a Irah?</h2>
                <p>
                    Lorem ipson dolor sit amet, consectetur adipiscing elit. Sed
                </p>
                <p>
                    Lorem ipson dolor sit amet, consectetur adipiscing elit. Sed
                </p>
            </div>
            <div className="about-image">
                <img src={process.env.PUBLIC_URL + '/images/profile/irah.png'} alt="irah" />
            </div>
        </section>
    );
};

export default About;
