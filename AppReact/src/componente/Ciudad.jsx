import { Fragment } from "react";
import './EstilosCiudad.css'

function Ciudad({nombre,descripcion,imagen})
{
    return (
        <>
        <div className="ciudad">
            <h3 className="ciudad_titulo">{nombre}</h3>
            <p className="ciudad_descripcion">{descripcion}</p>
            <img className="ciudad__imagen" src={imagen} alt={nombre}  />
        </div>
        </>

    );
}

export default Ciudad;