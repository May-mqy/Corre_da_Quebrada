import Styles from './css/Mozer.module.css'

function Mozer (){
    return(
        <section className={Styles.fundo_mozer}>
            <section className={Styles.conteudo_mozer}>
                
                <div className={Styles.escrito_mozer}>
                    <h2 className={Styles.titulo_mozer}>Quem é a Mozer Doces?</h2>
                    <p>Oi! Eu sou a Néia, apaixonada por transformar ingredientes simples em doces cheios de sabor e carinho.</p>
                </div>

                <div className={Styles.fundo_foto}>
                    <div className={Styles.foto_mozer}> </div>
                </div>


            </section>
        </section>
    )
}

export default Mozer;