import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Footer from "@/components/Footer";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [aceptoPoliticas, setAceptoPoliticas] = useState(true);
  const [alerta, setAlerta] = useState(false);

  const enviarCorreo = async () => {
    try {
      await axios.post(
        "https://7cwma7t8s5.execute-api.us-east-1.amazonaws.com/prod/webservice",
        {
          nombre,
          empresa,
          telefono,
          servicio,
          correo,
          mensaje,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setNombre("");
      setEmpresa("");
      setTelefono("");
      setServicio("");
      setCorreo("");
      setMensaje("");
      setAlerta(true);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Error al enviar el correo");
    }
  };

  return (
    <>
      <Head>
        <title>Contacto | UniversePage</title>
        <meta
          name="description"
          content="Contáctanos para desarrollar tu página web o tienda en línea. Solicita información sobre nuestros servicios de desarrollo web profesional en México."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://universepage.mx/contacto" />
      </Head>

      <main>
        {/* HEADER */}
        <section className="headers">
          <div className="container">
            <div className="title">
              <h1>Contacto</h1>
              <p>
                ¿Tienes una idea o proyecto en mente? Escríbenos y hagámoslo
                realidad.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section>
          <div className="container">
            <div className="contact">
              {/* INFO */}
              <div className="contact_info">
                <div>
                  <Image
                    src="/assets/images/contacto.webp"
                    alt="UniversePage contacto"
                    width={500}
                    height={400}
                    priority
                  />
                </div>

                <h2>
                  ¡Contáctanos,
                  <br /> queremos escucharte!
                </h2>

                <p>
                  Déjanos tus datos y nos pondremos en contacto contigo para
                  ayudarte con tu proyecto digital.
                </p>

                <div className="call_phone">
                  <p>📞</p>
                  <p>612 197 00 06</p>
                </div>

                <div className="call_mail">
                  <p>✉️</p>
                  <p>contacto@universepage.com.mx</p>
                </div>
              </div>

              {/* FORMULARIO */}
              <div className="formulario">
                <div>
                  <h2>Envíanos tus dudas o comentarios</h2>
                  <p>
                    Completa el formulario y uno de nuestros asesores se pondrá
                    en contacto contigo.
                  </p>
                </div>

                {alerta && (
                  <div className="alertMessage">
                    <label>¡Tu formulario ha sido enviado con éxito!</label>
                    <p>
                      Nuestro equipo está revisando la información y pronto se
                      pondrá en contacto contigo.
                    </p>
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
                    placeholder="Nombre de tu empresa (opcional)"
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
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                  >
                    <option>¿Qué servicio te interesa?</option>
                    <option>Página web</option>
                    <option>Tienda en línea</option>
                    <option>Desarrollos personalizados</option>
                    <option>Dominio, Hosting y Correo</option>
                    <option>Gestión de contenido</option>
                    <option>Auditoría web</option>
                    <option>Otro tema</option>
                  </select>
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />

                <textarea
                  placeholder="¿Cómo podemos ayudarte?"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />

                <div className="term-cond">
                  <input
                    type="checkbox"
                    checked={aceptoPoliticas}
                    onChange={() =>
                      setAceptoPoliticas(!aceptoPoliticas)
                    }
                  />
                  Acepto el aviso legal y la política de privacidad.
                </div>

                <button
                  className="btn_enviar"
                  disabled={!aceptoPoliticas}
                  onClick={enviarCorreo}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
