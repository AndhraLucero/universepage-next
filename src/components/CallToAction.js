import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="call_to_action">
      <div className="container">
        <div className="text_call_to_action">
          <h2>¿Estás listo?</h2>
          <h3>Contáctanos ahora mismo para realizar una cotización</h3>

          <p>
            Puedes encontrarnos en <strong>La Paz, B.C.S</strong>, pero ofrecemos
            servicios en todo <strong>México</strong>. Nuestros principales
            clientes están en: <strong>Los Cabos</strong>,{" "}
            <strong>Guadalajara</strong>, <strong>Monterrey</strong> y{" "}
            <strong>Los Mochis</strong>.
          </p>

          <div>
            <Link href="/cotizador" className="btn_cta">
              Solicitar cotización
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
