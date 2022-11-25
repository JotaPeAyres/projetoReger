import './navbar.css'
import HamburguerMenu from '../../images/hamburguer-menu.svg'
import Globe from '../../images/globo.svg'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div id='navbar' className="flex">
                <Link to={'/'}>
                    <img src={HamburguerMenu} alt="Menu" />
                </Link>

                <div id='pesquisaNav'>
                    <input type="search" name="Barra de pesquisa" id="searchNav" />
                </div>

                <img src={Globe} alt="" />
            </div>
        </>
    )
}

export default Navbar