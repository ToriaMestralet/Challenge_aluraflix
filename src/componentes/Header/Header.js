import "./Header.css"
import Boton from "../../components/Boton"

function Header(props) {
    return <header className="header">
        <img src="/assets/logo.png" alt='logo' />
        <div className="header-boton">
        <Boton text="Home" onClick={props.ocultarFormularioHandler} />
        <Boton text="Nuevo Video" onClick={props.mostrarFormularioHandler} />
        </div>
    </header>
}

export default Header