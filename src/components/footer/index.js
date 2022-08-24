import React from 'react';
import './style.css';

function Footer() {
    return(
        <footer class="footer">
        <div class="footer-left"></div>
        <div class="footer-center">

            <div class="redes-sociais">
                <a href="https://www.facebook.com/kleberaugusto.moreno" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/kleber.acmoreno/" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-instagram"></i>
                </a>
                <a href="https://github.com/Kacme" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-github"></i>
                </a>

            </div>
            <div class="footer-text">
                <small>Desenvolvido por Adolfo Bocchi</small>
            </div>

        </div>
        <div class="footer-right"></div>
    </footer>
    );
}

export default Footer;


/* 
import React from 'react';

function Footer() {
    return();
}

export default Footer;
*/