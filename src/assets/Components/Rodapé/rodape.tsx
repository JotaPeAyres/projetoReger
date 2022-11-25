import { Link } from "react-router-dom"
import './rodape.css'

import Facebook from '../../images/Facebook.svg'
import Twitter from '../../images/Twitter.svg'
import Youtube from '../../images/YouTube.svg'
import Instagram from '../../images/Instagram.svg'

function Rodape() {

    function pageUp() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <footer className="flex">

                <div id="linksFooter">
                    <Link to='/projeto' onClick={pageUp}>
                        <p>O Projeto</p>
                    </Link>

                    <Link to='/fazemos' onClick={pageUp}>
                        <p>O Que Fazemos</p>
                    </Link>

                    <Link to='/onde' onClick={pageUp}>
                        <p>Onde Estamos</p>
                    </Link>

                    <Link to='/creditos' onClick={pageUp}>
                        <p>Créditos</p>
                    </Link>
                </div>
                <div id="redesFooter">
                    <Link to=''>
                        <p>SIGA-NOS:</p>
                    </Link>

                    <div>
                        <a href=""><img src={Facebook} alt="" /></a>
                        <a href=""><img src={Twitter} alt="" /></a>
                        <a href=""><img src={Youtube} alt="" /></a>
                        <a href=""><img src={Instagram} alt="" /></a>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Rodape