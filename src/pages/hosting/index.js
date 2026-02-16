import Head from "next/head"
import HostingTemplate from "@/components/HostingTemplate"

export default function Hosting() {
  return (
    <>
      <Head>
        <title>Hosting Profesional en México | Universepage</title>
        <meta
          name="description"
          content="Hosting profesional en México con SSL, correos corporativos y soporte técnico especializado."
        />
        <link
          rel="canonical"
          href="https://universepage.com.mx/hosting"
        />
      </Head>

      <HostingTemplate ciudad="México" />
    </>
  )
}
