import { useState } from "react"
import { serviciosConfig } from "@/data/serviciosConfig"
import PlanesTiendaEnLinea from "@/components/PlanesTiendaEnLinea"
import CompararPlanesTienda from "./CompararPlanesTienda"
import BeneficiosPaginaWeb from "@/components/BeneficiosPaginaWeb"
import FormularioContacto from "@/components/FormularioContacto"
import Herramientas from "./Herramientas"
import Footer from './Footer'

export default function TiendaEnLineaTemplate({
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
                Tienda en línea en {ciudad}
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
					<img src='../../assets/images/tienda_en_linea.jpg' alt='paginas web - universepage' />
				</div>
				<div class="about_text_box">
					<div class="about_text">
                        <h2 style={{textAlign:'initial'}}>TRANSFORMANDO IDEAS EN SOLUCIONES DIGITALES</h2>
						<h4>Tienda en línea</h4>
						<p>Diseñamos y desarrollamos <strong>tiendas en linea</strong> para satisfacer las necesidades específicas de cada cliente. Nuestro equipo de expertos se sumerge en cada detalle para asegurarse de que su presencia en la web refleje la identidad única de su negocio.</p>
						<p>La implementación de <strong>metodologías ágiles</strong> y las mejores prácticas de desarrollo nos permiten ofrecer productos de alta calidad en plazos eficientes. Estamos aquí para transformar tus ideas en soluciones digitales impactantes y escalables. </p>						
						<a href="#categorias" class="btn_about"  aria-label="categorias universepage">Ver categorias</a>
                        
					</div>
					
				</div>
			</div>
        </div>
    </section>
    
  <section className='tipos_tienda'>
      <div className='container'>
            <div>
                <h2>¿CÓMO SABER LO QUE NECESITO?</h2>            
                <p>Las tiendas en línea web se pueden categorizar de diversas maneras según su estructura, propósito y funcionalidades. Algunas de las categorías comunes son:</p>
            </div>
          <div className='pagina_web'>
              <div className='box_pagina_web'>
                  <div className='card_pagina_web'> 
                      <div className='card_pagina_web_img'>
                          <img src='../../assets/images/tienda-con-pasarela.webp' alt='Tienda con pasarela de pago -universepage' />
                      </div>
                      <div className='card_pagina_web_title'>
                          <h2>Tienda con pasarela de pago</h2>
                      </div>
                      <div className='card_pagina_web_text'>
                          <p>Son tiendas en línea estándar que ofrecen una variedad de productos o servicios. Pueden tener una amplia gama de categorías y características, como carritos de compra, opciones de pago variadas, y más.</p>
                         {/* <p>Características: Secciones organizadas de manera vertical u horizontal, menús de navegación que llevan a diferentes partes de la misma página.</p>*/}
                      </div>
                      {/* <div className='card_btn'>
                        <a href="https://wa.me/5216122186230?text=Me%20interesa%20una%20cotizaci%C3%B3n%20Tienda%20con%20pasarela"  className="btn_serviceweb" target="_blank" rel='noopener noreferrer' aria-label="Contactar por WhatsApp" style={{color:'#fff'}}>
                            Cotizar ahora
                            </a>
                        </div>*/}
                  </div>
              </div>
              <div className='box_pagina_web'>
                  <div className='card_pagina_web'> 
                      <div className='card_pagina_web_img'>
                          <img src='../../assets/images/tienda.jpg' alt='Tienda tipo catálogo -universepage' />
                      </div>
                      <div className='card_pagina_web_title'>
                          <h2>Tipo catálogo</h2>
                      </div>
                      <div className='card_pagina_web_text'>
                          <p>Se centran en productos o servicios específicos que requieran una cotización por otro medio. Por ejemplo, un producto con botón directo a WhatsApp</p>
                          {/*<p>Características: Menús de navegación que dirigen a diversas secciones, generalmente con una estructura jerárquica de páginas.</p>*/}
                      </div>
                    {/*<div className='card_btn'>
                      <a href="https://wa.me/5216122186230?text=Me%20interesa%20una%20cotizaci%C3%B3n%20Tienda%20tipo%20catálogo"  className="btn_serviceweb" target="_blank" rel='noopener noreferrer' aria-label="Contactar por WhatsApp" style={{color:'#fff'}}>
                      Cotizar ahora
                         </a>
                          
                      </div>*/}

                  </div>

              </div>
            
              <div className='box_pagina_web'>
                  <div className='card_pagina_web'> 
                      <div className='card_pagina_web_img'>
                        <img src='../../assets/images/tienda-catalogo.jpg' alt='Diseño y desarrollo de tiendas online universepage' />
                      </div>
                      <div className='card_pagina_web_title'>
                          <h2>Mercados en línea</h2>
                      </div>
                      <div className='card_pagina_web_text'>
                          <p>Plataformas que permiten a vendedores individuales ofrecer sus productos o servicios. Ejemplo: Mercado libre, eBay o Amazon.</p>                          
                      </div>
                     {/* <div className='card_btn'>
                      <a href="https://wa.me/5216122186230?text=Me%20interesa%20una%20cotizaci%C3%B3n%20Tienda%20tipo%20mercado"  className="btn_serviceweb" target="_blank" rel='noopener noreferrer' aria-label="Contactar por WhatsApp" style={{color:'#fff'}}>
                      Cotizar ahora
                         </a>
                      </div>*/}
                  </div>
              </div>
          </div>
      </div>
  </section>

    {/* PLANES DE PÁGINAS WEB */}
    {config.planes && (
  <section className="planes_web">
    <div className="container">
      <h2 className="pricing-title">{config.tituloPlanes} en {ciudad}</h2>

      <PlanesTiendaEnLinea />


    </div>
  </section>
)}
    
    <section className="comparar-planes">
        <CompararPlanesTienda />

    </section>

    <BeneficiosPaginaWeb />
    <FormularioContacto />
    <Herramientas />
  
  
    <Footer />




    </>
  )
}

    