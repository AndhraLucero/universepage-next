import Link from "next/link"

export default function Servicios() {
  return (
    <section className="services" id="services">
      <div className="container">

        <header className="services_header">
          <h2>Servicios de Diseño y Desarrollo Web</h2>
          <p>
            Soluciones digitales profesionales para empresas en Baja California Sur
            y todo México.
          </p>
        </header>

        <div className="services_list">

          <div className="box_service">
            <Link href="/pagina-web">
              <div className="service_title">
                <div className="service_icon">
                  <i className="fa-regular fa-file-code"></i>
                </div>
                <strong>Páginas web profesionales</strong>
              </div>
              <div className="service_text">
                <p>
                  Diseño y desarrollo de páginas web modernas, rápidas y optimizadas
                  para Google, enfocadas en convertir visitantes en clientes.
                </p>
              </div>
            </Link>
          </div>

          <div className="box_service">
            <Link href="/tienda-en-linea">
              <div className="service_title">
                <div className="service_icon">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <strong>Tiendas en línea</strong>
              </div>
              <div className="service_text">
                <p>
                  Creamos tiendas en línea seguras y escalables para que vendas
                  tus productos o servicios las 24 horas.
                </p>
              </div>
            </Link>
          </div>

          <div className="box_service">
            <Link href="/desarrollo-web">
              <div className="service_title">
                <div className="service_icon">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <strong>Desarrollo web a la medida</strong>
              </div>
              <div className="service_text">
                <p>
                  Soluciones web personalizadas utilizando tecnologías modernas,
                  pensadas para crecer junto a tu negocio.
                </p>
              </div>
            </Link>
          </div>

        </div>

        <div className="services_list">

          <div className="box_service">
            <Link href="/hosting-correo">
              <div className="service_title">
                <div className="service_icon">
                  <i className="fa-solid fa-server"></i>
                </div>
                <strong>Dominio, hosting y correo</strong>
              </div>
              <div className="service_text">
                <p>
                  Te ayudamos a contratar y administrar dominio, hosting y correos
                  empresariales confiables.
                </p>
              </div>
            </Link>
          </div>

          <div className="box_service">
            <Link href="/gestion-web">
              <div className="service_title">
                <div className="service_icon">
                  <i className="fa-solid fa-clipboard-list"></i>
                </div>
                <strong>Administración de sitios web</strong>
              </div>
              <div className="service_text">
                <p>
                  Mantenimiento, soporte técnico y actualizaciones para que tu
                  sitio siempre funcione al 100%.
                </p>
              </div>
            </Link>
          </div>

          <div className="box_service">
            <Link href="/auditoria">
              <div className="service_title">
                <div className="service_icon">
                  <i className="fa-solid fa-magnifying-glass-chart"></i>
                </div>
                <strong>Auditoría y SEO web</strong>
              </div>
              <div className="service_text">
                <p>
                  Analizamos tu sitio web para detectar oportunidades de mejora
                  en rendimiento, usabilidad y posicionamiento en Google.
                </p>
              </div>
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}
