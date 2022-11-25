import './style.css'
import { Link } from 'react-router-dom';
function Rodape() {
    return (
        <footer>
            <div className='rodape'>
                <div className='esquerdo'>
                    <ul>
                        <li><a href="src\oprojeto.html" target="_blank">O projeto</a></li>
                        <li><a href="src\oquefazemos.html" target="_blank">O que fazemos</a></li>
                        <li><a href="src\ondeestamos.html" target="_blank">Onde estamos</a></li>
                        <li><Link to="/Credito" >
                            <span> Créditos</span>
                        </Link></li>
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