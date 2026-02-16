const features = [
  {
    section: "Funcionalidades del Sitio",
    items: [
      { label: "Desarrollo, instalación y configuración", plans: [true, true, true] },
      { label: "Carrito de compras", plans: [true, true, true] },
      { label: "Métodos de pago (banco, PayPal, etc.)", plans: [true, true, true] },
      { label: "Importación de 30 productos", plans: [true, true, true] },
      { label: "Configuración de categorías", plans: [true, true, true] },
      { label: "Módulo administrativo de productos y pedidos", plans: [true, true, true] },
      { label: "Formulario de contacto", plans: [true, true, true] },
      { label: "Despliegue en servidor", plans: [true, true, true] },
    ],
  },
  {
    section: "Chatbot",
    items: [
      { label: "Chat de atención a clientes", plans: [false, true, true] },
    ],
  },
  {
    section: "Marketing y SEO",
    items: [
      { label: "Optimización para SEO", plans: [false, true, true] },
      { label: "Optimización de imágenes", plans: [false, true, true] },
      { label: "Código seguimiento Google A. y Pixel FB", plans: [false, true, true] },
      { label: "Envío de URLs a Google", plans: [false, true, true] },
    ],
  },
  {
    section: "Soporte y Gestión",
    items: [
      { label: "Soporte técnico (1er mes sin costo)", plans: [true, true, true] },
      { label: "Soporte prioritario", plans: [false, true, true] },
      { label: "Soporte por WhatsApp", plans: [false, true, true] },
    ],
  },
  
  {
    section: "Infraestructura incluida",
    items: [
      { label: "Hosting anual", plans: [false, true, true] },
      { label: "Dominio personalizado", plans: [false, true, true] },
      { label: "Certificado SSL", plans: [false, true, true] },
    ],
  },
  {
    section: "Servicios Opcionales",
    items: [
      { label: "Soporte técnico anual", plans: [false, "opcional", true] },
      { label: "Mantenimiento anual", plans: [false, "opcional", true] },
      { label: "Correo electrónico", plans: [false, "opcional", true] },
    ],
  },
];

const planNames = ["Emprendedor", "Negocio", "Empresa"];

export default function CompararPlanesTienda() {
  return (
    <div className="pricing-container">
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
                    {included === "opcional" && "🟡"}
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
