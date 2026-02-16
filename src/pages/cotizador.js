import React, {useState} from 'react'
import axios from 'axios';
import Footer from '../components/Footer'
import Head from "next/head";

export default function Cotizador() {
    const [addedServices, setAddedServices] = useState([]);
    const [message, setMessage] = useState(true);
    const [modal, setModal] = useState(false);
    const [sendCotizacion, setSendCotizacion] = useState('whatsapp');
    const [whatsapp, setWhatsapp] = useState('');
    const [correo, setCorreo] = useState(''); 
    const [alert, setAlert] = useState(false);

    // Estados para almacenar el estado de cada checkbox
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);

    // Funciones para manejar el cambio de estado de cada checkbox
    const handleCheckboxChange1 = () => {
        setChecked1(!isChecked1);
    };

    const handleCheckboxChange2 = () => {
        setChecked2(!isChecked2);
    };

    const handleCheckboxChange3 = () => {
        setChecked3(!isChecked3);
    };

    const handleCheckboxChange4 = () => {
        setChecked4(!isChecked4);
    };

    const handleCheckboxChange5 = () => {
        setChecked5(!isChecked5);
    };

    const addService = (serviceName, checkboxValues = []) => {
        const checkboxLabels = ['Página única (One page)', 'Multipagina (Multipage)', 'Página de aterrizaje (Landing page)', 'Catálogo de productos', 'Ecommerce (con pasarela de pagos)'];
      
        const selectedCheckboxes = checkboxLabels.filter((label, index) => checkboxValues[index]);
        
        setAddedServices([...addedServices, { name: serviceName, checkboxes: selectedCheckboxes }]);
      };    

    const removeService = (index) => {
        const updatedServices = [...addedServices];
        updatedServices.splice(index, 1);
        setAddedServices(updatedServices);
    };
    const handleToggle = () => {
        setMessage(!message);
    }
    const isCheckboxSelected1 = () => {
        return isChecked1 || isChecked2 || isChecked3;
    };
    const isCheckboxSelected2 = () => {
        return  isChecked4 || isChecked5;
    };
    
    const handleModal = () => {
        setModal(!modal);
    };

     const handleSendCotizacion = (selectedOption) => {
        setSendCotizacion(selectedOption);
    
        // Limpiar los valores de los campos de entrada cuando se cambia la opción
        setWhatsapp('');
        setCorreo('');
    };

    const enviarCorreo = async () => {

        try {
            await axios.post('https://3cwma7t8s4.execute-api.us-east-1.amazonaws.com/prod/webservice', {
                whatsapp,
                correo,
                
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    // Agrega otros encabezados si son necesarios
                },
            });
    
            // Limpiar campos después de enviar el correo
    
			setWhatsapp('');
            setCorreo('');            
            setAlert(true);
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            alert('Error al enviar el correo');
        }
    };

   



  return (
    <>
     <Head>
        <title>Cotizador de Páginas Web | UniversePage</title>

        <meta 
            name="description" 
            content="Cotiza tu página web profesional. Calcula el precio de tu sitio web, tienda en línea o landing page y recibe tu cotización por correo o WhatsApp."
        />

        <meta name="keywords" content="cotizador página web, precio página web, cotizar tienda online, desarrollo web México" />

        <meta name="author" content="UniversePage" />

        <meta property="og:title" content="Cotizador de Páginas Web | UniversePage" />
        <meta property="og:description" content="Obtén tu cotización de página web en minutos. Landing page, tienda en línea o desarrollo personalizado." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://universepage.mx/cotizador" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://universepage.mx/cotizador" />

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "UniversePage",
                url: "https://universepage.mx",
                serviceType: "Desarrollo Web",
                areaServed: "México",
                }),
            }}
            />

        </Head>
        
    <main>
        <section className='headers'>
            <div className='container'>
                <div className='title'>
                    <h1>Cotizador de Páginas Web Profesionales en México</h1>
                    <p><strong>Cotiza tu página web a través de nuestro formulario y recibe un presupuesto estimado. <br/> 
                    Te enviaremos la cotización por correo o WhatsApp.  </strong></p>
                </div>
            </div>
        </section>
        <section>
            <div className='container'>
                <div className='cotizador'>
                    <div className='list_services'> 
                        <div className='item_service'>
                            <div className='box_item_servce'>
                                <h4>No estoy seguro, quiero asesoría.</h4>
                                <p>Estaremos encantados de responder a tus preguntas, proporcionarte asistencia personalizada o brindarte más detalles sobre nuestros servicios. </p>
                                <button onClick={() => addService('Asesoría')}>Añadir <i class="fi fi-rr-add"></i></button>
                            </div>
                        </div>
                        <div className='item_service'>
                            <div className='box_item_servce'>
                                <h4>Desarrollos web personalizados</h4>
                                <p>Soluciones específicas como portales, sistemas o plataformas. </p>
                                <button onClick={() => addService('Desarrollos web personalizados')}>Añadir <i class="fi fi-rr-add"></i></button>
                            </div>
                        </div>
                        <div className='item_service'>
                            <div className='box_item_servce'>
                                <h4>Página web</h4>
                                <p>Consideramos tres categorías para clasificar una página web: </p>
                                <div className='checkbox_cotizador'>
                               
                                    {/* Checkbox 1 */}
                                    <label>
                                        <input
                                        type="checkbox"
                                        checked={isChecked1}
                                        onChange={handleCheckboxChange1}
                                        name='paginaweb[]'
                                        value='one-page'

                                        />
                                        Página única (One page):
                                        <p>Se muestra toda la información en una sola página.</p>
                                    </label>
                                  
                                    {/* Checkbox 2 */}
                                    <label>
                                        <input
                                        type="checkbox"
                                        checked={isChecked2}
                                        onChange={handleCheckboxChange2}
                                        name='paginaweb[]'
                                        value='Multipage'

                                        />
                                        Multipagina (Multipage):
                                        <p>Se muestra la información distribuida en diferentes pestañas.</p>
                                        
                                    </label>

                                    {/* Checkbox 3 */}
                                    <label>
                                        <input
                                        type="checkbox"
                                        checked={isChecked3}
                                        onChange={handleCheckboxChange3}
                                        
                                        />
                                        Página de aterrizaje (Landing page):
                                        <p>Ideal para recibir a usuarios provenientes de campañas de marketing.</p>
                                        
                                    </label>

                                    {/* Muestra el estado actual de cada checkbox 
                                    <p>Estado de la opción 1: {isChecked1 ? 'Habilitada' : 'Deshabilitada'}</p>
                                    <p>Estado de la opción 2: {isChecked2 ? 'Habilitada' : 'Deshabilitada'}</p>
                                    <p>Estado de la opción 3: {isChecked3 ? 'Habilitada' : 'Deshabilitada'}</p>
                                    */}
                                    </div>
                                <button onClick={() => addService('Página web', [isChecked1, isChecked2, isChecked3])} disabled={!isCheckboxSelected1()}>Añadir <i class="fi fi-rr-add"></i></button>
                            </div>
                        </div>
                        <div className='item_service'>
                            <div className='box_item_servce'>
                                <h4>Tienda en línea</h4>
                                <p>Consideramos dos categorías para clasificar una tienda en línea </p>
                                <div className='checkbox_cotizador'>
                               
                                    {/* Checkbox 1 */}
                                    <label>
                                        <input
                                        type="checkbox"
                                        checked={isChecked4}
                                        onChange={handleCheckboxChange4}
                                        
                                        />
                                        Catálogo de productos:
                                        <p>Los clientes pueden solicitar una cotización en lugar de un pago directo.</p>
                                    </label>
                                  
                                    {/* Checkbox 2 */}
                                    <label>
                                        <input
                                        type="checkbox"
                                        checked={isChecked5}
                                        onChange={handleCheckboxChange5}
                                        />
                                        Ecommerce (con pasarela de pagos):
                                        <p>Los clientes pueden comprar a través de la tienda en línea de manera directa. </p>
                                        
                                    </label>

                                    {/* Muestra el estado actual de cada checkbox 
                                    <p>Estado de la opción 1: {isChecked1 ? 'Habilitada' : 'Deshabilitada'}</p>
                                    <p>Estado de la opción 2: {isChecked2 ? 'Habilitada' : 'Deshabilitada'}</p>
                                    <p>Estado de la opción 3: {isChecked3 ? 'Habilitada' : 'Deshabilitada'}</p>
                                    */}
                                    </div>
                                <button onClick={() => addService('Tienda en línea', [isChecked4, isChecked5])}  disabled={!isCheckboxSelected2()}>Añadir <i class="fi fi-rr-add"></i></button>
                            </div>
                        </div>
                        <div className='item_service'>
                            <div className='box_item_servce'>
                                <h4>Dominio, Hosting y Correo</h4>
                                <p>Los servicios de hosting, dominio y correo electrónico, son proporcionados por un proveedor externo especializado, te ofrecemos la contratación y/o gestión de estos servicios.</p>
                                <button onClick={() => addService('Dominio, Hosting y Correo')}>Añadir <i class="fi fi-rr-add"></i></button>
                            </div>
                        </div>
                        <div className='item_service'>
                            <div className='box_item_servce'>
                                <h4>Gestión de contenido web</h4>
                                <p>Nos encargamos de la administración de tu sitio. Ideal para aquellos que buscan mantener su presencia en línea en manos de profecionales.</p>
                                <button onClick={() => addService('Gestión de contenido web')}>Añadir <i class="fi fi-rr-add"></i></button>
                            </div>
                        </div>
                        <div className='item_service'>
                            <div className='box_item_servce'>
                                <h4>Auditoría web</h4>
                                <p>Evaluamos y analizamos tu sitio web con el objetivo de identificar áreas de mejora en aspectos como rendimiento, seguridad, accesibilidad, SEO y experiencia de usuario (UX). </p>
                                <button onClick={() => addService('Auditoría web')}>Añadir <i class="fi fi-rr-add"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='list_result'>
                        <div className='box_message'>
                            <div className='box_message_title'>
                                <h2>Cotiza el servicio que necesitas</h2>
                            </div>
                            <div className='box_message_text'>
                                <p>Utiliza nuestro sistema para recibir una cotización. Solo tienes que elegir el o los servicios que quieras y el sistema te enviara el precio final a tu correo.</p>
                            </div>
                        </div>
                        {message &&(
                            <div className='message_alert'>
                                <p>Nuestro sistema está configurado para ofrecer los servicios exactos a los que seleccionas, si quieres un servicio personalizado selecciona la opción “Necesito asesoría”, un agente se contactara para obtener más información y concretar una cotización.</p>
                                <button  onClick={handleToggle}><i class="fi fi-rr-cross-circle"></i></button>
                                
                            </div>
                        )

                        }
                        
                        <div className='box_list_result'>
                            <div className='box_result_title'>
                                <h2>Servicios añadidos</h2>
                            </div>
                            <div className='box_addedservice'>
                                <ul>
                                {addedServices.map((service, index) => (
                                    <li key={index}>
                                        <div className='item_added_service'>
                                             {service.name} {': '+ service.checkboxes.join(', ')}
                                        </div>                                   
                                        <button onClick={() => removeService(index)}><i class="fi fi-rs-trash"></i></button>
                                    </li>
                                ))}
                                </ul>
                                <div className='enviar_cotizacion'>
                                    <button disabled={addedServices.length === 0} onClick={handleModal}>Enviar cotización</button>
                                </div>

                            </div>
                                                                                    
                        </div>
                    </div>
                </div>
            </div>
            {modal && (
            <div className="modal-overlay">
            <div className="modal">
                <span className="close-button" onClick={handleModal}>
                &times;
                </span>
                
                <div className='modal-contact'>
                    <h2>¿Por qué medio te gustaría recibir la cotización?</h2>
                    <div className='modal-options'>
                        <div className='modal-option'>
                        <button onClick={() => handleSendCotizacion('whatsapp')}>
                            <label><i class="fi fi-brands-whatsapp"></i></label>
                            <label>WhatsApp</label>
                        </button>
                            
                        </div>
                        <div className='modal-option'>
                        <button onClick={() => handleSendCotizacion('correo')}>                            
                            <label><i class="fi fi-rs-envelope"></i> </label>
                            <label>Correo</label>
                        </button>
                            
                        </div>
                    </div>
                    <div>
                    {sendCotizacion === 'whatsapp' && (
                        <div className='form_modal_contact'>
                            {alert &&
							<div className='alertMessage'>
								<label>¡Tu cotización sera enviada por WhatsApp!</label>
							</div>
						    }
                            <label>Número de WhatsApp:</label>
                            <div className='send_cotizacion'>
                                <input
                                    type="text"
                                    value={whatsapp}
                                    name='whatsapp'
                                    onChange={(e) => setWhatsapp(e.target.value)}
                                />
                                <button
                                class="btn_enviar_cotizacion"	
                                onClick={enviarCorreo}					
                                >
                                Enviar
                                </button>
                            </div>
                            
                        </div>
                    )}

                    {sendCotizacion === 'correo' && (
                        <div className='form_modal_contact'>
                            {alert &&
							<div className='alertMessage'>
								<label>¡Tu cotización sera enviada por correo!</label>
							</div>
						    }
                            <label>Dirección de correo: </label>
                                <div className='send_cotizacion'>
                                    <input
                                        type="email"
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                    />
                                     <button
									class="btn_enviar_cotizacion"
								
									onClick={enviarCorreo}
									>
									Enviar
									</button>
                                </div>                                
                            
                        </div>
                        
                    )}
                    </div>
                </div>
            </div>
            </div>
        )}
        </section>
        <section className="seo-content">
            <h2>¿Cuánto cuesta una página web?</h2>
            <p>
                El precio de una página web depende del tipo de proyecto, número de secciones,
                funcionalidades y si incluye ecommerce. Nuestro cotizador te permite estimar
                el costo de desarrollo web profesional en minutos.
            </p>

            <h2>Servicios de Desarrollo Web</h2>
            <p>
                Ofrecemos diseño de páginas web, tiendas en línea, landing pages,
                auditorías web, hosting y gestión de contenido.
            </p>
            </section>

        <Footer />
   </main>
   </>
  )
}

