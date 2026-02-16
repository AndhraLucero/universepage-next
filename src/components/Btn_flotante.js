"use client"

export default function Btn_flotante() {

  const handleCallClick = (e) => {
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(
      navigator.userAgent
    )

    if (!isMobile) {
      e.preventDefault()
    }
  }

  return (
    <section>
      <div className="fab-container">

        <div className="fab shadow" aria-label="Soporte">
          <div className="fab-content">
            <span className="material-icons">support_agent</span>
          </div>
        </div>

        <div className="sub-button shadow">
          <a
            href="tel:6121970006"
            className="btn-llamar"
            onClick={handleCallClick}
            aria-label="Llamar por teléfono"
          >
            <span className="material-icons">phone</span>
          </a>
        </div>

        <div className="sub-button shadow">
          <a
            href="mailto:contacto@universepage.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por correo"
          >
            <span className="material-icons">mail_outline</span>
          </a>
        </div>

        <div className="sub-button shadow">
          <a
            href="https://wa.me/5216121970006?text=Me%20interesa%20una%20cotización"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

      </div>
    </section>
  )
}
