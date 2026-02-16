import { useState } from "react"
import Head from "next/head"
import Footer from "@/components/Footer"
import Formulario from '@/components/Formulario'
import Herramientas from "../components/Herramientas"
export default function AuditoriaWeb() {



  return (
    <>
      <Head>
        <title>Auditoría Web Profesional | Universepage</title>
        <meta
          name="description"
          content="Auditoría web profesional para mejorar rendimiento, SEO, seguridad y experiencia de usuario."
        />
      </Head>

      {/* HEADER */}
      <section className="headers">
        <div className="container">
          <div className="title">
            <h1>Auditoría Web</h1>
            <p>
              Analizamos tu sitio para detectar problemas de rendimiento,
              seguridad y posicionamiento.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN PRINCIPAL */}
      <section>
        <div className="container content_about">
          <div className="about_img">
            <img
              src="../assets/images/auditoria.png"
              alt="Servicio de auditoría web"
            />
          </div>

          <div className="about_text_box">
            <h2>TRANSFORMANDO IDEAS EN SOLUCIONES DIGITALES</h2>
            <p>
              Nuestra auditoría web integral es el primer paso hacia una
              estrategia digital más efectiva y rentable.
            </p>
            <a href="#services" className="btn_about">
              Ver más
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="services" id="services">
        <div className="container">
          <h2>Auditoría web integral</h2>

          <div className="services_list">
            <div className="box_service">
              <h3>Análisis de Rendimiento</h3>
              <p>
                Evaluamos velocidad, optimización y tiempos de carga para
                mejorar la experiencia del usuario.
              </p>
            </div>

            <div className="box_service">
              <h3>SEO y Visibilidad</h3>
              <p>
                Analizamos estructura, palabras clave y posicionamiento en
                buscadores.
              </p>
            </div>

            <div className="box_service">
              <h3>Seguridad Web</h3>
              <p>
                Detectamos vulnerabilidades y reforzamos la protección de tu
                sitio.
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
                    <img src='../assets/images/auditoria.jpg' alt='servicio de auditoría web en universepage' />
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

      {/* TECNOLOGÍAS */}
      <Herramientas />

      <Footer />
    </>
  )
}
