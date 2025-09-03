import style from "../styles/Home.module.css"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import copiar from "../images/copiar.png"
import soph from "../images/sofia-sauczuk.jpeg"
import javascript from "../images/javascript.png"
import css from "../images/css.png"
import html from "../images/html.png"
import redux from "../images/redux.png"
import react from "../images/react.png"
import bootstrap from "../images/bootstrap.png"
import wordpress from "../images/wordpress.png"
import sql from "../images/sql.png"
import node from "../images/node.png"
import postgresql from "../images/postgresql.png"
import express from "../images/express.png"
import git from "../images/git.png"
import slack from "../images/slack.png"
import figma from "../images/figma.png"
import notion from "../images/notion.png"
import mountainsdev from "../images/mountains-development.png"
import link from "../images/link.png"
import mountainsdevlogo from "../images/mountain-logo.png"
import jsgris from "../images/javascript-grey.png"
import js from "@eslint/js"
import inbound from "../images/inbound-factor.png"
import español from "../images/español.png"
import ingles from "../images/ingles.png"
import mountainsblog from "../images/mountains-blog.jpeg"
import correo from "../images/correo.png"
import htmlgris from "../images/html-grey.png"
import cssgris from "../images/css-grey.png"
import reactgris from "../images/react-grey.png"
import esquelapart from "../images/esquel-apart.png"
import figmagris from "../images/figma-grey.png"
import esquelapartpreview from "../images/esquel-apart-preview.png"
import webdesigneregypt from "../images/web-designer-egypt.png"
import webdesigeregyptpewview from "../images/web-designer-egypt-preview.png"
import wordpressgris from "../images/wordpress-grey.png"
import cim from "../images/cim.png"
import { useTranslation } from 'react-i18next'
import likya from "../images/likya.png"
import likyavillage from "../images/likya-village-preview.png"


