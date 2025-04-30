import React from 'react';
import '../styles/Header.css';

const Header = () => {
    const phoneNumber = "5571999999999";


    const scheduleMessage = encodeURIComponent("Olá, gostaria de marcar um horário para atendimento.");
    const questionMessage = encodeURIComponent("Olá, gostaria de obter mais informações sobre os serviços.");

    const scheduleUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${scheduleMessage}`;
    const questionUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${questionMessage}`;

    return (
        <header className="hero">
            <div className="hero-text">
                <h1>Unha encravada? Saiba reconhecer os primeiros sinais e evite a dor!</h1>
                <p>
                    Cuidar dos seus pés é essencial!
                    <br/>Agende hoje mesmo a sua consulta com a melhor podóloga de Salvador!
                </p>
                <div className="cta-buttons">
                    <a href={scheduleUrl} target="_blank" rel="noopener noreferrer">
                        <button className="btn-primary">Agendar Agora</button>
                    </a>
                    <a href={questionUrl} target="_blank" rel="noopener noreferrer">
                        <button className="btn-secondary">Tirar Dúvidas</button>
                    </a>
                </div>
            </div>
            <div className="hero-image">
                <img src={process.env.PUBLIC_URL + "/images/profile/irah.png"} alt="irah" />
            </div>
        </header>
    );
};

export default Header;
