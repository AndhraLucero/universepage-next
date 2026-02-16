import Image from "next/image"

import responsive from "@/assets/images/responsive.webp"
import analitycs from "@/assets/images/analitycs.webp"
import capacitacion from "@/assets/images/capacitacion.webp"
import soporte from "@/assets/images/soporte.webp"

export default function MoreServices() {
  return (
    <section className="more_services" id="more_services">
      <div className="container">
        <div>
          <h2>Nuestros servicios siempre incluyen</h2>
        </div>

        <div className="more_services_list">

          {/* Capacitación */}
          <div className="box_more_services">
            <div className="more_service_img">
              <Image
                src={capacitacion}
                alt="Capacitación universepage - Diseño web"
                width={120}
                height={120}
              />
            </div>
            <div className="more_service_title">
              <div>Capacitación</div>
            </div>
            <div className="more_service_text">
              <p>
                Te guiaremos a través de sesiones personalizadas, brindándote las
                herramientas y conocimientos necesarios para comprender y
                administrar tu sitio.
              </p>
            </div>
          </div>

          {/* Analytics */}
          <div className="box_more_services">
            <div className="more_service_img">
              <Image
                src={analitycs}
                alt="Analytics universepage - Diseño web"
                width={120}
                height={120}
              />
            </div>
            <div className="more_service_title">
              <div>Analytics</div>
            </div>
            <div className="more_service_text">
              <p>
                Con nuestro enfoque orientado a los datos, podrá obtener
                información valiosa sobre el rendimiento de su sitio web y
                tomar decisiones informadas.
              </p>
            </div>
          </div>

          {/* Responsive */}
          <div className="box_more_services">
            <div className="more_service_img">
              <Image
                src={responsive}
                alt="Diseños responsivos universepage - Diseño web"
                width={120}
                height={120}
              />
            </div>
            <div className="more_service_title">
              <div>Diseños Responsivos</div>
            </div>
            <div className="more_service_text">
              <p>
                Nuestros diseñadores contemplan el diseño adaptado a los
                diferentes tamaños de dispositivos como celular, tablets,
                laptops y computadoras.
              </p>
            </div>
          </div>

          {/* Soporte */}
          <div className="box_more_services">
            <div className="more_service_img">
              <Image
                src={soporte}
                alt="Soporte universepage - Diseño web"
                width={120}
                height={120}
              />
            </div>
            <div className="more_service_title">
              <div>Soporte</div>
            </div>
            <div className="more_service_text">
              <p>
                Ofrecemos soporte completo durante los primeros 12 días
                posteriores al lanzamiento para garantizar una experiencia
                óptima.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
