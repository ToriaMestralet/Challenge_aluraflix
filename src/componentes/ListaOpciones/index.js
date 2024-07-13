import "./ListaOpciones.css"

const ListaOpciones = (props) => {



    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarCategoria(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Categoria</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccione una categoria</option>
            {props.categorias.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}
        </select>
    </div>
}

export default ListaOpciones