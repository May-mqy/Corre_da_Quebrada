import Styles from './css/Header.module.css';

import Logo from '../assets/images/logo.png'
import Whatsapp from '../assets/images/social-links-whatsapp.svg'

function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo Mozer Doces" className={Styles.Logo} />

            <nav className={Styles.menu}>
                <ul className={Styles.links}>
                    <li><a href="#">Catálogo de Doces</a></li>
                    <li><a href="#">Quem somos?</a></li>
                </ul>

                <ul>
                    <li className={Styles.whatsapp}><a href="#" > <img src={Whatsapp} alt="icone Whatsapp" className={Styles.icone_what}/>Whatsapp</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;