import React, { useState } from "react";


const plans = [
  {
    name: "Emprendedor",
    description: "Ideal para empezar tu tienda online",
    features: [
      "Hasta 50 productos",
      "Diseño estándar",
      "Soporte por email",
    ],
    monthly: 502.67,
    yearly: 6.032,
  },
  {
    name: "Negocio",
    description: "Perfecto para tiendas en crecimiento",
    features: [
      "Hasta 500 productos",
      "Integración con redes sociales",
      "Soporte prioritario",
      "Módulo de facturación básico",
    ],
    monthly: 920.75,
    yearly: 11.049,
  },
  {
    name: "Empresarial",
    description: "Todo lo que una empresa necesita",
    features: [
      "Productos ilimitados",
      "Diseño personalizado",
      "Módulo de facturación avanzado",
      "Soporte por coreo y WhatsAap",
      "Backups diarios",
    ],
    monthly: 1.601,
    yearly: 19.217,
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pricing-container">
      

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
  );
}
