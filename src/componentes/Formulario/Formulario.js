import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../../components/Boton"

const Formulario = (props) => {

    const [titulo, actualizarTitulo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [videoUrl, actualizarVideo] = useState("")

    const { registrarContenido} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            titulo,
            descripcion,
            foto,
            categoria,
            videoUrl
        }
        registrarContenido(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <div className="encabezado-form">
                <h1>Nuevo Video</h1>
                <h3>Complete el formulario para crear una nueva tarjeta de video.</h3>
            </div>
            <div className="crearTarjeta">
                <h2>Crear Tarjeta</h2>
            </div>
            <div className="camposForm">
                <Campo
                    titulo="Titulo"
                    placeholder="Ingresar el titulo"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                />
                <ListaOpciones
                    valor={categoria}
                    actualizarCategoria={actualizarCategoria}
                    categorias={props.categorias}
                />
                <Campo
                    titulo="Imagen"
                    placeholder="Ingresar el enlace de la imagen"
                    required
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />
                 <Campo
                    titulo="Video"
                    placeholder="Ingresar enlace del video"
                    required
                    valor={videoUrl}
                    actualizarValor={actualizarVideo}
                />
                <Campo
                    titulo="Descripción"
                    placeholder="¿De qué se trata este video?"
                    required
                    valor={descripcion}
                    actualizarValor={actualizarDescripcion}
                />
                
                
            </div>
            <div className="botonesForm">
                <Boton text={"Crear"} />
                <Boton text={"Limpiar"} />
            </div>

        </form>

    </section>
}

export default Formulario