export default function Home({ refInicio, refAcercaDe, refProyectos, refExperiencia, refEstudios, refServicios, refContacto }) {
    const CopiarBoton = () => {
        const texto = "sofiasawczuka@gmail.com";

        navigator.clipboard.writeText(texto)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch((err) => {
                alert("Error al copiar: " + err);
            });

    };
    const { t } = useTranslation()

    return (
        <div>
            <div className={style.Inicio} ref={refInicio}>
                <h1>{t("home.name")}</h1>
                <h2>{t("home.title")}</h2>
                <p className={style.Description}>{t("home.description")}</p>
                <div className={style.Correo_Inicio}>
                    <p><b>{t("home.emailLabel")}</b> <i>sofiasawczuka@gmail.com</i></p>
                    <img src={copiar} onClick={CopiarBoton} />
                </div>
                <div className={style.Contant_Inicio}>
                    <a href="src\assets\CV-Sofia-Sauczuk.pdf" target="_blank"><button>{t("home.downloadCV")}</button></a>
                    <a href="https://github.com/SophSawczuk" target="_blank"><img src={github} /></a>
                    <a href="https://www.linkedin.com/in/sofia-sawczuk" target="_blank"><img src={linkedin} /></a>
                </div>
            </div>
            <div className={style.Acerca_De_Mi} ref={refAcercaDe}>
                <img src={soph} className={style.Soph_Mobile} />
                <div className={style.Contenido_Acerca_De_Mi}>
                    <h2>{t("about.title")}</h2>
                    <p>{t("about.description")}</p>
                    <h3>{t("about.frontend")}</h3>
                    <div>
                        <img src={javascript} title="JavaScript" />
                        <img src={css} title="CSS" />
                        <img src={html} title="HTML" />
                        <img src={react} title="React" />
                        <img src={redux} title="Redux" />
                        <img src={wordpress} title="Wordpress" />
                        <img src={bootstrap} title="Bootstrap" />
                    </div>
                    <h3>{t("about.backend")}</h3>
                    <div>
                        <img src={sql} title="SQL" />
                        <img src={node} title="NodeJS" />
                        <img src={express} title="Express" />
                        <img src={postgresql} title="PostgreSQL" />
                    </div>
                    <h3>{t("about.tools")}</h3>
                    <div>
                        <img src={git} title="Git" />
                        <img src={figma} title="Figma" />
                        <img src={notion} title="Notion" />
                        <img src={slack} title="Slack" />
                    </div>
                </div>
                <img src={soph} className={style.Soph} />
            </div>
            <div className={style.Proyectos} ref={refProyectos}>
                <h2>{t("projects.title")}</h2>
                <div className={style.Card_Proyectos}>
                    <div className={style.Contenido_Proyecto}>
                        <div className={style.Titulo_Proyecto}>
                            <img src={mountainsdevlogo} />
                            <h3>{t("projects.mountains.name")}</h3>
                        </div>
                        <p>{t("projects.mountains.description")}</p>
                        <div className={style.Wrapper_Etiquetas}>
                            <div className={style.Etiquetas}>
                                <img src={jsgris} />
                                <p>JavaScript</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={reactgris} />
                                <p>React</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={htmlgris} />
                                <p>HTML</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={cssgris} />
                                <p>CSS</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={figmagris} />
                                <p>Figma</p>
                            </div>
                        </div>
                        <div className={style.Links_Proyecto}>
                            <div className={style.Link_Proyecto}>
                                <a href="https://mountainsdevelopment.com/" target="_blank">
                                    <img src={link} />
                                    <p>{t("projects.viewSite")}</p>
                                </a>
                            </div>
                            <div className={style.Link_Proyecto}>
                                <a href="https://github.com/SophSawczuk/mountains-development.git" target="_blank">
                                    <img src={github} />
                                    <p>GitHub</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={mountainsdev} className={style.Preview_Proyecto} />
                </div>
                <div className={style.Card_Proyectos}>
                    <div className={style.Contenido_Proyecto}>
                        <div className={style.Titulo_Proyecto}>
                            <img src={esquelapart} />
                            <h3>{t("projects.esquel.name")}</h3>
                        </div>
                        <p>{t("projects.esquel.description")}</p>
                        <div className={style.Wrapper_Etiquetas}>
                            <div className={style.Etiquetas}>
                                <img src={jsgris} />
                                <p>JavaScript</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={reactgris} />
                                <p>React</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={htmlgris} />
                                <p>HTML</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={cssgris} />
                                <p>CSS</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={figmagris} />
                                <p>Figma</p>
                            </div>
                        </div>
                        <div className={style.Links_Proyecto}>
                            <div className={style.Link_Proyecto}>
                                <a href="https://esquel-apart.mountainsdevelopment.com/" target="_blank" >
                                    <img src={link} />
                                    <p>{t("projects.viewSite")}</p>
                                </a>
                            </div>
                            <div className={style.Link_Proyecto}>
                                <a href="https://github.com/SophSawczuk/Esquel-Apart.git" target="_blank">
                                    <img src={github} />
                                    <p>GitHub</p>
                                </a>
                            </div>


                        </div>
                    </div>
                    <img src={esquelapartpreview} className={style.Preview_Proyecto} />
                </div>
                <div className={style.Card_Proyectos}>
                    <div className={style.Contenido_Proyecto}>
                        <div className={style.Titulo_Proyecto}>
                            <img src={webdesigneregypt} />
                            <h3>{t("projects.webdesigner.name")}</h3>
                        </div>
                        <p>{t("projects.webdesigner.description")}</p>
                        <div className={style.Wrapper_Etiquetas}>
                            <div className={style.Etiquetas}>
                                <img src={wordpressgris} />
                                <p>Wordpress</p>
                            </div>
                        </div>
                        <div className={style.Links_Proyecto}>
                            <div className={style.Link_Proyecto}>
                                <a href="https://webdesigneregypt.com/" target="_blank" >
                                    <img src={link} />
                                    <p>{t("projects.viewSite")}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={webdesigeregyptpewview} className={style.Preview_Proyecto} />
                </div>
                <div className={style.Card_Proyectos}>
                    <div className={style.Contenido_Proyecto}>
                        <div className={style.Titulo_Proyecto}>
                            <img src={likya} />
                            <h3>{t("projects.likyavillage.name")}</h3>
                        </div>
                        <p>{t("projects.likyavillage.description")}</p>
                        <div className={style.Wrapper_Etiquetas}>
                            <div className={style.Etiquetas}>
                                <img src={jsgris} />
                                <p>JavaScript</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={reactgris} />
                                <p>React</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={htmlgris} />
                                <p>HTML</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={cssgris} />
                                <p>CSS</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={figmagris} />
                                <p>Figma</p>
                            </div>
                        </div>
                        <div className={style.Links_Proyecto}>
                            <div className={style.Link_Proyecto}>
                                <a href="https://likyavillage.com/" target="_blank" >
                                    <img src={link} />
                                    <p>{t("projects.viewSite")}</p>
                                </a>
                            </div>
                            <div className={style.Link_Proyecto}>
                                <a href="https://github.com/SophSawczuk/Olympos-Village.git" target="_blank">
                                    <img src={github} />
                                    <p>GitHub</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={likyavillage} className={style.Preview_Proyecto} />
                </div>
            </div>
            <div className={style.Experiencia_Laboral} ref={refExperiencia}>
                <h2>{t("experience.title")}</h2>
                <div className={style.Wrapper_Cards_Experiencia_Laboral}>
                    <div className={style.Card_Experiencia_Laboral}>
                        <div className={style.Descripcion_Experiencia}>
                            <img src={inbound} />
                            <h3>{t("experience.inbound.role")}</h3>
                        </div>
                        <p className={style.Subtitulo_Experiencia}>{t("experience.inbound.location")}</p>
                        <p>{t("experience.inbound.description")}</p>
                    </div>
                    <div className={style.Card_Experiencia_Laboral}>
                        <div className={style.Descripcion_Experiencia}>
                            <img src={cim} />
                            <h3>{t("experience.cim.role")}</h3>
                        </div>
                        <p className={style.Subtitulo_Experiencia}>{t("experience.cim.location")}</p>
                        <p>{t("experience.cim.description")}</p>
                    </div>
                </div>
            </div>
            <div className={style.Estudios} ref={refEstudios}>
                <div className={style.Wrapper_Estudios}>
                    <h2>{t("studies.title")}</h2>
                    <h3>{t("studies.degree1.name")}</h3>
                    <p className={style.Subtitulo_Estudios}>{t("studies.degree1.institution")}</p>
                    <h3>{t("studies.degree2.name")}</h3>
                    <p className={style.Subtitulo_Estudios}>{t("studies.degree2.institution")}</p>
                    <p>{t("studies.degree2.description")}</p>
                </div>
                <div className={style.Wrapper_Otros}>
                    <div className={style.Idiomas}>
                        <h2>{t("studies.languages.title")}</h2>
                        <div className={style.Wrapper_Idioma}>
                            <img src={español} />
                            <p>{t("studies.languages.spanish")}</p>
                        </div>
                        <div className={style.Wrapper_Idioma}>
                            <img src={ingles} />
                            <p>{t("studies.languages.english")}</p>
                        </div>
                    </div>
                    <div className={style.Blog}>
                        <div className={style.Wrapper_Blog}>
                            <h2>Blog</h2>
                            <p>{t("studies.blog.text1")} <a href="https://mountainsblog.com/" target="_blank"><b>{t("studies.blog.text2")}</b></a></p>
                        </div>
                        <img src={mountainsblog} />
                    </div>
                </div>

            </div>
            <div className={style.Servicios} ref={refServicios}>
                <h2>{t("services.title")}</h2>
                <div className={style.Cards_Servicios}>
                    <div className={style.Card_Servicios}>
                        <h3>{t("services.design.title")}</h3>
                        <p>{t("services.design.description")}</p>
                    </div>
                    <div className={style.Card_Servicios}>
                        <h3>{t("services.development.title")}</h3>
                        <p>{t("services.development.description")}</p>
                    </div>
                    <div className={style.Card_Servicios}>
                        <h3>{t("services.seo.title")}</h3>
                        <p>{t("services.seo.description")}</p>
                    </div>
                </div>
            </div>
            <div className={style.Contacto} ref={refContacto}>
                <h2>{t("contact.title")}</h2>
                <div className={style.Contacto_Items}>
                    <div className={style.Correo_Contacto}>
                        <img src={correo} />
                        <p>sofiasawczuka@gmail.com</p>
                        <img src={copiar} onClick={CopiarBoton} className={style.Copiar_Boton_Contacto} />
                    </div>
                    <a href="https://github.com/SophSawczuk" target="_blank"><img src={github} className={style.Iconos_Contacto} /></a>
                    <a href="https://www.linkedin.com/in/sofia-sawczuk" target="_blank"><img src={linkedin} className={style.Iconos_Contacto} /></a>
                </div>
            </div>
        </div>
    )
}