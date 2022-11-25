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
            <section id='projeto'>
                <div id="titleProjeto">
                    <h1>ONDE ESTAMOS</h1>
                </div>

                <div id="contentProjeto">
                    <div>

                        <p>

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui pariatur fugiat, sunt quasi consectetur natus voluptatibus maxime quibusdam. Debitis neque incidunt quos ratione consequatur error praesentium autem unde, nulla suscipit maiores explicabo impedit tempora, perferendis magni est magnam. Modi culpa, cupiditate eaque recusandae dolorem atque amet. Adipisci a ex, fugit tempore numquam eius tenetur veniam explicabo officiis molestiae. Illo non quia possimus asperiores maxime odio iure laudantium consequuntur necessitatibus quisquam suscipit, blanditiis officiis corporis iste sed unde quidem neque ut dignissimos, voluptatem consequatur quod placeat est modi! Laboriosam porro blanditiis quaerat, iste aliquid temporibus ex molestiae reiciendis cupiditate ea obcaecati voluptates alias? Sit nesciunt ducimus neque ut corrupti distinctio ipsa dolorem esse aliquam, tenetur, sunt velit commodi rerum ullam repudiandae facilis mollitia ab alias totam fugiat blanditiis sequi doloribus non? Nisi nihil accusamus magnam explicabo laudantium non, velit assumenda minus.

                        </p>

                    </div>

                    <div className='sugeridos'>
                        <h2>Sugeridos:</h2>
                        <div className='sugeridosCard'>

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