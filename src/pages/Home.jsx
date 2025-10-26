/*import Styles from '../components/css/pages.module.css'*/


import Header from '../components/Header.jsx'
import Inicio from '../components/Inicio.jsx'
import Doces from '../components/Doces.jsx'
import Mozer from '../components/Mozer.jsx'
import Feedbacks from '../components/Feedbacks.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <main>
      <Header />
      <Inicio/>
      <Doces/>
      <Mozer/>
      <Feedbacks/>
      <Footer/>
    </main>
  )
}

export default Home;
