import './PerfilDetallado.css'
import avater from '../../Assets/Images/avater.jpg'

export default function PerfilDetallado({ profile }) {

    const fullName = () => {
        return `${profile.nombres} ${profile.apellidos}` 
    }

    return (
        <div className="media">
            <div className="pull-left text-center" href="#!">
                <img className="media-object user-img" src={avater} alt="Image" />
                <a href="#x" className="btn btn-transparent mt-20">Cambiar Imagen</a>
            </div>
            <div className="media-body">
                <ul className="user-profile-list">
                    <li><span>Nombres:</span>{fullName()}</li>
                    <li><span>Tipo Identificación:</span>{profile.tipoIdentificacion}</li>
                    <li><span>Documento Identidad:</span>{profile.nroDocumento}</li>                    
                    <li><span>Correo:</span>{profile.email}</li>
                    <li><span>Telefono:</span>{profile.telefono}</li>
                </ul>
            </div>
        </div>
    )

}