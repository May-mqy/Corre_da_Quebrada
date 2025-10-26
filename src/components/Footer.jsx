import Styles from './css/Footer.module.css'

import Instagram  from '../assets/images/instagram-icon.svg';
import Facebook from '../assets/images/facebook-icon.svg';
import Whatsapp  from '../assets/images/whatsapp-icon.svg';
import Logo from '../assets/images/logo.svg'


function Footer (){
    return (
        <footer>
            {/*<div className={Styles.wave1}></div>
            <div className={Styles.wave2}></div>
            <div className={Styles.wave3}></div>
            <div className={Styles.wave4}></div>*/}
            
             <section className={Styles.conteudo_footer}>
                
                <img src={Logo} alt="Logo Mozer Doces" className={Styles.logo_footer} />

                {/* Esquerdo footer*/}
                <section className={Styles.conteudo_escrito_footer}>
                    <section className={Styles.footer_esquerdo}>
                        <p>Doces artesanais feitos com carinho para <br /> adoçar seus momentos especiais.</p> 
                            <div className={Styles.social_links}>
                               <a className={Styles.icon} href="https://www.instagram.com/mozerdoces/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Icone Instagram" /></a>
                               <a className={Styles.icon} href="https://www.facebook.com/search/top?q=mozer%20doces" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Icone Facebook" /></a>
                               <a  className={Styles.icon} href="https://wa.me/5511961002548?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido." target="_blank" rel="noopener noreferrer"> <img src={Whatsapp} alt="Icone Whatsapp" /></a>
                            </div>
                    </section>

                    {/* Meio footer*/}
                    <section className={Styles.footer_meio}>
                        <p><span className={Styles.destaque_footer}>Nossos Doces</span></p>
                        <div className={Styles.itens_mapa}>
                            <p>Brigadeiro</p>
                            <p>Suspiros</p>
                            <p>Caramelizados</p>
                            <p>Bolos</p>
                            <p>Paleta Gourmet</p>
                        </div>
                    </section>

                    {/* Direito footer */}
                    <section className={Styles.footer_direito}>
                        <p><span className={Styles.destaque_footer}>Contato</span></p>
                        <div>
                            <p>(11) 96100-2548 </p>
                            <p>Ter - Sex: 10h às 18h</p>
                        </div>
                    </section>

                </section>
             </section>
        </footer>

    )
}

export default Footer