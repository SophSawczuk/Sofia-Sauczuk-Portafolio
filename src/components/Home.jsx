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

    return(
        <div>
            <div className={style.Inicio} ref={refInicio}>
                <h1>Sofia Sauczuk</h1>
                <h2>Desarrollo Web - Diseño Web - SEO</h2>
                <p className={style.Description}>Creo <b>páginas web con propósito:</b> diseño desde la esencia del proyecto, entendiendo su historia y lo que busca resolver.</p>
                <div className={style.Correo_Inicio}>
                    <p><b>Correo:</b> <i>sofiasawczuka@gmail.com</i></p>
                    <img src={copiar} onClick={CopiarBoton}/>
                </div>
                <div className={style.Contant_Inicio}>
                    <a href="src\assets\CV-Sofia-Sauczuk.pdf" target="_blank"><button>Descargar CV</button></a>
                    <a href="https://github.com/SophSawczuk" target="_blank"><img src={github}/></a>
                    <a href="https://www.linkedin.com/in/sofia-sawczuk" target="_blank"><img src={linkedin}/></a>
                </div>
            </div>
            <div className={style.Acerca_De_Mi} ref={refAcercaDe}>
                <img src={soph} className={style.Soph_Mobile}/>
                <div className={style.Contenido_Acerca_De_Mi}>
                    <h2>Acerca de mi</h2>
                    <p>Soy de Argentina y me especializo en desarrollo frontend con React. Me enfoco en crear páginas web que no solo se vean bien, sino que también vendan: sitios pensados para comunicar mejor, generar confianza y convertir visitantes en clientes. Disfruto aprender constantemente y aplicar lo que aprendo para mejorar resultados reales.</p>
                    <h3>Frontend</h3>
                    <div>
                        <img src={javascript} title="JavaScript"/>
                        <img src={css} title="CSS"/>
                        <img src={html} title="HTML"/>
                        <img src={react} title="React"/>
                        <img src={redux} title="Redux"/>
                        <img src={wordpress} title="Wordpress"/>
                        <img src={bootstrap} title="Bootstrap"/>
                    </div>
                    <h3>Backend</h3>
                    <div>
                        <img src={sql} title="SQL"/>
                        <img src={node} title="NodeJS"/>
                        <img src={express} title="Express"/>
                        <img src={postgresql} title="PostgreSQL"/>
                    </div>
                    <h3>Herramientas</h3>
                    <div>
                        <img src={git}title="Git"/>
                        <img src={figma} title="Figma"/>
                        <img src={notion} title="Notion"/>
                        <img src={slack} title="Slack"/>
                    </div>
                </div>
                <img src={soph} className={style.Soph}/>
            </div>
            <div className={style.Proyectos} ref={refProyectos}>
                <h2>Proyectos</h2>
                <div className={style.Card_Proyectos}>
                    <div className={style.Contenido_Proyecto}>
                        <div className={style.Titulo_Proyecto}>
                            <img src={mountainsdevlogo}/>
                            <h3>Mountains Development</h3>
                        </div>
                        <p>Sitio web desarrollado con React pensado para ofrecer servicios de diseño y desarrollo web a alojamientos turísticos. El sitio está completamente optimizado para dispositivos móviles, con un diseño responsive que garantiza una navegación fluida en cualquier pantalla. Incluye un formulario de contacto simple y funcional que facilita la conversión de visitas en consultas. Cada sección fue diseñada estratégicamente para comunicar claridad, confianza y profesionalismo, reflejando mi enfoque en crear sitios visualmente atractivos, usables y orientados a resultados. </p>
                        <div className={style.Wrapper_Etiquetas}>
                            <div className={style.Etiquetas}>
                                <img src={jsgris}/>
                                <p>JavaScript</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={reactgris}/>
                                <p>React</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={htmlgris}/>
                                <p>HTML</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={cssgris}/>
                                <p>CSS</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={figmagris}/>
                                <p>Figma</p>
                            </div>
                        </div>
                        <div className={style.Links_Proyecto}>
                            <div className={style.Link_Proyecto}>
                                <a href="https://mountainsdevelopment.com/" target="_blank">
                                    <img src={link}/>
                                    <p>Ver sitio</p>
                                </a>
                            </div>
                            <div className={style.Link_Proyecto}>
                                <a href="https://github.com/SophSawczuk/mountains-development.git" target="_blank">
                                    <img src={github}/>
                                    <p>GitHub</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={mountainsdev} className={style.Preview_Proyecto}/>
                </div>
                <div className={style.Card_Proyectos}>
                    <div className={style.Contenido_Proyecto}>
                        <div className={style.Titulo_Proyecto}>
                            <img src={esquelapart}/>
                            <h3>Esquel Apart</h3>
                        </div>
                        <p>Esquel Apart es una página web que desarrollé para un complejo de apartamientos en la ciudad de Esquel, con el objetivo de mejorar su presencia online y facilitar la comunicación con potenciales huéspedes. El sitio es responsive, adaptado a todo tipo de dispositivos, y presenta un diseño limpio y moderno que resalta la calidez del alojamiento. Integré un sistema de reservas externo y un mapa de Google Maps para mejorar la experiencia del usuario y brindar información clara sobre la ubicación. Todo el desarrollo fue realizado con foco en la simplicidad, la velocidad de carga y la facilidad de uso, priorizando una navegación intuitiva y efectiva.</p>
                        <div className={style.Wrapper_Etiquetas}>
                            <div className={style.Etiquetas}>
                                <img src={jsgris}/>
                                <p>JavaScript</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={reactgris}/>
                                <p>React</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={htmlgris}/>
                                <p>HTML</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={cssgris}/>
                                <p>CSS</p>
                            </div>
                            <div className={style.Etiquetas}>
                                <img src={figmagris}/>
                                <p>Figma</p>
                            </div>
                        </div>
                        <div className={style.Links_Proyecto}>
                            
                            <div className={style.Link_Proyecto}>
                                <a href="https://github.com/SophSawczuk/Esquel-Apart.git" target="_blank">
                                    <img src={github}/>
                                    <p>GitHub</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={esquelapartpreview} className={style.Preview_Proyecto}/>
                </div>
                <div className={style.Card_Proyectos}>
                    <div className={style.Contenido_Proyecto}>
                        <div className={style.Titulo_Proyecto}>
                            <img src={webdesigneregypt}/>
                            <h3>Web Designer Egypt</h3>
                        </div>
                        <p>Web Designer Egypt es una página que desarrollé utilizando una plataforma no-code, en la cual me encargué tanto del diseño como del desarrollo frontend. Trabajé en la organización del contenido, la estructura visual y la adaptación responsiva para asegurar una experiencia fluida en todo tipo de dispositivos. Además, traduje todo el contenido original al español, adaptándolo para que fuera claro y efectivo para un nuevo público objetivo. Este proyecto refleja mi capacidad para combinar herramientas visuales con criterio de diseño y atención al detalle, entregando resultados profesionales sin necesidad de código tradicional.</p>
                        <div className={style.Wrapper_Etiquetas}>
                            <div className={style.Etiquetas}>
                                <img src={wordpressgris}/>
                                <p>Wordpress</p>
                            </div>
                        </div>
                        <div className={style.Links_Proyecto}>
                            <div className={style.Link_Proyecto}>
                                <a /* href="https://webdesigneregypt.com/" */ target="_blank" >
                                    <img src={link}/>
                                    <p>Ver sitio</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={webdesigeregyptpewview} className={style.Preview_Proyecto}/>
                </div>
            </div>
            <div className={style.Experiencia_Laboral} ref={refExperiencia}>
                <h2>Experiencia Laboral</h2>
                <div className={style.Wrapper_Cards_Experiencia_Laboral}>
                    <div className={style.Card_Experiencia_Laboral}>
                        <div className={style.Descripcion_Experiencia}>
                            <img src={inbound}/>
                            <h3>Inbound Factor - Marketing Assitant</h3>
                        </div>
                        <p className={style.Subtitulo_Experiencia}>2025 - Cairo, Egipto</p>
                        <p>En Inbound Factor trabajé como asistente, colaborando en diversas tareas relacionadas con marketing digital y desarrollo web orientadas en el SEO. Me encargué de la redacción de textos creativos para secciones específicas de páginas web, realicé traducciones del inglés al español, y asistí en la búsqueda y recopilación de backlinks según indicaciones del equipo. También participé en proyectos de desarrollo frontend, contribuyendo a la implementación de contenidos y ajustes visuales. Esta experiencia me permitió combinar habilidades técnicas y lingüísticas en un entorno profesional y colaborativo.</p>
                    </div>
                    <div className={style.Card_Experiencia_Laboral}>
                        <div className={style.Descripcion_Experiencia}>
                            <img src={cim}/>
                            <h3>Centro de Investigaciones Médicas Mar del Plata - Study Coordinator</h3>
                        </div>
                        <p className={style.Subtitulo_Experiencia}>2023 a 2025 - Mar del Plata, Argentina</p>
                        <p>Me desempeñé como Study Coordinator en el área de investigación clínica, donde fui responsable de coordinar y supervisar el desarrollo operativo de estudios médicos. Entre mis tareas principales se incluían la gestión de documentos regulatorios, contacto con laboratorios y monitores, organización de visitas, carga de datos en plataformas digitales (eCRF), seguimiento de pacientes y cumplimiento de los protocolos del estudio. Esta experiencia me permitió desarrollar un alto nivel de organización, atención al detalle y capacidad para trabajar bajo estándares internacionales de calidad y ética en investigación.</p>
                    </div>
                </div>
            </div>
            <div className={style.Estudios} ref={refEstudios}>
                <div className={style.Wrapper_Estudios}>
                    <h2>Estudios</h2>
                    <h3>Ingeniería Informática</h3>
                    <p className={style.Subtitulo_Estudios}>Universidad Nacional de Mar del Plata - 2022 - Actualidad</p>
                    <h3>Desarrollo Web Full Stack</h3>
                    <p className={style.Subtitulo_Estudios}>Soy Henry - 2022</p>
                    <p>Desarrollo de aplicaciones web full stack, con enfoque en JavaScript, React, Node.js, Express y PostgreSQL, aplicando metodologías ágiles y trabajo en equipo. </p>
                </div>
                <div className={style.Wrapper_Otros}>
                    <div className={style.Idiomas}>
                        <h2>Idiomas</h2>
                        <div className={style.Wrapper_Idioma}>
                            <img src={español}/>
                            <p>Español</p>
                        </div>
                        <div className={style.Wrapper_Idioma}>
                            <img src={ingles}/>
                            <p>Ingles</p>
                        </div>
                    </div>
                    <div className={style.Blog}>
                        <div className={style.Wrapper_Blog}>
                            <h2>Blog</h2>
                            <p>Descubre mi blog sobre <a href="https://mountainsblog.com/" target="_blank"><b>Nómades Digitales</b></a></p>
                        </div>
                        <img src={mountainsblog}/>
                    </div>
                </div>

            </div>
            <div className={style.Servicios} ref={refServicios}>
                <h2>¿Qué puedo hacer por ti?</h2>
                <div className={style.Cards_Servicios}>
                    <div className={style.Card_Servicios}>
                        <h3>Diseño Web</h3>
                        <p>Hoy en día, cuando alguien quiere saber más sobre un negocio, lo primero que hace es buscarlo en internet. Y lo que encuentra —o no encuentra— dice mucho más de lo que imaginamos. Una página web no es solo una carta de presentación, es la oportunidad de generar confianza en segundos, de destacar entre tantos y de convertir visitas en clientes reales. Si tenés un proyecto, un emprendimiento o un servicio para ofrecer, te puedo ayudar a darle presencia online con una web profesional, clara y adaptada a lo que necesitás.</p>
                    </div>
                    <div className={style.Card_Servicios}>
                        <h3>Desarrollo Web</h3>
                        <p>Detrás de cada sitio web que funciona bien, hay algo más que un diseño bonito: hay estructura, lógica y precisión. Una web ágil, que carga rápido, se adapta a todos los dispositivos y ofrece una experiencia fluida, no ocurre por casualidad. Es el resultado de un desarrollo pensado al detalle, donde cada línea de código tiene un propósito. Si necesitás una página que no solo se vea bien, sino que funcione de verdad, puedo ayudarte a construirla desde cero, combinando diseño y desarrollo para lograr un sitio sólido, moderno y eficaz.</p>
                    </div>
                    <div className={style.Card_Servicios}>
                        <h3>SEO</h3>
                        <p>Tener una página web es solo el primer paso. Porque si nadie la encuentra, es como tener un local abierto sin cartel ni dirección. Aparecer en los primeros resultados de búsqueda no es suerte: es estrategia, es entender cómo piensan tus potenciales clientes y cómo funcionan los motores de búsqueda. A través de técnicas de SEO (Search Engine Optimization), puedo ayudarte a posicionar tu sitio para que más personas lleguen a vos justo cuando están buscando lo que ofrecés.</p>
                    </div>
                </div>
            </div>
            <div className={style.Contacto} ref={refContacto}>
                <h2>¡Contacta conmigo!</h2>
                <div className={style.Contacto_Items}>
                    <div className={style.Correo_Contacto}>
                        <img src={correo}/>
                        <p>sofiasawczuka@gmail.com</p>
                        <img src={copiar} onClick={CopiarBoton} className={style.Copiar_Boton_Contacto}/>
                    </div>
                    <a href="https://github.com/SophSawczuk" target="_blank"><img src={github} className={style.Iconos_Contacto}/></a>
                    <a href="https://www.linkedin.com/in/sofia-sawczuk" target="_blank"><img src={linkedin} className={style.Iconos_Contacto}/></a>
                </div>
            </div>
        </div>
    )
}