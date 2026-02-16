/*import Head from "next/head"
import Link from "next/link"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Servicios from "@/components/Servicios"
import MoreServices from "@/components/MoreServices"
import CallToAction from "@/components/CallToAction"
import Cronograma from "@/components/Cronograma"
import FAQSection from "@/components/FAQSection"
import BtnFlotante from "@/components/Btn_flotante"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Diseño Web en Baja California Sur | Universepage</title>
        <meta
          name="description"
          content="Diseño y desarrollo web profesional en Baja California Sur. Creamos páginas web modernas, rápidas y optimizadas para Google."
        />
        <link rel="canonical" href="https://universepage.com.mx/" />
      </Head>

      <Hero />

      {/* H1 SEO REAL (puede ir dentro de Hero si ya existe) --/}
      <h1 className="visually-hidden">
        Diseño de Páginas Web en Baja California Sur
      </h1>
     
      <section className="otras_ciudades">
        <div className="container">
          <h3>También ofrecemos diseño web en:</h3>
          <ul>
            <li><Link href="/pagina-web/baja-california-sur">Baja California Sur</Link></li>
            <li><Link href="/pagina-web/guadalajara">Guadalajara</Link></li>
            <li><Link href="/pagina-web/monterrey">Monterrey</Link></li>
          </ul>
        </div>
      </section>

      <About />
      <Servicios/>
      <MoreServices />
      <CallToAction />
      <Cronograma />
      <FAQSection />
      <BtnFlotante />
      <Footer />
    </>
  )
}
*/

import Head from "next/head"

import Hero from "@/components/Hero"
import About from "@/components/About"
import Servicios from "@/components/Servicios"
import MoreServices from "@/components/MoreServices"
import CallToAction from "@/components/CallToAction"
import Cronograma from "@/components/Cronograma"
import FAQSection from "@/components/FAQSection"
import Btn_flotante from "@/components/Btn_flotante"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Universepage | Diseño y Desarrollo Web</title>
        <meta
          name="description"
          content="Diseño de páginas web profesionales, rápidas y optimizadas para Google."
        />
        <link rel="canonical" href="https://universepage.com.mx" />
      </Head>

      <Hero />
      <About />
      <Servicios />
      <MoreServices />
      <CallToAction />
      <Cronograma />
      <FAQSection />
      <Btn_flotante />
      <Footer />
    </>
  )
}
