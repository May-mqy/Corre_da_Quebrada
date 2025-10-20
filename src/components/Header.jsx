import Styles from './css/Header.module.css';

import Logo from '../assets/img/logo.png'

function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo Mozer Doces" className={Styles.Logo} />

            <nav className={Styles.menu}>
                <ul className={Styles.links}>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Catálogo de Doces</a></li>
                    <li><a href="#">Quem somos?</a></li>
                </ul>

                <ul>
                    <li className={Styles.whatsapp}><a href="#" >Whatsapp</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;