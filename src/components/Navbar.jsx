import style from "../styles/NAvbar.module.css"
import Burger from "../assets/Burger"
import menu from "../images/menu.png"
import cerrar from "../images/cerrar.png"
import { useState } from "react"
import { useTranslation } from "react-i18next"




export default function Navbar({ onIrInicio, onIrAcercaDe, onIrProyectos, onIrExperiencia, onIrEstudios, onIrServicios, onIrContacto}) {
    const [open, setOpen] = useState(false)

    const menuClosed = <img src={menu} onClick={() => setOpen(!open)}  className={style.Menu_Burger}/> 
    const menuOpen = <img src={menu} onClick={() => setOpen(!open)} className={style.Menu_Burger}/>
             
    function closeMenuWithLogo(e) {
        e.preventDefault()
        setOpen(false)
    }    
    
    const {t, i18n} = useTranslation()
    const changeLang = (lng) => {
        i18n.changeLanguage(lng)
    }

    const [language, setLanguage] = useState(true)

    return(
        <div>
            <div className={style.Wrapper}>
                <h2>Sofia Sauczuk</h2>
                <ul>
                    <li onClick={onIrInicio}>{t("navbar.home")}</li>
                    <li onClick={onIrAcercaDe}>{t("navbar.about")}</li>
                    <li onClick={onIrProyectos}>{t("navbar.projects")}</li>
                    <li onClick={onIrExperiencia}>{t("navbar.experience")}</li>
                    <li onClick={onIrEstudios}>{t("navbar.studies")}</li>
                    <li onClick={onIrServicios}>{t("navbar.services")}</li>
                    <li onClick={onIrContacto}>{t("navbar.contact")}</li>
                </ul>
                <div>
                    <button onClick={() => changeLang("en")} className={style.BtnLanguage} >English</button>
                    <button onClick={() => changeLang("sp")} className="m-2">Español</button>
                </div>
            </div>
            <div className={style.Mobile}>
                <div className={style.ContainerMobile}>
                    <div className={style.LogosWrapper}>
                        <h2 onClick={(e) => {onIrInicio(); closeMenuWithLogo(e)}} className={style.Logo}>Sofia Sauczuk</h2>
                        <div>
                    {language ? 
                        <button onClick={() => {changeLang("en"), setLanguage(false)}} className={style.BtnLanguage} >English</button> :
                        <button onClick={() => {changeLang("sp"), setLanguage(true)}} className="m-2">Español</button>
                    }
                    
                </div>
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

