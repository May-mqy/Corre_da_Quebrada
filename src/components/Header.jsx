import Styles from './css/Header.module.css';

import Logo from '../assets/images/logo.png'
import Whatsapp from '../assets/images/social-links-whatsapp.svg'

import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <img 
                src={Logo} 
                alt="Logo Mozer Doces" 
                className={Styles.Logo} 
            />

            <nav className={Styles.menu}>
                <ul className={Styles.links}>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/catalogo">Catálogo de Doces</Link></li>
                    <li><Link to="/sobre">Quem somos?</Link></li>
                </ul>

                <ul>
                    <li className={Styles.whatsapp}>
                        <a href="https://wa.me/5511961002548?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido." 
                        target="_blank" rel="noopener noreferrer">
                            <img
                                src={Whatsapp} 
                                alt="Ícone Whatsapp" 
                                className={Styles.icone_what}
                            />Whatsapp
                        </a>  
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
