import Styles from './css/Footer.module.css'

function Footer (){
    return (
        <footer>
            <div className={Styles.wave1}></div>
            <div className={Styles.wave2}></div>
            <div className={Styles.wave3}></div>
            <div className={Styles.wave4}></div>
            
             <p>Rodapé aqui 👇</p>
        </footer>

    )
}

export default Footer