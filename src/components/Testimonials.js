import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
    {
        name: 'Adriana Machado',
        text: 'Depois de tanto procurar, finalmente achei um atendimento de qualidade!',
        rating: 5,
    },
    {
        name: 'Thiago Reis',
        text: 'Muito profissional! Resolvi meu problema em apenas uma consulta.',
        rating: 4.5,
    },
    {
        name: 'Laura Mendes',
        text: 'Recomendo para todos! Muito dedicada e atenciosa.',
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>Veja os depoimentos que recebo</h2>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <p className="testimonial-name">- {testimonial.name}</p>
                        <p className="testimonial-rating">
                            {`⭐`.repeat(Math.round(testimonial.rating))}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
