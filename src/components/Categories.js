import React from 'react';
import '../styles/Categories.css';

const categories = [
    { name: 'Unha Encravada', img: '/path/to/unha-encravada.jpg' },
    { name: 'Micose', img: '/path/to/micose.jpg' },
    { name: 'Olho de Peixe', img: '/path/to/olho-de-peixe.jpg' },
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
