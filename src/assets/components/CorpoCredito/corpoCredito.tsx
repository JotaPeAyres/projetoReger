
import './corpoCredito.css'

function CorpoCredito() {
    return(<>
    <body>
        <div className="credito">
            <h1 className="projeto">
                Projeto desenvolvido na matéria de Linguagem de Programação II
            </h1>
            
            <div>
                <div>
                    Alunos de Linguagem de Programação II
                </div>
                <div>
                    <ul>
                        <li>João Pedro Moreno Ayres</li>
                        <li>Caio Moreira da Silva</li>
                        <li>Rahul Sbaraglini Couto</li>
                        <li>Gustavo Santana Ferreira</li>       
                        <li>Jonatas Barbosa Maximo</li> 
                    </ul>
                </div>
                <div>
                    Alunos de Design:
                </div>
                <div>
                    <ul>
                        <li>Bella</li>
                        <li>Leonie</li>
                        <li>Lídia</li>
                        <li>Lucas Chagas</li>

                        <div className="professores">
                            Orientada pelo professor: Vinicius Santos Andrade e Professora Design
                        </div>
                        {/* <img src="img/arvores.jpg" /> */}
                    </ul>
                </div>
            </div>
        </div>
    </body>
    </>)
}

export default CorpoCredito