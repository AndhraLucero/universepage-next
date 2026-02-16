import axios from "axios"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  const {
    nombre,
    empresa,
    telefono,
    servicio,
    email,
    mensaje
  } = req.body

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ message: "Campos obligatorios faltantes" })
  }

  try {
    await axios.post(
     
      //"http://localhost:3001/enviar-correo",
      "https://3cwma7t8s4.execute-api.us-east-1.amazonaws.com/prod/webservice",

      {
        nombre,
        empresa,
        telefono,
        servicio,
        email,
        mensaje,
        origen: "pagina-web"
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error("Error enviando a AWS:", error.response?.data || error)

    return res.status(500).json({
      message: "Error al enviar el formulario"
    })
  }
}
