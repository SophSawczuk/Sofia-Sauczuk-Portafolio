import style from "../styles/Burger.module.css"


export default function Burger({setOpen, onIrInicio, onIrAcercaDe, onIrProyectos, onIrExperiencia, onIrEstudios, onIrServicios, onIrContacto}) {

    function closeMenu(e) {
        e.preventDefault()
        setOpen(false)
    }
    return(
        <div className={style.Container}>
            <ul>
                <li onClick={(e) => {onIrInicio(); closeMenu(e)}} >Inicio</li>
                <li onClick={(e) => {onIrAcercaDe(); closeMenu(e)}}>Acerca de mi</li>
                <li onClick={(e) => {onIrProyectos(); closeMenu(e)}}>Proyectos</li>
                <li onClick={(e) => {onIrExperiencia(); closeMenu(e)}}>Experiencia</li>
                <li onClick={(e) => {onIrEstudios(); closeMenu(e)}}>Estudios</li>
                <li onClick={(e) => {onIrServicios(); closeMenu(e)}}>Servicios</li>
                <li onClick={(e) => {onIrContacto(); closeMenu(e)}}>Contacto</li>
            </ul>
        </div>
    )
}
