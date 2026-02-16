'use client'

import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AvisoDePrivacidadPage() {
  return (
    <>
      <section>
        <div className='container'>
          <div >
            <h1>Aviso de privacidad</h1>
            <p>
              Nuestro propósito es lo que nos hace levantarnos cada mañana, <br />
              y esforzarnos por ofrecer un futuro más digital.
            </p>
          </div>
        </div>
      </section>

      <section >
        <div className='container'>
          <div>
            <p>
              Este Aviso de Privacidad lo emite <strong>UNIVERSEPAGE</strong>, responsable del tratamiento de sus datos personales. De acuerdo con lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y en su Reglamento, hace de su conocimiento que es responsable de recabar sus datos personales, del uso que se les dé a los mismos y de su protección.
            </p>
            <p>
              Como responsable de sus datos, implemento las medidas de seguridad administrativas y técnicas a mi alcance para proteger su información personal y evitar el acceso no autorizado.
            </p>

            <h4>Datos personales que se recaban</h4>
            <p>Los datos personales que recabamos incluyen:</p>
            <ul>
              <li>Nombre</li>
              <li>Empresa donde labora</li>
              <li>Teléfono</li>
              <li>Correo Electrónico</li>
            </ul>

            <h4>Finalidad del tratamiento de los datos personales:</h4>
            <p>Los datos personales que recabamos serán utilizados para las siguientes finalidades:</p>
            <ul>
              <li>Identificarlo como cliente y prestarle los servicios contratados con nosotros.</li>
              <li>Contactarlo para enviarle reportes de actividades y solicitar información respecto de temas relacionados con nuestros servicios.</li>
            </ul>

            <h4>Transferencia de datos personales:</h4>
            <p>No transferimos sus datos personales a terceros sin su previo consentimiento, salvo cuando sea necesario para cumplir con obligaciones legales o contractuales.</p>

            <h4>Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición):</h4>
            <p>Como titular de los datos personales, usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales (Derechos ARCO), conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento.</p>
            <p>
              Asimismo, puede revocar el consentimiento que nos haya otorgado para el uso de sus datos personales. Para ejercer estos derechos, podrá realizar su solicitud mediante el envío de un correo electrónico a la dirección <a href="mailto:contacto@universepage.com.mx">contacto@universepage.com.mx</a> o llamando al número telefónico <a href="tel:+526122180309" className='btn-llamar'>+52 612 218 0309</a>.
            </p>

            <h4>Uso de cookies y tecnologías de rastreo:</h4>
            <p>Nuestro sitio web puede utilizar cookies u otras tecnologías similares para mejorar la experiencia de usuario. Usted puede configurar su navegador para bloquear o aceptar cookies según sus preferencias.</p>

            <h4>Medidas de seguridad:</h4>
            <p>Implementamos diversas medidas de seguridad para proteger los datos personales que nos proporciona. Estos incluyen medidas técnicas y administrativas destinadas a evitar el acceso no autorizado y la divulgación indebida de la información.</p>

            <h4>Modificaciones al Aviso de Privacidad:</h4>
            <p>
              El presente Aviso de Privacidad puede ser modificado en el futuro. En caso de cualquier modificación, se lo notificaremos mediante un correo electrónico enviado a la dirección que nos proporcionó, o bien, publicaremos la actualización en nuestro sitio web en la siguiente dirección:
            </p>
            <Link href="https://universepage.com.mx/aviso-de-privacidad/" target="_blank">
              https://universepage.com.mx/aviso-de-privacidad/
            </Link>

            <p>
              No seremos responsables en caso de que usted no reciba dicha notificación por problemas con su cuenta de correo o por fallas en la transmisión de datos a través de Internet. No obstante, por su seguridad, el Aviso de Privacidad vigente estará disponible en todo momento en nuestro sitio web.
            </p>

            <label>Fecha de la última actualización: <br /> 27 de Septiembre del 2024</label>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
