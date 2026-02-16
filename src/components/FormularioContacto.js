import { useState } from "react"
import Image from "next/image"

export default function FormularioContacto({
  servicio: servicioProp,
  ciudad,
}) {
  // estados del formulario
  const [nombre, setNombre] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [telefono, setTelefono] = useState("")
  const [servicioSeleccionado, setServicioSeleccionado] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [aceptoPoliticas, setAceptoPoliticas] = useState(true)

  // estados de UI
  const [showAlert, setShowAlert] = useState(false)

  const [loading, setLoading] = useState(false)

  const enviarCorreo = async () => {
    if (loading) return

    setLoading(true)
    setShowAlert(false)

    // si el usuario no elige servicio, usamos el de la página
    const servicioFinal = servicioSeleccionado || servicioProp

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre,
          empresa,
          telefono,
          servicio: servicioFinal,
          ciudad,
          email,
          mensaje
        })
      })

      if (!res.ok) {
        throw new Error("Error al enviar el formulario")
      }

      // limpiar campos
      setNombre("")
      setEmpresa("")
      setTelefono("")
      setServicioSeleccionado("")
      setEmail("")
      setMensaje("")
      setShowAlert(true)

      if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "formulario_enviado",
        servicio: servicioFinal || "Formulario general",
        ciudad
    })
}



    } catch (error) {
      console.error(error)
      alert("Ocurrió un error al enviar el formulario")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <div className="container">
        <div className="contact">

          {/* INFO */}
          <div className="contact_info">
            <img
              src='./assets/images/auditoria.jpg'
              alt="Auditoría web"
           
            />
            <div>
              <p>Diseño UX/UI</p>
              <p>Optimización de velocidad</p>
              <p>Formulario de contacto</p>
              <p>SEO básico</p>
              <p>Redes sociales</p>
            </div>
          </div>

          {/* FORM */}
          <div className="formulario">
            <h2>Envíanos tus dudas o comentarios</h2>

            {showAlert  && (
              <div className="alertMessage">
                <strong>¡Formulario enviado!</strong>
                <p>Nos pondremos en contacto contigo pronto.</p>
              </div>
            )}

            <div className="form-group">
              <input
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <input
                type="text"
                placeholder="Empresa (opcional)"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />

              <select
                value={servicioSeleccionado}
                onChange={(e) => setServicioSeleccionado(e.target.value)}
              >
                <option value="">¿Qué servicio te interesa?</option>
                <option>Página web</option>
                <option>Tienda en línea</option>
                <option>Desarrollos web personalizados</option>
                <option>Hosting y correo</option>
                <option>Auditoría web</option>
              </select>
            </div>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              placeholder="¿Cómo podemos ayudarte?"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />

            <label className="term-cond">
              <input
                type="checkbox"
                checked={aceptoPoliticas}
                onChange={() => setAceptoPoliticas(!aceptoPoliticas)}
              />
              Acepto el aviso legal y la política de privacidad
            </label>

            <button
              className="btn_enviar"
              disabled={!aceptoPoliticas || loading}
              onClick={enviarCorreo}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
