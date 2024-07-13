import { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from "./componentes/Header/Header";
import Formulario from './componentes/Formulario/Formulario';
import Categorias from './componentes/Categorias';
import Footer from './componentes/Footer';
import Banner from './components/Banner';

function App() {
  const [contenidos, setContenido] = useState([]);
  const [categorias, setCategoria] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  // Manejadores de eventos
  const mostrarFormularioHandler = () => {
    setMostrarFormulario(true);
  };

  const ocultarFormularioHandler = () => {
    setMostrarFormulario(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resContenido = await fetch('https://my-json-server.typicode.com/ToriaMestralet/db_aluraflix/contenidos');
        const dataContenido = await resContenido.json();
        setContenido(dataContenido);

        const resCategoria = await fetch('https://my-json-server.typicode.com/ToriaMestralet/db_aluraflix/categorias');
        const dataCategoria = await resCategoria.json();
        setCategoria(dataCategoria);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  const contenidoSeleccionado = contenidos.length > 0 ? contenidos[0] : null;

  const contenidoBanner = {
    titulo: "Challenge React",
    descripcion: "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.",
    foto: "/assets/colaboradorbanner.png",
    categoria: "Front End",
    id: "1878453298",
    videoUrl: "https://www.youtube.com/embed/ov7vA5HFe6w",
    colorPrimario: "#6BD1FF"
  }

  const registrarContenido = async (contenido) => {
    try {
      const res = await fetch('https://my-json-server.typicode.com/ToriaMestralet/db_aluraflix/contenidos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contenido, id: uuid() })
      });
      const newContenido = await res.json();
      setContenido([...contenidos, newContenido]);
    } catch (error) {
      console.error('Error registrando contenido: ', error);
    }
  };

  const eliminarContenido = async (id) => {
    try {
      await fetch(`https://my-json-server.typicode.com/ToriaMestralet/db_aluraflix/contenidos/${id}`, {
        method: 'DELETE',
      });
      setContenido(contenidos.filter(contenido => contenido.id !== id));
    } catch (error) {
      console.error('Error al eliminar el contenido: ', error);
    }
  };


  const actualizarContenido = async (id, nuevosDatos) => {
    try {
      const res = await fetch(`https://my-json-server.typicode.com/ToriaMestralet/db_aluraflix/contenidos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevosDatos)
      });
      if (!res.ok) {
        throw new Error('Failed to update contenido');
      }
      const updatedContenido = await res.json();
      setContenido(contenidos.map(contenido =>
        contenido.id === id ? updatedContenido : contenido
      ));
    } catch (error) {
      console.error('Error actualizando contenido: ', error);
    }
  };

 

  const mapiCat = categorias.map((categoria) => categoria.titulo);
  //AGREGAR CAMPOS Y LISTA DE OPCIONES AL MODAL ASI SE ARREGLA EL DROP DE LAS CATEGORIAS!!!!!
  // y limpiar el codigo
  return (
    <div>
      <Header mostrarFormularioHandler={mostrarFormularioHandler}
        ocultarFormularioHandler={ocultarFormularioHandler} />

      {mostrarFormulario && <Formulario
        categorias={categorias.map((categoria) => categoria.titulo)}
        registrarContenido={registrarContenido}
      />}

      {!mostrarFormulario && (
        <>
          {contenidoSeleccionado && <Banner datos={contenidoBanner} />}
          {categorias.map((categoria) => {
           // console.log(`Categoria: ${categoria.titulo}`);
            //console.log("Contenido del categoria:", contenidos.filter(contenido => contenido.categoria === categoria.titulo));

            return (
              <Categorias
                titulo={categoria.titulo}
                datos={categoria}
                key={categoria.titulo}
                colorPrimario={categoria.colorPrimario}
                contenidos={contenidos.filter(contenido => contenido.categoria === categoria.titulo)}
                eliminarContenido={eliminarContenido}
                actualizarContenido={actualizarContenido}
                mapaCategorias ={mapiCat}
              />
            );
          })}
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;