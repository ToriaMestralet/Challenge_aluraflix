import React, { useState } from 'react';
import "./Contenido.css";
import Modal from '../../components/Modal';
import Categorias from '../Categorias';

const Contenido = (props) => {
    const { titulo, descripcion, foto, categoria, id, videoUrl } = props.datos;
    const { eliminarContenido, actualizarContenido, colorPrimario, mapaCategorias } = props;

    const [mostrarVideo, setMostrarVideo] = useState(false);
  
    const manejarClick = () => {
      setMostrarVideo(true);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedTitle, setEditedTitle] = useState(titulo);
    const [editedCategoria, setEditedCategoria] = useState(categoria);
    const [editedImagen, setEditedImagen] = useState(foto);
    const [editedVideoUrl, setEditedVideoUrl] = useState(videoUrl);
    const [editedDescription, setEditedDescription] = useState(descripcion);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSave = () => {
        actualizarContenido(id, {
            titulo: editedTitle,
            categoria: editedCategoria,
            foto: editedImagen,
            videoUrl: editedVideoUrl,
            descripcion: editedDescription
        });
        closeModal();
    };

    const handleClear = () => {
        setEditedTitle(titulo);
        setEditedCategoria(categoria);
        setEditedImagen(foto);
        setEditedVideoUrl(videoUrl);
        setEditedDescription(descripcion);
    };

    const colorBorde = { boxShadow: `0px 0px 9px 2px ${colorPrimario}` };
    const estiloCard = { boxShadow: `inset 0px 0px 10px ${colorPrimario}` };
 
    return (
      <div className="contenido" style={colorBorde}>
        <div className="thumbnail-container">
          {mostrarVideo ? (
            <div className="video-container">
              <iframe
                width="430"
                height="262"
                src={videoUrl}
                title={titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="foto-card" onClick={manejarClick}>
              <img src={foto} alt={titulo} className='fotis' />
            </div>
          )}
        </div>
        <div className="acciones-card" style={estiloCard}>
            <button className="btn delete-btn" onClick={() => eliminarContenido(id)}>
                <img src="/assets/delete.png" alt="Borrar" className="icon" /> Borrar
            </button>
            <button className="btn edit-btn" onClick={openModal}>
                <img src="/assets/edit.png" alt="Editar" className="icon" /> Editar
            </button>
        </div>

        <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            onSave={handleSave}
            editedTitle={editedTitle}
            setEditedTitle={setEditedTitle}
            editedCategoria={editedCategoria}
            setEditedCategoria={setEditedCategoria}
            editedImagen={editedImagen}
            setEditedImagen={setEditedImagen}
            editedVideoUrl={editedVideoUrl}
            setEditedVideoUrl={setEditedVideoUrl}
            editedDescription={editedDescription}
            setEditedDescription={setEditedDescription}
            onClear={handleClear}
            mapaCategorias={mapaCategorias}
        />
    </div>
    );
}

export default Contenido;