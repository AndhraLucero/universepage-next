import Head from "next/head"
import PaginaWebTemplate from "@/components/PaginaWebTemplate"

export default function PaginaWeb() {
  return (
    <>
      <Head>
        <title>Diseño de Páginas Web Profesionales | Universepage</title>
        <meta
          name="description"
          content="Diseño y desarrollo de páginas web profesionales para empresas en México."
        />
      </Head>

      <PaginaWebTemplate
      servicio="pagina-web"   
        ciudad="México"
        titulo="Diseño de páginas web profesionales"
        descripcion="Diseño y desarrollo de páginas web profesionales para empresas en México."
      />
    </>
  )
}
