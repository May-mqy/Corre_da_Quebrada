import Styles from './css/Doces.module.css'
import Brigadeiro from '../assets/images/foto-brigadeiro.jpg'
import Brigadeirinho from '../assets/images/brigadeiro-sem-fundo.png'

import Caramelizados from '../assets/images/foto-caramelizados.png'
import Maca from '../assets/images/maca-sem-fundo.png'

import Suspiro from '../assets/images/foto-suspiro.jpg'
import Suspirinho from '../assets/images/suspiro-sem-fundo.png'



function Doces (){
    return(
        <section className={Styles.fundo_doces}>
            <h2 className={Styles.titulo_doces}>Doces em Destaque</h2>

            <section className={Styles.caixas_destaques}> 

        {/* Caixa do Brigadeiro */}
            <div className={Styles.espaco_caixa}>
                <div className={Styles.caixa}>
                    <img src={Brigadeiro} alt="foto brigadeiro" className={Styles.caixa_image}/>

                    <div className={Styles.escrito_caixa}>
                        <h3 className={Styles.titulo_caixa}>Brigadeiros</h3>
                        <p>Descubra nossos brigadeiros <br />artesanais, cremosos e <br /> irresistíveis. Clique e conheça <br /> todos os sabores!</p>
                    </div>
                </div>
                    <img src={Brigadeirinho} alt="Unidade brigadeiro" className={Styles.docinho_icone} />
            </div>


            {/* Caixa Suspiro */}
            <div className={Styles.espaco_caixa}>
                <div className={Styles.caixa}>
                    <img src={Suspiro} alt="foto brigadeiro" className={Styles.caixa_image}/>

                    <div className={Styles.escrito_caixa}>
                        <h3 className={Styles.titulo_caixa}>Suspiros</h3>
                        <p>Leves, crocantes e feitos com <br /> carinho em cada detalhe. <br /> Veja as opções e se apaixone!   </p>
                    </div>
                </div>
                    <img src={Suspirinho} alt="Unidade brigadeiro" className={Styles.docinho_icone_suspiro} />
            </div>

            {/* Caixa Caramelizados */}
            <div className={Styles.espaco_caixa}>
                <div className={Styles.caixa}>
                    <img src={Caramelizados} alt="foto brigadeiro" className={Styles.caixa_image}/>

                    <div className={Styles.escrito_caixa}>
                        <h3 className={Styles.titulo_caixa}>Caramelizados</h3>
                        <p>O equilíbrio perfeito entre <br /> doçura e textura. Explore <br /> nossas delícias caramelizadas!</p>
                    </div>
                </div>
                    <img src={Maca} alt="Unidade brigadeiro" className={Styles.docinho_icone_maca} />
            </div>


            </section>
        </section>

    )
}

export default Doces;