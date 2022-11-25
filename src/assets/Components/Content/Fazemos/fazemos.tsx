import { Link } from 'react-router-dom';
import './fazemos.css';
import Projeto from '../../../images/oProjeto.png'
import Estamos from '../../../images/ondeEstamos.png'

function Fazemos() {

    function pageUp() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <section id='fazemos'>
                <div id="titleFazemos">
                    <h1>O QUE FAZEMOS</h1>
                </div>

                <div id="contentFazemos">
                    <div>
                        <p>

                            O conceito de desenvolvimento sustentável é bastante abrangente e o tema da sustentabilidade é recente e, portanto, trata-se essencialmente de um processo em construção. <br />

                            A partir da justificativa acima e da importância da temática educação para o desenvolvimento sustentável em IES, o objetivo deste trabalho é implementar e conscientizar sobre a sustentabilidade e, para tanto, serão tomadas medidas no sentido de reduzir o consumo ou, pelo menos modificar a forma como o fazemos e modificar hábitos de consumo .
                        </p>
                    </div>

                    <div className='sugeridosFazemos'>
                        <h2>Sugeridos:</h2>
                        <div className='sugeridosCardFazemos'>

                            <Link to={'/onde'} onClick={pageUp}>
                                <img src={Estamos} alt="" />
                            </Link>



                            <Link to={'/projeto'} onClick={pageUp}>
                                <img src={Projeto} alt="" />
                            </Link>



                        </div>

                    </div>
                </div>

            </section>
        </>
    )

}

export default Fazemos;