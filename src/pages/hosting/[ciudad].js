import Head from "next/head"
import HostingTemplate from "@/components/HostingTemplate"
import { ciudadesHosting } from "@/data/ciudadesHosting"

export default function HostingCiudad({ ciudad, data }) {
  if (!data) return null

  return (
    <>
      <Head>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <link
          rel="canonical"
          href={`https://universepage.com.mx/hosting/${ciudad}`}
        />

        {/* Schema Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Universepage",
              url: "https://universepage.com.mx",
              areaServed: data.nombre,
              address: {
                "@type": "PostalAddress",
                addressLocality: data.nombre,
                addressCountry: "MX",
              },
            }),
          }}
        />
      </Head>

      <HostingTemplate ciudad={data.nombre} />
    </>
  )
}

/* ---------- SSG ---------- */

export async function getStaticPaths() {
  return {
    paths: Object.keys(ciudadesHosting).map((ciudad) => ({
      params: { ciudad },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const data = ciudadesHosting[params.ciudad]

  if (!data) {
    return { notFound: true }
  }

  return {
    props: {
      ciudad: params.ciudad,
      data,
    },
  }
}
