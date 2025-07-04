import style from "../styles/Burger.module.css"
import { useTranslation } from "react-i18next"

export default function Burger({setOpen, onIrInicio, onIrAcercaDe, onIrProyectos, onIrExperiencia, onIrEstudios, onIrServicios, onIrContacto}) {

    function closeMenu(e) {
        e.preventDefault()
        setOpen(false)
    }

    const {t, i18n} = useTranslation()
        const changeLang = (lng) => {
            i18n.changeLanguage(lng)
        }
    

    
    return(
        <div className={style.Container}>
            <ul>
                <li onClick={(e) => {onIrInicio(); closeMenu(e)}} >{t("navbar.home")}</li>
                <li onClick={(e) => {onIrAcercaDe(); closeMenu(e)}}>{t("navbar.about")}</li>
                <li onClick={(e) => {onIrProyectos(); closeMenu(e)}}>{t("navbar.projects")}</li>
                <li onClick={(e) => {onIrExperiencia(); closeMenu(e)}}>{t("navbar.experience")}</li>
                <li onClick={(e) => {onIrEstudios(); closeMenu(e)}}>{t("navbar.studies")}</li>
                <li onClick={(e) => {onIrServicios(); closeMenu(e)}}>{t("navbar.services")}</li>
                <li onClick={(e) => {onIrContacto(); closeMenu(e)}}>{t("navbar.contact")}</li>
            </ul>
        </div>
    )
}
