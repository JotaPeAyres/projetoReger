import './home.css'
import Fazemos from '../../images/oQueFazemos.png'
import Estamos from '../../images/ondeEstamos.png'
import Projeto from '../../images/oProjeto.png'
import { Link } from 'react-router-dom';

function Home() {

    function pageUp() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div id="home">
                <h1>PROJETO REGER</h1>
                <p>Há uma preocupação constante do Unisagrado com os resíduos produzidos em todas as suas atividades, porém nem todos têm consciência do que nós já fazemos. Esta preocupação com os resíduos vem de uma necessidade não só da instituição, mas um cuidado com os impactos causados no meio ambiente e com os efeitos a curto e longo prazo.</p>
                <div className='sugeridos'>

                    <div className='sugeridosCard' id='sugeridosHome'>
                        <Link to={'/projeto'} onClick={pageUp}>
                            <img src={Projeto} alt="" />
                        </Link>

                        <Link to={'/fazemos'} onClick={pageUp}>
                            <img src={Fazemos} alt="" />
                        </Link>


                        <Link to={'/projeto'} onClick={pageUp}>
                            <img src={Estamos} alt="" />
                        </Link>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Home;