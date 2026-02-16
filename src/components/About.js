import Image from "next/image"
import Link from "next/link"


export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="content_about">

          <div className="about_img">
           
        <img
          src="/assets/images/about.jpg"
          alt="Agencia de diseño y desarrollo web en Baja California Sur"
          loading="lazy"
          className="about_img_img"
        />

          </div>

          <div className="about_text_box">
            <div className="about_text">

              <h2 style={{ color: "#2874A6" }}>
                Bienvenido a Universepage
              </h2>

              <p>
                En <strong>Universepage</strong>, somos una agencia especializada en
                <strong> diseño y desarrollo web en Baja California Sur</strong>.
                Ayudamos a negocios a construir una presencia digital sólida,
                funcional y orientada a resultados.
              </p>

              <p>
                Nuestro enfoque es completamente personalizado: cada proyecto se
                diseña a la medida, cuidando rendimiento, experiencia de usuario
                y posicionamiento en Google.
              </p>

              <p>
                Contamos con la experiencia y las herramientas necesarias para
                ofrecer soluciones web modernas que realmente convierten.
              </p>

              <Link href="/nosotros" className="btn_about">
                Conócenos
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
