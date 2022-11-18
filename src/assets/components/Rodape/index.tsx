import './style.css'

function Rodape() {
    return (
        <footer>
            <div className='rodape'>
                <div className='esquerdo'>
                    {/* <br></br>
                    <span>Sobre Nós</span>
                    <span>Contatos</span>
                    <span>Política da Comunidade</span>
                    <span>Direitos Autorais</span>
                    <span>Privacidade e Cookies</span>
                     */}
                    <ul>
                        <li><a href="src\oprojeto.html" target="_blank">O projeto</a></li>
                        <li><a href="src\oquefazemos.html" target="_blank">O que fazemos</a></li>
                        <li><a href="src\ondeestamos.html" target="_blank">Onde estamos</a></li>
                        {/* <li>Dicas</li> */}
                        <li><a href="src\credito.html" target="_blank">Créditos</a></li>
                    </ul>
                </div>
                <div className='direito'>
                    <span> Siga-nos</span>
                    <br></br>
                    <br></br>
                    <a className='links' href="https://www.youtube.com/watch?v=FkzpNFv-E8g&list=PLdFvcx9yM9QC5FjaDpalhUYs9CurfNYLu&t=2s" target="_blank">Youtube</a>
                    <br></br>
                    <a className='links' href="https://www.instagram.com/projeto_reger/" target="_blank">Instagram</a>
                    <span><i></i></span>
                </div>
            </div>
        </footer>
    )
}

export default Rodape