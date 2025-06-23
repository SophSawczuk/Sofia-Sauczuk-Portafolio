import style from "../styles/NAvbar.module.css"
import Burger from "../assets/Burger"
import menu from "../images/menu.png"
import cerrar from "../images/cerrar.png"
import { useState } from "react"


export default function Navbar({ onIrInicio, onIrAcercaDe, onIrProyectos, onIrExperiencia, onIrEstudios, onIrServicios, onIrContacto}) {
    const [open, setOpen] = useState(false)

    const menuClosed = <img src={menu} onClick={() => setOpen(!open)}  className={style.Menu_Burger}/> 
    const menuOpen = <img src={menu} onClick={() => setOpen(!open)} className={style.Menu_Burger}/>
             
    function closeMenuWithLogo(e) {
        e.preventDefault()
        setOpen(false)
    }      

    return(
        <div>
            <div className={style.Wrapper}>
                <h2>Sofia Sauczuk</h2>
                <ul>
                    <li onClick={onIrInicio}>Inicio</li>
                    <li onClick={onIrAcercaDe}>Acerca de mi</li>
                    <li onClick={onIrProyectos}>Proyectos</li>
                    <li onClick={onIrExperiencia}>Experiencia</li>
                    <li onClick={onIrEstudios}>Estudios</li>
                    <li onClick={onIrServicios}>Servicios</li>
                    <li onClick={onIrContacto}>Contacto</li>
                </ul>
            </div>
            <div className={style.Mobile}>
                <div className={style.ContainerMobile}>
                    <div className={style.LogosWrapper}>
                        <h2 onClick={(e) => {onIrInicio(); closeMenuWithLogo(e)}} className={style.Logo}>Sofia Sauczuk</h2>
                        {open ? menuOpen : menuClosed}
                    </div>
                    {open && <Burger 
                        setOpen={setOpen } 
                        onIrInicio={onIrInicio}
                        onIrAcercaDe={onIrAcercaDe}
                        onIrProyectos={onIrProyectos}
                        onIrExperiencia={onIrExperiencia}
                        onIrEstudios={onIrEstudios}
                        onIrServicios={onIrServicios}
                        onIrContacto={onIrContacto}
                    /> }
                </div>
            </div>
        </div>
    )
}

