import Styles from './css/Feedbacks.module.css'

import Pessoa1 from '../assets/images/maymay.jpg'
import Pessoa2 from '../assets/images/pessoa2-feedback.jpg'
import Pessoa3 from '../assets/images/pessoa3-nida-feedback.jpg'


function Feedbacks (){
    return(

        <section className={Styles.fundo_depoimentos} id="depoimentos">
            <section className={Styles.organizacao_depoimentos}>
                <h2 className={Styles.titulo_depoimentos}> Feedbacks de Clientes</h2>
            <section className={Styles.fundo_redondo}> </section>

            
            <section className={Styles.depoimentos_fundo2}>
                <div className={Styles.card} id="card1">

                    {/* Meu depoimento */}
                <img src={Pessoa1} alt="Depoimento 1" className={Styles.foto}/>
                <h3 className={Styles.nome}>Mayara</h3>
                <br />
                <p className={Styles.texto_depoimentos}>"Eu precisava vir aqui deixar minha opinião para ajudar quem está na dúvida: COMPREM! Já experimentei de tudo do catálogo e estou encantada. Dá para sentir que os ingredientes são de primeira qualidade. Parabéns à Neinha pelo excelente trabalho e carinho. Se você está procurando um doce para adoçar o dia ou para uma festa, essa é a escolha certa! Não vão se arrepender!"</p>
                </div>

                {/*  */}
                <div className={Styles.card} id="card2">
                <img src={Pessoa3} alt="Depoimento 2" className={Styles.foto}/>
                <h3 className={Styles.nome}>Vanilda</h3>
                <br />
                <p className={Styles.texto_depoimentos}>"Nota máxima! Fiquei muito feliz com a minha compra. O Morango do amor estava fresquinho, saboroso e com uma apresentação linda. A qualidade é visível! <br /> Recomendo demais a Mozer Doces. Podem confiar!"</p>
                </div>


                <div className={Styles.card} id="card3">
                <img src={Pessoa2} alt="Depoimento 3" className={Styles.foto}/>
                <h3 className={Styles.nome}>Mandy</h3>
                <br />
                <p className={Styles.texto_depoimentos}>"Pensa numa paleta de bolo de cenoura com brigadeiro, <br /> MA-RA-VI-LHO-SA!!! <br />Estou apaixonada na Mozer Doces!"</p>
                </div>
            </section>

            </section>
        </section>
    )
}

export default Feedbacks;