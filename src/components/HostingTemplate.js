import { useState } from "react"
import axios from "axios"
import Footer from "./Footer"
import Formulario from "./Formulario"

export default function HostingTemplate({ ciudad = "México" }) {
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [alert, setAlert] = useState(false)

  const enviarFormulario = async () => {
    try {
      await axios.post(
        "https://7cwma7t8s4.execute-api.us-east-1.amazonaws.com/prod/webservice",
        {
          email,
          mensaje,
          servicio: "Hosting",
        }
      )

      setEmail("")
      setMensaje("")
      setAlert(true)
    } catch (error) {
      alert("Error al enviar el formulario")
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="headers">
        <div className="container">
          <h1>Hosting profesional en {ciudad}</h1>
          <p>
            Servidores rápidos, seguros y optimizados para empresas en {ciudad}.
          </p>
        </div>
      </section>
       <section>
      	<div className='container'>
          	<div class="content_about">
				<div class="about_img">
					<img src='../../assets/images/hosting.webp' alt='Hosting y Correos electronicos universepage' />
				</div>
				<div class="about_text_box">
					<div class="about_text">
						<h2 style={{textAlign:'initial'}}>CONÉCTATE AL MUNDO CON NUESTRO HOSTING</h2>
						<h4>Hosting Y Correos </h4>						
						<p>Te ofrecemos Servidores de alta velocidad y rendimiento para tu sitio web y soluciones de correo electrónico seguras.</p>
						<p>	
						Los servidores que gestionamos garantizan un rendimiento excepcional para tu sitio web, proporcionando tiempos de carga rápidos y una experiencia de usuario óptima.
						</p>
						<a href="#planess" class="btn_about"  aria-label="categorias universepage">Ver planes</a>
					</div>
					
				</div>
          	</div>
      	</div>
  </section>
  	<section id='planess'>
        <div className='container'>
            <div className='plans_hosting'>
                <div className='plans'>
                    <h1>Planes y precios</h1>
                    <p>Elige el plan que mejor se adapte a tus necesidades</p>
                </div>
                <div className='planes_hosting'>
                    <div className='plan_uno'>
                        <div className='plan_amount'>
                            <h2>Inicial</h2>
							<label>Para aquellos que están iniciando</label>
                            <p>MXN <strong>$183.99</strong> /mes</p>
                            <p>Facturación anual</p>
                            <div>
								<a href="https://wa.me/5216122186230?text=Me%20interesa%20una%20cotizaci%C3%B3n%20plan%20Inicial" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">Contratar ahora</a>
                            </div>
                        </div>
                        <div className='plan_content_items'>
                            <div className='plan_items'>
                                <label className='plan_item_left'>25</label>
                                <label>Cuentas de correo empresarial</label>
                            </div>
                            <div className='plan_items'>
                                <label className='plan_item_left'><i class="fi fi-rr-infinity"></i></label>
                                <label>Subdominios ilimitados</label>
                            </div>
                            <div className='plan_items'>
                                <label className='plan_item_left'>5</label>
                                <label>GB SSD para guardar los archivos de tu sitio</label>
                            </div>
                            <div className='plan_items'>
                                <label className='plan_item_left'>1</label>
                                <label>Certificado SSL gratuito</label>
                            </div>
							<div className='plan_items'>
                                <label className='plan_item_left'><i class="fi fi-rr-infinity"></i></label>
                                <label>Cuentas FTP ilimitadas</label>
                            </div>
							<div className='plan_items'>
                                <label className='plan_item_left'><i class="fi fi-rr-infinity"></i></label>
                                <label>Bases de datos MySQL ilimitadas</label>
                            </div>
							<div className='plan_items'>
                                <label className='plan_item_left'><i class="fi fi-rr-infinity"></i></label>
                                <label>Transferencia ilimitada</label>
                            </div>
                        </div>
                    </div>     
					<div className='plan_dos'>
                        <div className='plan_amount'>
                            <h2>Avanzado</h2>
							<label>Para desarrollos en crecimiento</label>
                            <p>MXN <strong>$297.50</strong> /mes</p>
                            <p>Facturación anual</p>
                            <div>
								<a href="https://wa.me/5216122186230?text=Me%20interesa%20una%20cotizaci%C3%B3n%20plan%20Avanzado" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">Contratar ahora</a>
                            </div>
                        </div>
                        <div className='plan_content_items'>
                            <div className='plan_items'>
                                <label className='plan_item_left'>50</label>
                                <label>Cuentas de correo empresarial</label>
                            </div>
                            <div className='plan_items'>
                                <label className='plan_item_left'><i class="fi fi-rr-infinity"></i></label>
                                <label>Subdominios ilimitados</label>
                            </div>
                            <div className='plan_items'>
                                <label className='plan_item_left'>20</label>
                                <label>GB SSD para guardar los archivos de tu sitio</label>
                            </div>
                            <div className='plan_items'>
                                <label className='plan_item_left'>1</label>
                                <label>Certificado SSL gratuito</label>
                            </div>
							<div className='plan_items'>
                                <label className='plan_item_left'><i class="fi fi-rr-infinity"></i></label>
                                <label>Cuentas FTP ilimitadas</label>
                            </div>
							<div className='plan_items'>
                                <label className='plan_item_left'><i class="fi fi-rr-infinity"></i></label>
                                <label>Bases de datos MySQL ilimitadas</label>
                            </div>
							<div className='plan_items'>
                                <label className='plan_item_left'><i class="fi fi-rr-infinity"></i></label>
                                <label>Transferencia ilimitada</label>
                            </div>
                        </div>
                    </div>  
					<div className='plan_tres'>
                        <div className='plan_amount'>
                            <h2>Plus</h2>
							<label>Para los que necesitan un alto rendimiento</label>
                            <p>MXN <strong>400.00</strong> /mes</p>
                            <p>Facturación anual</p>
                            <div>
								<a href="https://wa.me/5216122186230?text=Me%20interesa%20una%20cotizaci%C3%B3n%20plan%20Plus" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">Contratar ahora</a>
                            </div>
                        </div>
                        <div className='plan_content_items'>
                            <div className='plan_items'>
                                <label className='plan_item_left'>250</label>
                                <label>Cuentas de correo empresarial</label>
                            </div>
                            <div className='plan_items'>
                                <label className='plan_item_left'><i class="fi fi-rr-infinity"></i></label>
                                <label>Subdominios ilimitados</label>
                            </div>
                            <div className='plan_items'>
                                <label className='plan_item_left'>50</label>
                                <label>GB SSD para guardar los archivos de tu sitio</label>
                            </div>
                            <div className='plan_items'>
                                <label className='plan_item_left'>1</label>
                                <label>Certificado SSL gratuito</label>
                            </div>
							<div className='plan_items'>
                                <label className='plan_item_left'><i class="fi fi-rr-infinity"></i></label>
                                <label>Cuentas FTP ilimitadas</label>
                            </div>
							<div className='plan_items'>
                                <label className='plan_item_left'><i class="fi fi-rr-infinity"></i></label>
                                <label>Bases de datos MySQL ilimitadas</label>
                            </div>
							<div className='plan_items'>
                                <label className='plan_item_left'><i class="fi fi-rr-infinity"></i></label>
                                <label>Transferencia ilimitada</label>
                            </div>
                        </div>
                    </div>                     
             
                </div>
            </div>
        </div>
    </section>

      {/* BENEFICIOS */}
      	<section>
		<div className='container'>
			<div class="beneficios_planes_title">
				<h2>Todos los planes incluyen </h2>
                <p>Estamos comprometidos a proporcionarte las herramientas necesarias para que alcances tus metas en línea.</p>
			</div>
			<div className='beneficios_planes'>
				<div className='box_beneficios_planes'>
					<div><img src='../../assets/images/hosting/soporte-tecnico.png' alt='Help desk universepage'/></div>
					<div className='box_beneficios_title'>Help desk</div>
					<div>Acceso a nuestro sistema de soporte técnico con atención de 9:00 am a 6:30 pm de lunes a viernes.</div>
				</div>
				<div className='box_beneficios_planes'>
					<div><img src='../../assets/images/hosting/facturacion.png' alt='Facturación CFDI 4.0 universepage'/></div>					
					<div className='box_beneficios_title'>Facturación</div>
					<div>Facturación en pesos mexicanos en todos nuestros servicios</div>
				</div>
				<div className='box_beneficios_planes'>
					<div><img src='../../assets/images/hosting/gestion.png' alt='Gestión de sitios web'/></div>
					<div className='box_beneficios_title'>Gestión</div>
					<div>Personal con experiencia técnica y ejecutiva para la gestion de tu infraestructura</div>
				</div>
				<div className='box_beneficios_planes'>
					<div><img src='../../assets/images/hosting/migracion.png' alt='Help desk Migración gratuita universepage'/></div>
					<div className='box_beneficios_title'>Migración gratuita</div>
					<div>Transfiere tu dominio o página web sin costo</div>
				</div>

			</div>

		</div>
	</section>
 	<section>
		<div className='container'>
			<div className='cpanel'>
				<div className='beneficios_cpanel'>
					<h2>Portal de cliente completo</h2>
					<h3>Todas las herramientas que necesitas</h3>
					<ul>
						<li><i class="fi fi-rr-arrow-circle-right"></i> Crea tu cuentas de correo</li>
						<li><i class="fi fi-rr-arrow-circle-right"></i> Agrega y gestiona tus dominios</li>
						<li><i class="fi fi-rr-arrow-circle-right"></i> Crea tus preopios sitios web utilizando wordpress u otra aplicación </li>
						<li><i class="fi fi-rr-arrow-circle-right"></i> Ingresa a FTP, base de datos y recursos nativos de Cpanel</li>
						<li><i class="fi fi-rr-arrow-circle-right"></i> Instala el certificado SSL gratuitamente</li>
					</ul>
				</div>
				<div className='beneficios_cpanel'>
					<img src='../../assets/images/hosting/cpanel.png' alt='cpanel para administrar tu sitio web en universepage' />
					
				</div>
			</div>
		</div>

	</section>

    <section>
		<div class="container">
			<div class="contact">
				<div class="contact_info">
                    <img src='../../assets/images/auditoria.jpg' alt='hosting y correo para tu sitio web universepage' />
					<div>
						<p><i class="fi fi-rr-angle-circle-right"></i> Mejora en el rendimiento y velocidad del sitio.</p>
                        <p><i class="fi fi-rr-angle-circle-right"></i> Aumento de la visibilidad en los motores de búsqueda.</p>
                        <p><i class="fi fi-rr-angle-circle-right"></i> Reforzamiento de la seguridad en línea.</p>
                        <p><i class="fi fi-rr-angle-circle-right"></i> Optimización de la experiencia del usuario.</p>
                        <p><i class="fi fi-rr-angle-circle-right"></i> Toma de decisiones basada en datos analíticos.</p>
					</div>
					

				</div>
				<Formulario />
			</div>
		</div>
	</section>
  <br />


      <Footer />
    </>
  )
}
