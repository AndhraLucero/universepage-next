import Head from "next/head"
import Formulario from '@/components/Formulario'
import Footer from "@/components/Footer"

export default function GestionWeb() {

  return (
    <>
      <Head>
        <title>Administración y Gestión Web | Universepage</title>
        <meta
          name="description"
          content="Servicio profesional de administración y gestión de sitios web. Mantenimiento, actualizaciones y soporte técnico."
        />
      </Head>

      {/* HEADER */}
      <section className="headers">
        <div className="container">
          <div className="title">
            <h1>Administración de sitios web</h1>
            <p>
              Mantenimiento y administración completa para que tu sitio siempre
              esté seguro y actualizado
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN PRINCIPAL */}
      <section>
        <div className="container content_about">
          <div className="about_img">
            <img
              src="../assets/images/administracion.png"
              alt="Administración de sitios web"
            />
          </div>
          <div className="about_text_box">
            <h2>DESDE EL DESARROLLO HASTA LA PERFECCIÓN</h2>
            <p>
              Nos encargamos de la gestión completa de tu sitio web, desde el
              desarrollo hasta las actualizaciones continuas.
            </p>
            <a href="#servicios" className="btn_about">
              Ver más
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="services" id="servicios">
        <div className="container">
          <h2>Servicios integrados</h2>

          <div className="services_list">
            <div className="box_service">
              <h3>Gestión completa</h3>
              <p>
                Nos encargamos de cada aspecto técnico para garantizar un
                rendimiento óptimo.
              </p>
            </div>

            <div className="box_service">
              <h3>Copias de seguridad</h3>
              <p>
                Backups regulares para proteger tu información y evitar
                pérdidas.
              </p>
            </div>

            <div className="box_service">
              <h3>Soporte técnico</h3>
              <p>
                Atención prioritaria ante cualquier problema técnico o
                actualización.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section>
        <div className="container">
            <div class="contact">
				<div class="contact_info">
                    <img src='../assets/images/auditoria.jpg' alt='Administración de sitios universepage' />
					<div>
						<p><i class="fi fi-rr-angle-circle-right"></i> Ahorro de tiempo.</p>
                        <p><i class="fi fi-rr-angle-circle-right"></i> Solución de problemas.</p>
                        <p><i class="fi fi-rr-angle-circle-right"></i> Soporte técnico.</p>
                        <p><i class="fi fi-rr-angle-circle-right"></i> Diseño y desarrollo.</p>
                        <p><i class="fi fi-rr-angle-circle-right"></i> Escalabilidad.</p>
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
