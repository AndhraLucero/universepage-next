import Head from "next/head"
import PaginaWebTemplate from "@/components/PaginaWebTemplate"
import { ciudadesWeb } from "@/data/ciudadesWeb"

{/*
  
  import { useEffect } from "react"

useEffect(() => {
  if (window.gtag) {
    window.gtag("event", "view_ciudad", {
      ciudad: data.nombre
    })
  }
}, [data.nombre])

  
  */}

export default function PaginaWebCiudad({ ciudad, data }) {
    if (!data) return null   // 👈 evita pantalla blanca por error

  return (
    <>
      <Head>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <link rel="canonical"  href={`https://universepage.com.mx/pagina-web/${ciudad}`} />

         {/* SCHEMA LOCAL BUSINESS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Universepage",
              "url": "https://universepage.com.mx",
              "image": "https://universepage.com.mx/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": data.nombre,
                "addressCountry": "MX"
              },
              "areaServed": data.nombre,
              "sameAs": [
                "https://www.facebook.com/universepage",
                "https://www.instagram.com/universepage"
              ]
            })
          }}
        />
      </Head>

      <PaginaWebTemplate
        servicio="pagina-web"
        ciudad={data.nombre}
        titulo={data.h1}
        descripcion={data.texto}
      />
    </>
  )
}

/* ---------- SSG ---------- */

export async function getStaticPaths() {
  return {
    paths: Object.keys(ciudadesWeb).map((ciudad) => ({
      params: { ciudad }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = ciudadesWeb[params.ciudad]

  if (!data) {
    return { notFound: true }
  }

  return {
    props: {
      ciudad: params.ciudad,
      data
    }
  }
}
