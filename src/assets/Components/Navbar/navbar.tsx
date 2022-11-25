import './navbar.css'
import HamburguerMenu from '../../images/hamburguer-menu.svg'
import Globe from '../../images/globo.svg'

function Navbar() {
    return (
        <>
            <div id='navbar' className="flex">

                <img src={HamburguerMenu} alt="Menu" />

                <div id='pesquisaNav'>
                    <input type="search" name="Barra de pesquisa" id="searchNav" />
                </div>

                <img src={Globe} alt="" />
            </div>
        </>
    )
}

export default Navbar