import Styles from './css/Inicio.module.css';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <section>
      <section className={Styles.direita}> 
        <h1 className={Styles.titulo}>Doces que adoçam momentos!</h1>
        <p>Cada doce é feito artesanalmente, para adoçar seus momentos e deixar qualquer ocasião ainda mais especial!</p>

        <div className={Styles.botoes}>
            <Link to="/catalogo" className={Styles.botao1}>Ver Catálogo</Link>

            <a 
                href="https://wa.me/5511961002548?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido." 
                className={Styles.botao2} target="_blank" rel="noopener noreferrer"> Fazer pedido </a>
</div>

      </section>
    </section>
  );
}

export default Inicio;
