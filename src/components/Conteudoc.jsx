import Styles from './css/Conteudoc.module.css'

import Brigadeiro from '../assets/images/foto-brigadeiro.jpg';
import Bolo from '../assets/images/foto-bolo.jpg';
import Caramelizado from '../assets/images/foto-caramelizados.png';
import Suspiro from '../assets/images/foto-suspiro.jpg';
import Paleta from '../assets/images/foto-paleta.jpg';
import PaoDeMel from '../assets/images/foto-paodemel.jpg';

function Conteudoc() {
    return (
    <section className={Styles.fundo_catalogo}>
        <div className={Styles.catalogo_container}>

            {/* Filtros */}
            <aside className={Styles.filtros}>
                <h3> <span className={Styles.destaque1}>Filtros</span></h3>
                <p>Brigadeiros</p>
                <p>Bolos</p>
                <p>Caramelizados</p>
                <p>Suspiros</p>
                <p>Paletas Gourmet</p>
                <p>Pão de Mel</p>

                <h3><span className={Styles.destaque1}>Sazonais</span></h3>
                <p>Páscoa</p>
                <p>Mulheres</p>
                <p>Aniversários</p>
                <p>Natal</p>
            </aside>

        <section>
            {/* Nosso Catálogo */}
            <section className={Styles.catalogo}>
                <h2><span className={Styles.destaque2}>Nosso Catalogo</span></h2>
                <div className={Styles.itens}>
                    <div className={Styles.item}>
                        <img src={Brigadeiro} alt="Brigadeiros" />
                        <p>Brigadeiros</p>
                    </div>
                    <div className={Styles.item}>
                        <img src={Bolo} alt="Bolos" />
                        <p>Bolos</p>
                    </div>
                    <div className={Styles.item}>
                        <img src={Caramelizado} alt="Caramelizados" />
                        <p>Caramelizados</p>
                    </div>
                    <div className={Styles.item}>
                        <img src={Suspiro} alt="Suspiros" />
                        <p>Suspiros</p>
                    </div>
                    <div className={Styles.item}>
                        <img src={Paleta} alt="Paletas Gourmet" />
                        <p>Paletas Gourmet</p>
                    </div>
                    <div className={Styles.item}>
                        <img src={PaoDeMel} alt="Pão de Mel" />
                        <p>Pão de Mel</p>
                    </div>
                </div>
            </section>

            {/* Sazonais */}
            <section className={Styles.sazonais}>
                <h2><span className={Styles.destaque2}>Sazonais</span></h2>
                <div className={Styles.itens}>
                    <div className={Styles.item}>
                        <img src={Brigadeiro} alt="Páscoa" />
                        <p>Páscoa</p>
                    </div>
                    <div className={Styles.item}>
                        <img src={Caramelizado} alt="Mulheres" />
                        <p>Mulheres</p>
                    </div>
                    <div className={Styles.item}>
                        <img src={Bolo} alt="Natal" />
                        <p>Natal</p>
                    </div>
                    <div className={Styles.item}>
                        <img src={PaoDeMel} alt="Aniversários" />
                        <p>Aniversários</p>
                    </div>
                </div>
            </section>
    </section>
        </div>

</section>
    )
}

export default Conteudoc;
