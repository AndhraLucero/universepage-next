import Image from "next/image"
import Link from "next/link"
import cronograma from "@/assets/images/cronograma.webp"

export default function Cronograma() {
  return (
    <section className="cronograma">
      <div className="container">
        <div className="cronograma_box">
          
          <div className="cronograma_text">
            <div>
              <h2>¡Seguimiento en tiempo real!</h2>
              <h4>Cronograma de actividades</h4>
              <p>
                Sabemos la importancia que tiene cada etapa en la construcción de
                cada desarrollo, por eso cuando trabajas con nosotros tendrás
                acceso a una plataforma donde podrás dar seguimiento a cada
                proceso y monitorear las actividades en curso.
              </p>

              <Link href="/contacto" className="btn_about">
                Contáctanos
              </Link>
            </div>
          </div>

          <div className="cronograma_img">
            <Image
              src={cronograma}
              alt="Cronograma Universepage - Diseño web"
              width={500}
              height={400}
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
