import Styles from './css/Inicio.module.css'

function Inicio(){
    return(
        <section>
            <section className={Styles.direita}> 
                <h1 className={Styles.titulo}>Doces que adoçam momentos!</h1>
                <p>Cada doce é feito artesanalmente, para adoçar seus momentos e deixar qualquer ocasião ainda mais especial!</p>

                <div className={Styles.botoes}>
                    <a href="#" className={Styles.botao1}>Ver Catálogo</a>
                    <a href="#" className={Styles.botao2}>Fazer pedido</a>
                </div>
            </section>
        </section>
    )
}

export default Inicio;