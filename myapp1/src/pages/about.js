import React from 'react';

const About = () => {
    return (
        <div style={{ fontSize:"30px" , backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        fontSize: '25px',
        fontWeight: 'bold'}}>
            <p>
                Introducing APLADOCTOR Your Personal Health Companion
                Stay on top of your health and wellness with AplaDoctor, the ultimate healthcare app designed to empower you to take control of your well-being. With a user-friendly interface and a wide range of features, AplaDoctor is your all-in-one solution for managing your health right from your smartphone.
            </p>
            <p>
                Some of our Future Scope features:
            </p>
            <ol>
                <li>Personal Health Record</li>
                <li>Symptoms Checkup</li>
                <li>Medicine Remainder</li>
                <li>Appointment Management</li>
            </ol>
        </div>
    );
};

export default About;
