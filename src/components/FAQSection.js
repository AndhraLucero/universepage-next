"use client"

import { useState } from "react"
import Image from "next/image"


const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item ${open ? "active" : ""}`}>
      <div className="question" onClick={() => setOpen(!open)}>
        <div className="icon_faq">
          <i className="fi fi-rr-angle-circle-down"></i>
        </div>
        <div>{question}</div>
      </div>

      <div className={`answer ${open ? "show" : ""}`}>
        <div className="answer-content">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Cómo empiezo?",
      answer:
        "Para empezar el proceso, nos gustaría recopilar información clave que nos ayudará a entender tus necesidades y expectativas.",
    },
    {
      question: "¿Qué recursos debo compartir para la elaboración de un sitio web?",
      answer:
        "Objetivos, público objetivo, contenido (texto, imágenes, video), logotipo, presupuesto y plazos.",
    },
    {
      question: "¿En cuánto tiempo tendré mi sitio web funcionando?",
      answer:
        "El tiempo varía según la complejidad del proyecto y las funcionalidades requeridas.",
    },
    {
      question: "¿Qué es el dominio y hosting?",
      answer:
        "El dominio es la dirección web y el hosting es el servicio que aloja tu sitio en internet.",
    },
    {
      question: "¿Usan gestores de contenido?",
      answer:
        "Sí, usamos WordPress y evaluamos otras opciones según el proyecto.",
    },
    {
      question: "¿Puedo hacer cambios en mi sitio web?",
      answer:
        "Sí, tendrás control total del contenido y ofrecemos soporte adicional.",
    },
    {
      question: "¿Hay límite de contenido?",
      answer:
        "No hay límite estricto, tu sitio puede crecer con tu negocio.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos transferencias bancarias y depósitos.",
    },
  ]

  return (
    <section className="faq">
      <div className="container">
        <div className="preguntas_frecuentes_title">
          <h2>Preguntas frecuentes</h2>
          <p>
            Aquí encontrarás las respuestas a algunas de las preguntas más comunes.
          </p>
        </div>

        <div className="preguntas_frecuentes">
          <div className="preguntas_frecuentes_faq">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <div className="preguntas_frecuentes_text">
            <div className="preguntas_frecuentes_img">
              <img
                src='/assets/images/faq.webp'
                alt="Preguntas frecuentes Universepage"/>
            </div>

            <h2>¿Tienes alguna pregunta?</h2>
            <p>
              Si tienes alguna otra duda, no dudes en ponerte en contacto con
              nuestro equipo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
