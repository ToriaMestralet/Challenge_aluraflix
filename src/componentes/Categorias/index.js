import React from 'react';
import "./Categorias.css";
import Contenido from "../Contenido";

const Categorias = (props) => {
    const { colorPrimario, titulo, id, contenidos, eliminarContenido, actualizarContenido,mapaCategorias } = props;

    const estiloTitulo = { backgroundColor: colorPrimario };
    return (
        <section className="categoria">
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="videos">
                {contenidos.map((contenido) => (
                    <Contenido
                        key={contenido.id}
                        datos={contenido}
                        colorPrimario={colorPrimario} 
                        eliminarContenido={eliminarContenido}
                        actualizarContenido={actualizarContenido}
                        mapaCategorias={mapaCategorias}
                    />
                ))}
            </div>
        </section>
    );
}

export default Categorias;