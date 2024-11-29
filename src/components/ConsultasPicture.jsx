import { useState } from "react";

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
  </svg>
)

export default function ConsultasPicture({ imgSrc, imgAlt }) {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleClick = () => [
    setIsZoomed(prev => !prev)
  ]

  return (
    <>
      <picture
        className={`consultas-picture ${isZoomed ? 'modal no-scroll' : ''}`}
        onClick={handleClick}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
        />
        <div className="picture-modal">
          <div className="picture-modal-wrapper">
            <span className="close-modal-icon">
              <CloseIcon />
            </span>
            <img
              className="picture-modal-img"
              src="/consultas-y-reportes/ordenes-de-trabajo/ordenes-de-trabajo.png"
              alt="Captura de pantalla de consultas de resumenes de cierre"
              loading="lazy"
            />
          </div>
        </div>
      </picture>
    </>
  )
}