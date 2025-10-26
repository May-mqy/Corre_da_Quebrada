import Styles from './css/Conteudos.module.css'

export default function Conteudos(){
    return(
        <section className={Styles.fundo_sobre}>
            <section className={Styles.inicial_sobre}>
                <h1  className={Styles.titulo_conteudo_sobre}>
                    A Doçura Começa Aqui
                </h1>
                <p className={Styles.texto_sobre}>
                    Na Mozer Doces, acreditamos que a vida deve ser celebrada com o que há de mais puro e delicioso. Desde 2019, transformamos ingredientes simples em momentos inesquecíveis de alegria e carinho.
                </p>
            </section>

            <section id="historia" className={Styles.secao_historia}>
  <div className={Styles.fundo_historia}>
    
    {/* Imagem */}
    <div className={Styles.imagem_historia}></div>

    {/* Texto */}
    <div className={Styles.texto_historia_container}>
      <h2 className={Styles.titulo_historia}>Olá!! Eu sou a Néia</h2>
      <p className={Styles.texto_historia}>
        Mulher dedicada por trás da Mozer, que encontra na doçaria sua paixão e criatividade. Como mãe, cuida da família com amor e paciência equilibrando trabalho e vida pessoal. Seus doces refletem carinho em cada detalhe, trazendo alegria para todos ao seu redor.
      </p>
      <p className={Styles.citacao_historia}>
        "O doce perfeito é aquele que te faz sorrir."
      </p>
    </div>

  </div>
</section>

        </section>
    )
}