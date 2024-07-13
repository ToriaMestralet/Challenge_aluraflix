import React  from 'react';
import './Modal.css';
import Boton from './Boton';


const Modal = ({
  isOpen,
  onClose,
  onSave,
  editedTitle,
  setEditedTitle,
  editedCategoria,
  setEditedCategoria,
  editedImagen,
  setEditedImagen,
  editedVideoUrl,
  setEditedVideoUrl,
  editedDescription,
  setEditedDescription,
  onClear,
  initialTitle,
  initialCategoria,
  initialImagen,
  initialVideoUrl,
  initialDescription,
  mapaCategorias
}) => {
  if (!isOpen) {
    return null;
  }

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      editedTitle,
      editedCategoria,
      editedImagen,
      editedVideoUrl,
      editedDescription
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          <img src="/assets/close.png" alt="Cerrar" className="close-icon" />
        </span>
        <h2>Editar Video</h2>
        <form onSubmit={handleSave}>
         
          <label>
            Título:
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder={initialTitle}
            />
          </label>

        <label>
            Categoría:
            <select
              value={editedCategoria}
              onChange={(e) => setEditedCategoria(e.target.value)}
            >
              <option value="" disabled defaultValue="" hidden>Seleccione una categoria</option>
              {mapaCategorias.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}
            </select>
          </label>
          
          <label>
            Imagen:
            <input
              type="text"
              value={editedImagen}
              onChange={(e) => setEditedImagen(e.target.value)}
              placeholder={initialImagen}
            />
          </label>
          <label>
            Video URL:
            <input
              type="text"
              value={editedVideoUrl}
              onChange={(e) => setEditedVideoUrl(e.target.value)}
              placeholder={initialVideoUrl}
            />
          </label>
          <label>
            Descripción:
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              placeholder={initialDescription}
            />
          </label>


          <div className="modal-buttons">
            <Boton text="Guardar" type="submit" />
            <Boton text="Limpiar" onClick={onClear} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;