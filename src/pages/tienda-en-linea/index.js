import Head from "next/head"
import TiendaEnLineaTemplate from "../../components/TiendaEnLineaTemplate"

export default function tiendaEnLinea() {
  return (
     <>
      <Head>
        <title>Diseño de Tiendas en línea | Universepage</title>
        <meta
          name="description"
          content="Diseño y desarrollo de páginas web profesionales para empresas en México."
        />
      </Head>

      <TiendaEnLineaTemplate
      servicio="tienda-en-linea"  
        ciudad="México"
        titulo="Diseño de tiendas en línea"
        descripcion="Diseño y desarrollo de páginas web profesionales para empresas en México."
      />
    </>
  )
}
