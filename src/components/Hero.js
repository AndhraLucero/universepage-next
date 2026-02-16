import Image from "next/image"
import Link from "next/link"

import heroImg from "@/assets/images/hero.webp"

export default function Hero() {
  return (
    <section className="hero">
         {/* VIDEO DE FONDO */}
     <video
        className="hero_video"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        >
        <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      
      {/* TEXTO PRIMERO EN EL DOM (SEO) */}
      <div className="container">
        <div className="hero_content">
          <div className="text_hero_box">
            <div className="text_hero">

              <h1>
                Diseño de Páginas Web en Baja California Sur
              </h1>

              <p>
                Desarrollo web profesional para negocios en Los Cabos, La Paz y todo BCS.
                Creamos sitios rápidos, modernos y optimizados para Google.
              </p>

              <div>
                <Link href="#services" className="btn_hero">
                  Ver servicios
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

   

      {/* IMAGEN FALLBACK / DECORATIVA */}
      <div className="hero_img">
        <Image
          src={heroImg}
          alt="Diseño y desarrollo web profesional en Baja California Sur"
          priority
        />
      </div>

    </section>
  )
}
