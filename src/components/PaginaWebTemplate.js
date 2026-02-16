import { useState } from "react"
import { serviciosConfig } from "@/data/serviciosConfig"
import PlanesPaginaWeb from "@/components/PlanesPaginaWeb"
import CompararPlanesPaginaWeb from "@/components/CompararPlanesPaginaWeb"
import BeneficiosPaginaWeb from "@/components/BeneficiosPaginaWeb"
import FormularioContacto from "@/components/FormularioContacto"
import Herramientas from "./Herramientas"
import Footer from './Footer'

export default function PaginaWebTemplate({
    servicio,
    ciudad,
    titulo,
    descripcion
    }) {
    const config = serviciosConfig[servicio]
    const [activeInfo, setActiveInfo] = useState("one-page")

    const handleInfoClick = (id) => {
    setActiveInfo(activeInfo === id ? null : id)
  }
  return (
    <>
      {/* HERO */}
        <section className="headers">
            <div className="container">
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            </div>
        </section>
        <section>
            <div className="container">
            <h2>
                Agencia de diseño web en {ciudad}
            </h2>

            <p>
            En <strong>Universepage</strong> ofrecemos servicios de
                <strong> diseño y desarrollo web en {ciudad}</strong>,
                enfocados en empresas que buscan destacar en el entorno digital.
            </p>
            </div>
        </section>
        <section>
        <div className='container'>

            <div class="content_about">
				<div class="about_img">
					<img src='../../assets/images/pagina_web.jpg' alt='paginas web - universepage' />
				</div>
				<div class="about_text_box">
					<div class="about_text">
                        <h2 style={{textAlign:'initial'}}>TRANSFORMANDO IDEAS EN SOLUCIONES DIGITALES</h2>
						<h4>Páginas web</h4>
						<p>Nos especializamos en la creación de <strong>páginas web personalizadas</strong> que se ajustan a las necesidades específicas de cada cliente. Nuestro equipo de expertos se encargará de cada detalle para asegurarse de que su presencia en línea refleje la esencia única de su negocio.</p>
						<p>La implementación de <strong>metodologías ágiles</strong> y las mejores prácticas de desarrollo nos permiten ofrecer productos de alta calidad en plazos eficientes. Estamos aquí para transformar tus ideas en soluciones digitales impactantes y escalables. </p>						
						<a href="#categorias" class="btn_about"  aria-label="categorias universepage">Ver categorias</a>
                        
					</div>
					
				</div>
			</div>
        </div>
    </section>
       {/* TIPOS DE PÁGINAS WEB */}
        <section className='categorias' id='categorias'>
        <div className='container'>
            <div className='title_categorias'>
                <h3>Tipos de páginas web</h3>
                <div className='description_categorias'>
                    <p>Las páginas web se pueden categorizar de diversas maneras según su estructura, propósito y funcionalidades. Algunas de las categorías comunes son:</p>
                </div>                
            </div>
            <div className='categoria_container'>
                <div className='categoria'>
                    
                    <div  className={`box_categoria ${activeInfo === 'one-page' ? 'active' : ''}`} id='one-page' onClick={() => handleInfoClick('one-page')}>
                        <div className='title_categoria'>
                            <h3>One Page (página única)</h3>                            
                        </div>
                    </div>
                    <div  className={`box_categoria ${activeInfo === 'multipage' ? 'active' : ''}`} id='multipage' onClick={() => handleInfoClick('multipage')}>  
                        <div className='title_categoria'>
                            <h3>Multipage (multipágina)</h3>
                        </div>
                    </div>
                    <div className={`box_categoria ${activeInfo === 'landing-page' ? 'active' : ''}`} id='landing-page' onClick={() => handleInfoClick('landing-page')}>
                        <div className='title_categoria'>
                            <h3>Landing page (página de aterrizaje) </h3>
                        </div>
                    </div>                    
                </div>   
                <div className='content_categoria'>
                    {activeInfo === 'one-page' && (
                        <div className='info_visible'>                            
                            
                            <div className='info_visible_content'>
                                <div className='info_visible_box'>                                    
                                    <i class="fi fi-rs-sitemap"></i>                                    
                                    <h4>Estructura </h4>
                                    <p>Toda la información y contenido están contenidos en una sola página web.</p>                                    
                                </div>
                                <div className='info_visible_box'>
                                    <i class="fi fi-rs-laptop-mobile"></i>
                                    <h4>Navegación </h4>
                                    <p>La navegación se realiza mediante enlaces que desplazan al usuario hacia diferentes secciones dentro de la misma página en lugar de cargar nuevas páginas.</p>
                                </div>
                                <div className='info_visible_box'>
                                    <i class="fi fi-rs-pencil-paintbrush"></i>
                                    <h4>Experiencia de Usuario </h4>
                                    <p>La navegación es fluida y continua, lo que puede ofrecer una experiencia más interactiva y cohesiva.</p>
                                </div>
                            </div>
                            
                        </div>
                    )}

                    {activeInfo === 'multipage' && (
                        <div className='info_visible'>                            
                            <div className='info_visible_content'>
                                <div className='info_visible_box'>
                                    <i class="fi fi-rs-sitemap"></i>      
                                    <h4>Estructura </h4>                                    
                                    <p>La información y el contenido están distribuidos en varias páginas web separadas.</p>                                    
                                </div>
                                <div className='info_visible_box'>
                                    <i class="fi fi-rs-laptop-mobile"></i>
                                    <h4>Navegación </h4>
                                    <p>Los enlaces de navegación llevan a los usuarios a páginas diferentes, cada una con su propia URL. Puede incluir menús de navegación más complejos con submenús.</p>
                                </div>
                                <div className='info_visible_box'>
                                    <i class="fi fi-rs-pencil-paintbrush"></i>
                                    <h4>Experiencia de Usuario </h4>
                                    <p>Permite organizar grandes cantidades de información de manera más ordenada y específica, facilitando el acceso a información detallada y compleja.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeInfo === 'landing-page' && (
                        <div className='info_visible'>                                                        
                            <div className='info_visible_content'>
                                <div className='info_visible_box'>
                                    <i class="fi fi-rs-sitemap"></i>      
                                    <h4>Estructura </h4>
                                    <p>Enfocada en un solo mensaje o propósito, y toda la página está diseñada para guiar al usuario hacia una acción específica.</p>
                                </div>
                                <div className='info_visible_box'>
                                    <i class="fi fi-rs-laptop-mobile"></i>
                                    <h4>Navegación </h4>
                                    <p>Minimiza o elimina la navegación para evitar que los usuarios se desvíen del objetivo principal.</p>
                                    
                                </div>
                                <div className='info_visible_box'>
                                    <i class="fi fi-rs-pencil-paintbrush"></i>
                                    <h4>Llamada a la Acción (CTA)</h4>
                                    <p> El objetivo principal de un CTA es convertir visitantes en leads o clientes, incitándolos a realizar una acción concreta como registrarse, comprar, descargar, suscribirse, etc.</p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
        </section>
    {/* PLANES DE PÁGINAS WEB */}
        {config.planes && (
    <section className="planes_web">
        <div className="container">
        <h2>{config.tituloPlanes} en {ciudad}</h2>

        <PlanesPaginaWeb />

        {config.comparar && <CompararPlanesPaginaWeb />}
        </div>
    </section>
    )}


{/*}    <section className="planes_web">
        <div className="container">

        <header className="planes_header">
        <h2>Planes de páginas web en {ciudad}</h2>
        <p>
            Elige el plan de diseño web que mejor se adapte a las necesidades
            de tu negocio.
        </p>
        </header>
        </div>
        <PlanesPaginaWeb />

    </section>
    
    <CompararPlanesPaginaWeb />
    
    <BeneficiosPaginaWeb />
    */}
    {/*<section className="beneficios">
        <div className="container">
            <h2>Todos los planes incluyen</h2>

            <ul>
            {config.beneficios.map((beneficio, index) => (
                <li key={index}>{beneficio}</li>
            ))}
            </ul>
        </div>
    </section>*/}
    <BeneficiosPaginaWeb />
    <FormularioContacto />
    <Herramientas />
  
  
    <Footer />




    </>
  )
}

    