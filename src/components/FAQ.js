import React, { useState } from 'react';
import '../styles/FAQ.css';

const faqs = [
    {
        question: 'O que é podologia?',
        answer: 'Podologia é a área da saúde voltada para o estudo, diagnóstico e tratamento de problemas nos pés.',
    },
    {
        question: 'Quais são os serviços prestados por uma podóloga?',
        answer: 'Atendimento para unha encravada, calos, micose e outras condições relacionadas aos pés.',
    },
    {
        question: 'Preciso agendar uma consulta previamente?',
        answer: 'Sim, é necessário agendar com antecedência para garantir o melhor atendimento.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <h2>FAQ - Dúvidas e Respostas Frequentes</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                        </button>
                        {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
