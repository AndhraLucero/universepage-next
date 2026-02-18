"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Footer() {

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://widget.clutch.co/static/js/widget.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section className="footer">
      <div className="container">
        <div className="footer_content">

          <div className="footer_main_box">
            <div style={{ textTransform: "uppercase" }}>
              <h2>universepage</h2>
            </div>

            <p>
              Somos una agencia especializada en el desarrollo web, ofrecemos
              soluciones personalizadas, modernas y funcionales que destacan la
              identidad única de cada proyecto.
            </p>

            <div className="social">
              <div className="social_icon">
                <i className="fi fi-brands-facebook"></i>
              </div>
              <div className="social_icon">
                <i className="fi fi-brands-instagram"></i>
              </div>
              <div className="social_icon">
                <i className="fi fi-brands-whatsapp"></i>
              </div>
            </div>

            <Link href="/" className="links_menu">
              Términos y condiciones
            </Link>

            <Link href="/aviso-de-privacidad" className="links_menu">
              Aviso de privacidad
            </Link>

            <div
              className="clutch-widget"
              data-url="https://widget.clutch.co"
              data-widget-type="2"
              data-height="45"
              data-nofollow="false"
              data-expandifr="true"
              data-scale="100"
              data-clutchcompany-id="2562421"
              style={{ background: "#fff", padding: ".5rem" }}
            />
          </div>

          <div className="footer_container">
            <div className="footer_box">
              <h3>Menú</h3>
              <Link href="/">Inicio</Link>
              <Link href="/nosotros">Nosotros</Link>
              <Link href="/">Servicios</Link>
              <Link href="/cotizador">Cotizador</Link>
              <Link href="/contacto">Contacto</Link>
            </div>

            <div className="footer_box">
              <h3>Servicios</h3>
              <Link href="/pagina-web">Página web</Link>
              <Link href="/tienda-en-linea">Tienda en línea</Link>
              <Link href="/auditoria">Auditoría web</Link>
              <Link href="/contacto">Soporte</Link>
            </div>

            <div className="footer_box">
              <h3>Soluciones</h3>
              <Link href="/hosting-correo">Hosting y Correo</Link>
              <Link href="/desarrollo-web">Dominios</Link>
              <Link href="/gestion-web">Desarrollo de software</Link>
              <Link href="/auditoria">Gestión de contenido web</Link>
            </div>
          </div>

        </div>

        <div className="footer_copyright">
          <div className="container">
            <label>
              Copyright © 2024 UNIVERSEPAGE - Soluciones Web
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}
