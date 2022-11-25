import { Link } from 'react-router-dom';
import './projeto.css';
import Fazemos from '../../../images/oQueFazemos.png'
import Estamos from '../../../images/ondeEstamos.png'

function Projeto() {

    function pageUp() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <section id='projeto'>
                <div id="titleProjeto">
                    <h1>O PROJETO</h1>
                </div>

                <div id="contentProjeto">
                    <div>
                        <p> Do mesmo modo, a execução dos pontos do programa ainda não demonstrou convincentemente que vai participar na mudança dos métodos utilizados na avaliação de resultados. As experiências acumuladas demonstram que a necessidade de renovação processual aponta para a melhoria dos níveis de motivação departamental. Gostaria de enfatizar que a mobilidade dos capitais internacionais cumpre um papel essencial na formulação do sistema de participação geral. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a valorização de fatores subjetivos representa uma abertura para a melhoria do fluxo de informações. Evidentemente, o novo modelo estrutural aqui preconizado garante a contribuição de um grupo importante na determinação de todos os recursos funcionais envolvidos.</p>
                    </div>

                    <div className='sugeridosProjeto'>
                        <h2>Sugeridos:</h2>
                        <div className='sugeridosCardProjeto'>

                            <Link to={'/fazemos'} onClick={pageUp}>
                                <img src={Fazemos} alt="" />
                            </Link>

                            <Link to={'/onde'} onClick={pageUp}>
                                <img src={Estamos} alt="" />
                            </Link>

                        </div>

                    </div>
                </div>

            </section>
        </>
    )

}

export default Projeto;