import React from 'react';
import '../styles/Categories.css';

const categories = [
    { name: 'Unha Encravada', img: process.env.PUBLIC_URL + '/images/work/unha-encravadas.png' },
    { name: 'Micose', img: process.env.PUBLIC_URL + '/images/work/micose-unha.png' },
    { name: 'Olho de Peixe', img: process.env.PUBLIC_URL + '/images/work/olho-de-peixe.png' },
    // Adicione mais categorias aqui
];

const Categories = () => {
    return (
        <section className="categories">
            <h2>Qual é a sua preocupação com seus pés nesse momento?</h2>
            <div className="categories-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <img src={category.img} alt={category.name} />
                        <h3>{category.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
