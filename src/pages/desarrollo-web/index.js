import Head from "next/head"
import DesarrolloWebTemplate from "@/components/DesarrolloWebTemplate"



export default function DesarrolloWeb() {
  return (
    <>
      <Head>
        <title>Desarrollo Web Profesional en México | Universepage</title>
        <meta
          name="description"
          content="Desarrollo web a medida en México. Creamos plataformas, sistemas y soluciones digitales personalizadas."
        />
        <link
          rel="canonical"
          href="https://universepage.com.mx/desarrollo-web"
        />
      </Head>

       <DesarrolloWebTemplate ciudad="México" />
    </>
  )
}
