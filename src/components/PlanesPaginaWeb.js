import React, { useState } from "react";
import "../styles/planes_pagina_web.css"; // Asegúrate de importar los estilos

const plans = [
  {
    name: "Emprendedor",
    description: "Ideal para freelancers o emprendedores que están comenzando.",
    features: [ 
      "Diseño estándar",
      "Hasta 5 secciones (one page)",    
      "Formulario de contacto",
      "Soporte técnico por correo",
       
    ],
    monthly: 502.67,
    yearly: '6,032',
  },
  {
    name: "Profesional",
    description: "Para aquellos que necesitan más presencia y funcionalidades.",
    features: [
        "Diseño personalizado",
        "Hasta 6 secciones (one page o Multipage)",
        "Dominio y hosting",
        "20 cuentas de corporativos",
        "Soporte técnico por correo",
    ],
    monthly: 920.75,
    yearly: '11,049',
  },
  {
    name: "Negocio",
    description: "Pensado para los que buscan posicionamiento, funcionalidad y marketing.",
    features: [
        "Diseño personalizado",
        "Dominio y hosting",
        "Certificado SSL",
        "Correos ilimitados",         
        "Chat de atención a clientes",
        "Optimización SEO",
        "Integración con Google Analytics",  
        "Soporte técnico prioritario (email y WhatsApp)",   
    ],
    monthly: '1,601',
    yearly: '19,217',
  },
  {
    name: "Empresarial",
    description: "La solución más completa. Con funciones avanzadas o necesidades específicas.",
    features: [

        "Diseño personalizado",
        "Dominio y hosting",
        "Certificado SSL",
        "Correos ilimitados",
        "Sitio web sin límite de secciones",
        "Chat de atención a clientes",
        "Optimización SEO",
        "Multi-idioma",
        "Integración con Google Analytics",  
        "Envío de URLs a Google",
        "Soporte técnico prioritario (email y WhatsApp)",
      
    ],
    monthly: '2,600',
    yearly: '32,000',
  },
];

export default function PlanesPaginaWeb() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="planes-paginas-web">
    <div className="container">
      <h2 className="pricing-title">Planes de Suscripción</h2>

      <div className="toggle-container">
        <span>Pago mensual</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <span className="slider"></span>
        </label>
        <span>Pago anual</span>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.name} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="description">{plan.description}</p>
            <div className="price">
              ${isYearly ? plan.yearly : plan.monthly}
              <span className="price-period">
              MXN/{isYearly ? "año" : "mes"}
              </span>
            </div>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>
            <button
              className="select-button"
              onClick={() => alert(`Elegiste el plan ${plan.name}`)}
            >
              Contratar plan
            </button>
            <div style={{marginTop:'.5rem'}}>
              <a href="https://wa.me/5216122186230?text=Me%20interesa%20una%20cotizaci%C3%B3n%20como%20pago%20único" target="_blank" rel='noopener noreferrer' style={{color:'#545454'}} aria-label="Contactar por WhatsApp" >* Cotizar como pago único </a> 
            </div>
          </div>
        ))}
      </div>
      
    </div>
    </section>
  );
}
