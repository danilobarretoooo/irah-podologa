import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="hero">
            <div className="hero-text">
                <h1>Os primeiros sinais que sua unha está encravada...</h1>
                <p>
                    Já tentou de tudo e não conseguiu resolver? Agende hoje o melhor atendimento de Curitiba com um podólogo!
                </p>
                <div className="cta-buttons">
                    <button className="btn-primary">Agendar Agora</button>
                    <button className="btn-secondary">Tirar Dúvidas</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="/path/to/image" alt="Andressa" />
            </div>
        </header>
    );
};

export default Header;
