import './creditos.css'
import UniLogo from '../../images/logo-unisagrado.png'

function Creditos() {
    return (
        <>

            <div id="creditos">

                <h1>CRÉDITOS</h1>

                <div>
                    <h2>Projeto Desenvolvido para a matéria Linguagem de Programação II</h2>


                    <div id='profCreditos'>
                        <h2>Orientadores:</h2>
                        <ol>
                            <li><span>Vinicius Santos Andrade</span></li>
                            <li><span>Sileide Aparecida de Oliveira</span></li>
                        </ol>
                    </div>

                    <div id='lpCreditos'>
                        <h2>Alunos Ciência da Computação:</h2>
                        <ol>
                            <li>Caio Moreira da Silva</li>
                            <li>Gustavo Santana Ferreira</li>
                            <li>João Pedro Moreno Ayres</li>
                            <li>Jonatas Barbosa Maximo</li>
                            <li>Rahul Sbaraglini Couto</li>
                        </ol>
                    </div>

                    <div id='designCreditos'>
                        <h2>Alunos Design:</h2>

                        <ol>
                            <li>Isabella Maria Francisco</li>
                            <li>Lídia de Faria</li>
                            <li>Lucas Vítor Velozo das Chagas</li>
                            <li>Maria Eduarda Manfrinato Leão</li>

                        </ol>
                    </div>


                </div>

                <img src={UniLogo} alt="" />

            </div>


        </>
    )
}

export default Creditos;