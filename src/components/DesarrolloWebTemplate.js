import { useState } from "react"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import Footer from './Footer'
import desarrollo from "@/assets/images/desarrollo.jpg"
import html from "@/assets/images/html.png"
import css from "@/assets/images/css.png"
import js from "@/assets/images/js.png"
import reactImg from "@/assets/images/react.png"
import node from "@/assets/images/node.png"
import postgresql from "@/assets/images/postgresql.png"
import mysql from "@/assets/images/mysql.png"
import auditoria from "@/assets/images/auditoria.jpg"
import Formulario from "./Formulario"

export default function DesarrolloWebTemplate({ ciudad = "México" }) {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    servicio: "",
    email: "",
    mensaje: "",
  })

  const [alert, setAlert] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const enviarCorreo = async () => {
    try {
      await axios.post(
        "https://3cwma7t8s4.execute-api.us-east-1.amazonaws.com/prod/webservice",
        form
      )

      setForm({
        nombre: "",
        empresa: "",
        telefono: "",
        servicio: "",
        email: "",
        mensaje: "",
      })

      setAlert(true)
    } catch (error) {
      console.error(error)
      alert("Error al enviar el formulario")
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="headers">
        <div className="container">
          <h1>Desarrollo web en {ciudad}</h1>
          <p>
            Creamos sistemas, plataformas y soluciones digitales a medida para
            empresas en {ciudad}.
          </p>
        </div>
      </section>

      {/* SOBRE EL SERVICIO */}
      <section>
        <div className="container">
          <div className="content_about">
            <div className="about_img">
              <img src="/assets/images/desarrollo.jpg" alt="Desarrollo web" />
            </div>
            <div class="about_text_box">
                  <div class="about_text">
                      <h2 style={{textAlign:'initial'}}>CREAMOS LAS SOLUCIONES</h2>
                      <h4>Desarrollo de software</h4>
                      <p>En nuestra empresa de desarrollo de software, ofrecemos un servicio integral de desarrollo web para satisfacer todas sus necesidades.</p>
                      <p>Entendemos que cada proyecto web es único y merece una solución a medida que refleje la singularidad de tu visión y objetivos. Nuestro servicio de Desarrollo Web Personalizado está diseñado para aquellos que buscan más que presencia en línea.</p>                      
                      
                      <a href="#categorias" class="btn_about"  aria-label="categorias universepage">Ver categorias</a>
                  </div>                  
              </div>
            
          </div>
          <div>
            <h2>Soluciones a medida</h2>
            <p>
              Desarrollamos software personalizado, sistemas internos,
              plataformas web y aplicaciones empresariales adaptadas a tus
              necesidades específicas.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section>
        <div className="container services_list">
          <div className="box_service">
            <h3>Frontend & Backend</h3>
            <p>
              Desarrollo completo con tecnologías modernas como React, Node.js
              y bases de datos escalables.
            </p>
          </div>

          <div className="box_service">
            <h3>Integraciones</h3>
            <p>
              APIs, pasarelas de pago, automatizaciones, CRM, ERP y más.
            </p>
          </div>

          <div className="box_service">
            <h3>Soporte y mantenimiento</h3>
            <p>
              Monitoreo, mejoras continuas y soporte técnico especializado.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section>
        <div className="container">
          <div class="contact">
            <div class="contact_info">
              <img src='../../assets/images/auditoria.jpg' alt='Desarrollo web universepage' />
             
              <div>
                <p><i class="fi fi-rr-angle-circle-right"></i> Soluciones centradas en el cliente</p>
                <p><i class="fi fi-rr-angle-circle-right"></i>  Integración de funcionalidades específicas </p>
                <p><i class="fi fi-rr-angle-circle-right"></i> Implementación de metodologías ágiles</p>
              </div>					
            </div>
           
            

            <Formulario />
{/*}
            {alert && (
              <div className="alertMessage">
                ¡Tu formulario fue enviado correctamente!
              </div>
            )}

            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="mensaje"
              placeholder="Cuéntanos tu proyecto"
              value={form.mensaje}
              onChange={handleChange}
            />

            <button onClick={enviarCorreo}>Enviar</button>
            */}
      
        </div>
           </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="herramientas_tecnologias">
        <div className="container">
          
            <div className='herramientas'>
              <div className='herramientas_text'>
                  <h2>Tecnologías que utilizamos</h2>
                  <div className='herramientas_text_content'>
                      <p>Las herramientas y lenguajes que usamos dependerán en gran medida de los servicios específicos que necesitas y de la tecnología que mejor se adapte a tus requerimientos. Aquí tienes una lista general de herramientas, lenguajes y tecnologías que podríamos usar para tu desarrollo web personalizado:</p>
                  </div>
                 

              </div>

          <div className="herramientas_img">
            {[html, css, js, reactImg, node, postgresql, mysql].map(
              (tech, index) => (
                <div key={index}>
                  <Image src={tech} alt="Tecnología" width={80} />
                </div>
              )
            )}
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
