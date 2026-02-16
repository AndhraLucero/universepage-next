import facturacion from "@/assets/images/pagina-web/seguridad-informatica.png"
import helpdesk from "@/assets/images/pagina-web/correo-electronico.png"
import gestion from "@/assets/images/pagina-web/solucion-de-problemas.png"
import migracion from "@/assets/images/pagina-web/capacitacion.png"
import Image from "next/image"

export default function BeneficiosPaginaWeb() {
  return (
    <section className='beneficios'>
      <div className='container'>
        <div className="beneficios_planes_title">
          <h2>Todos los planes incluyen</h2>
          <p>Nuestros desarrollos web ofrecen beneficios clave</p>
        </div>

        <div className='beneficios_planes'>
          <div className='box_beneficios_planes'>
           
            <Image
              src={facturacion}
              alt="facturacion"
              width={80}
              height={80}
            />
            <div className='box_beneficios_title'>Certificado SSL</div>
            <div>Certificado de seguridad gratuito</div>
          </div>

          <div className='box_beneficios_planes'>
           
            <Image
              src={helpdesk}
              alt="helpdesk "
              width={80}
              height={80}
            />
            <div className='box_beneficios_title'>Correo empresarial</div>
            <div>Cuentas profesionales personalizadas</div>
          </div>

          <div className='box_beneficios_planes'>
            
            <Image
              src={gestion}
              alt="gestion"
              width={80}
              height={80}
            />
            <div className='box_beneficios_title'>Soporte técnico</div>
            <div>Soporte especializado</div>
          </div>

          <div className='box_beneficios_planes'>
            
            <Image
              src={migracion}
              alt="migracion"
              width={80}
              height={80}
            />
            <div className='box_beneficios_title'>Capacitación</div>
            <div>Te enseñamos a usar tu sitio</div>
          </div>
        </div>
      </div>
    </section>
  )
}
