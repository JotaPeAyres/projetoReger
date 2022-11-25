import { Link } from 'react-router-dom';
import './onde.css';
import Fazemos from '../../../images/oQueFazemos.png'
import Projeto from '../../../images/oProjeto.png'

function Onde() {

    function pageUp() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <section id='onde'>
                <div id="titleOnde">
                    <h1>ONDE ESTAMOS</h1>
                </div>

                <div id="contentOnde">
                    <div>


                        <p>O Projeto de Extensão Redução da Geração de Resíduos (REGER) do UNISAGRADO é desenvolvido desde o ano de 2016, com o objetivo de concretizar o tema sustentabilidade no campus e orientar a todos os que o frequentam sobre a destinação correta dos resíduos, além de intensificar a sua redução. Até o momento, 189 pessoas já foram atendidas de forma direta e 8340 beneficiados de forma indireta.</p>
                    </div>

                    <div className='sugeridosOnde'>
                        <h2>Sugeridos:</h2>
                        <div className='sugeridosCardOnde'>

                            <Link to={'/projeto'} onClick={pageUp}>
                                <img src={Projeto} alt="" />
                            </Link>

                            <Link to={'/fazemos'} onClick={pageUp}>
                                <img src={Fazemos} alt="" />
                            </Link>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )

}

export default Onde;