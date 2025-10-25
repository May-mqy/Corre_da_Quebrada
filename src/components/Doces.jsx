import Styles from './css/Doces.module.css'
import Brigadeiro from '../assets/images/foto-brigadeiro.png'


function Doces (){
    return(
        <section>
            <h2>Doces em Destaque</h2>

            <section className={Styles.caixas_destaques}> 

                <div className={Styles.caixa}>
                    <img src={Brigadeiro} alt="foto brigadeiro" />
                    <p className={Styles.titulo_caixa}>Brigadeiros</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

            </section>
        </section>
    )
}

export default Doces;