import './styles.css'


function Header(){
    return(
        <header>
            {/* <div className='cabecalho'> */}
                <div className='topo'> 
                    <i className="fa-solid fa-bars"></i>
                    <div id="divBusca">
                        <input type="text" id="txtBusca" placeholder="Buscar..."/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <i className="fa-solid fa-earth-americas"></i>
                </div>
                <div className='titulo-projeto'>
                    <span className='titulo-reger'> PROJETO REGER </span>    
                </div>
            {/* </div> */}
        </header>
    )
}

export default Header