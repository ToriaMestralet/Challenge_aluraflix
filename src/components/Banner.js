import React, {useState} from 'react';
import './Banner.css';

const Banner = (props) => {
  const { datos } = props;
  const { titulo, descripcion, foto, categoria, id, videoUrl, colorPrimario } = datos;

  const [mostrarVideo, setMostrarVideo] = useState(false);

  const manejarClick = () => {
    setMostrarVideo(true);
  };


  const etiqueta = {
    backgroundColor: colorPrimario
  }
  const reborde = {
    boxShadow: `0px 0px 9px 2px ${colorPrimario}`
  }

  return (<div className="banner" style={{ backgroundImage: `url(/assets/banner.png)` }}>

    <div className="overlay" ></div>
    <div className="banner-card">
      <div className="banner-details">
        <h3 className="banner-category" style={etiqueta}>{categoria}</h3>
        <h2 className="banner-title">{titulo}</h2>
        <p className="banner-description">{descripcion}</p>
      </div>
      <div className="thumbnail-container">
          {mostrarVideo ? (
            <div className="video-banner">
              <iframe
                width="720"
                height="480"
                src={videoUrl}
                title={titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="banner-image" onClick={manejarClick}>
             <img src={foto} alt={titulo} className="banner-image" style={reborde} />
            </div>
          )}
        </div>
      
    </div>
  </div>
  )
};

export default Banner;
