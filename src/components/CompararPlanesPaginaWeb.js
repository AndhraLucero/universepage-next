

const features = [
  {
    section: "Contenido del Sitio",
    items: [
      { label: "Secciones del sitio", plans: ["Hasta 6", "Hasta 10", "Ilimitadas", "Ilimitadas"] },
      { label: "Diseño responsivo", plans: [true, true, true, true] },
      { label: "Diseño personalizado", plans: [false, true, true, true] },
      { label: "Tienda online", plans: [false, false, "Escalable", "Escalable"] },
    ],
  },
  {
    section: "Integraciones",
    items: [
      { label: "Formulario de contacto", plans: [true, true, true, true] },
      { label: "Formularios personalizados", plans: [false, false, true, true] },
      { label: "Redes sociales", plans: [true, true, true, true] },
      { label: "WhatsApp Business", plans: [false, true, true, true] },
      { label: "Google Maps", plans: [false, true, true, true] },
      { label: "Google Analytics", plans: [false, false, true, true] },
      { label: "Pixel de Facebook", plans: [false, false, true, true] },
    ],
  },
  {
    section: "SEO y Rendimiento",
    items: [
      { label: "Optimización SEO básica", plans: [false, false, true, true] },
      { label: "Optimización de carga", plans: [false, false, true, true] },
      { label: "Multi-idioma", plans: [false, false, false, true] },
    ],
  },
  {
    section: "Correo y Dominio",
    items: [
      { label: "Cuentas de correo corporativo", plans: [false, "20", "Ilimitado", "Ilimitado"] },
      { label: "Dominio y hosting (1 año)", plans: [false, true, true, true] },
      { label: "Certificado SSL", plans: [false, true, true, true] },
    ],
  },
  {
    section: "Soporte y Capacitación",
    items: [
      { label: "Soporte técnico", plans: ["Básico", "Avanzado", "Prioritario", "Prioritario"] },
      { label: "Capacitación y documentación", plans: [true, true, true, true] },
    ],
  },
];

const planNames = ["Emprendedor", "Profesional", "Negocio", "Empresarial"];

export default function CompararPlanesPaginaWeb() {
  return (
    <div className="container">
      <h2 className="pricing-title">Comparativa de Planes</h2>
      <div className="pricing-table">
        <div className="table-header">
          <div className="table-cell header">Características</div>
          {planNames.map((name, index) => (
            <div className="table-cell header" key={index}>{name}</div>
          ))}
        </div>

        {features.map((section, i) => (
          <div key={i} className="table-section">
            <div className="section-title">{section.section}</div>
            {section.items.map((item, idx) => (
              <div className="table-row" key={idx}>
                <div className="table-cell feature-label">{item.label}</div>
                {item.plans.map((included, pIdx) => (
                  <div className="table-cell" key={pIdx}>
                    {included === true && "✔️"}
                    {included === false && "❌"}
                    {included === "Escalable" && "📈"}
                    {included === "Incluida" && "📘"}
                    {typeof included === "string" && included}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
