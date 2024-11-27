import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© Todos os direitos reservados | Termos de uso</p>
            <div className="footer-info">
                <p>Localização: Salvador, BA</p>
                <p>Horário de atendimento: Segunda a sexta, 08h às 18h</p>
            </div>
        </footer>
    );
};

export default Footer;
