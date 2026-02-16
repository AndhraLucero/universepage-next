import Header from "@/components/Header"
import '@/styles/aviso_privacidad.scss'
import '@/styles/blog_nota.scss'
import '@/styles/blog.scss'
import '@/styles/contacto.scss'
import '@/styles/cotizador.scss'

import '@/styles/desarrollo.scss'
import '@/styles/footer.scss'
import '@/styles/header.scss'
import '@/styles/headers.scss'
import '@/styles/hosting.scss'

import '@/styles/nosotros.scss'
import '@/styles/pagina_web.scss'
import '@/styles/planes_pagina_web.scss'
import '@/styles/portafolio.scss'
import '@/styles/pricing_page.scss'

import '@/styles/pricing.scss'
import '@/styles/prueba.scss'
import '@/styles/styles.scss'
import '@/styles/tienda.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
     
    </>
  )
}