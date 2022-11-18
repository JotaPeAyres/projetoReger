import './styles.css'



function Corpo(){
    return(
        <section>
            <div className='corpo'>
                <div className='conteudo' >
                    <h3 className='textoPrincipal'>Há uma preocupação constante do Unisagrado com os resíduos produzidos em todas as suas atividades, porém nem todos têm consciência do que nós já fazemos. Esta preocupação com os resíduos vem de uma necessidade não só da instituição, mas um cuidado com os impactos causados no meio ambiente e com os efeitos a curto e longo prazo.</h3>
                </div>
                <div className='botoes'>
                    <a href="src\oprojeto.html" target="_blank">
                        <img className='imgBotoes' src="src/img/oprojeto.png" height="150" width="200"></img>
                    </a>

                    <a href="src\oquefazemos.html" target="_blank">
                        <img className='imgBotoes' src="src/img/oquefazemos.png" height="150" width="200"></img>
                    </a>
                    
                    <a href="src\credito.html" target="_blank">
                        <img className='imgBotoes' src="src/img/ondeestamos.png" height="150" width="200"></img>
                    </a>
                </div>
            </div>

        </section>

    )
}

export default Corpo