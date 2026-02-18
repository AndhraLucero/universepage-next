import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Nosotros() {
  return (
    <>
      <Head>
        <title>Nosotros | Desarrollo Web Profesional en México</title>
        <meta
          name="description"
          content="Somos una agencia mexicana especializada en desarrollo web, diseño de páginas web y software a la medida para negocios en México."
        />
        <meta
          name="keywords"
          content="desarrollo web, diseño web, páginas web en México, agencia de desarrollo web"
        />
      </Head>

    

      {/* HERO / ABOUT */}
      <section className="about">
        <div className="container content_about">
          <div className="about_img">
            <img
              src="/assets/images/about.jpg"
              alt="agencia de desarrollo web en México"                       
            />
          </div>

          <div className="about_text_box">
            
            <div className="about_text">

            
                <h1>Soluciones reales, tus ideas al siguiente nivel</h1>
                <h2>¿Quiénes somos?</h2>
                <p>
                Somos una agencia mexicana especializada en desarrollo web y
                software. Combinamos estrategia, diseño y tecnología para crear
                soluciones digitales modernas, funcionales y escalables.
                </p>
                <p>
                Ayudamos a negocios y emprendedores a fortalecer su presencia
                digital en todo México mediante soluciones web profesionales.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
       <section id='nuestra_historia'>
        <div className='historia'>
            <div  className='container'>
                <div className='historia_title'>
                    <h2>Nuestra historia</h2>
                    <h3>El comienzo</h3>
                </div>
                <div className='nuestra_historia'>
                    <div className='historia_text'>
                        <p>Hace cuatro años, en el 2020, un grupo de entusiastas se unió con una visión compartida: transformar ideas en realidad a través del poder de la web. Fue un tiempo de descubrimientos, desafíos y un compromiso inquebrantable con el aprendizaje constante.
                        </p>
                        <p>Desde el primer día, nos dimos cuenta de que en el mundo digital, la única constante es el cambio. Por eso, nos comprometimos a estar siempre un paso adelante. 
                        </p>
                       
                        <p>La capacitación se convirtió en una parte esencial de nuestro viaje. Cada nueva tecnología, cada tendencia emergente, se convirtió en una oportunidad para crecer y mejorar.</p>
                        
                    </div>
                    <div className='historia_mision'>                    
                        <p>A lo largo de este año, nos embarcaremos en una iniciativa significativa para elevar aún más la calidad de nuestros servicios.</p>
                        <h3>¡2025! Mejores servicios</h3>
                        <p style={{fontWeight:'500'}}> Estamos emocionados de anunciar que estaremos trabajando en la obtención de certificaciones de clase mundial y en la implementación de servidores propios para brindarles una experiencia aún más sólida y confiable.</p>
                    </div>
                   
                    
                </div>
                {/*<div className=''>
                        <h3>¡2024! Mejores servicios</h3>
                        <p> Estamos emocionados de anunciar que estaremos trabajando en la obtención de certificaciones de clase mundial y en la implementación de servidores propios para brindarles una experiencia aún más sólida y confiable.
                        </p>
                                               

                    </div>*/}
            </div>
        </div>
    </section>

      {/* MISIÓN Y VISIÓN */}
          <section className='mision'>
        <div className='container'>
         <div className='mision_container'>
            <div className='mision_content'>                
                <div className='mision_content_img'>
                    <img src="/assets/images/nosotros/proposito.png" alt='mision de universepage'/>
                </div>
                <div className='mision_content_text'>                    
                    <h3>Misión</h3>
                    <p>Brindar soluciones de desarrollo de software personalizadas y de calidad, incluyendo páginas web y aplicaciones, que satisfagan las necesidades únicas de nuestros clientes. {/*Nos comprometemos a ofrecer un servicio excepcional, centrado en la excelencia técnica y la atención al cliente, para facilitar su presencia en línea.*/}</p>
                </div>                
            </div>
            <div className='mision_content'>                
                <div className='mision_content_img'>
                    <img src="/assets/images/nosotros/binocular.png" alt='mision de universepage'/>
                </div>
                <div className='mision_content_text'>                    
                    <h3>Visión</h3>
                    <p>Ser líderes en el mercado mexicano de desarrollo de software, siendo reconocidos por nuestra innovación, confiabilidad y compromiso con la satisfacción del cliente. {/*Nos esforzamos por gestionar un porcentaje significativo de las páginas web de las empresas en México, ayudando a impulsar su crecimiento y presencia digital en un mundo cada vez más conectado.*/}</p>
                </div>                
            </div>
         </div>
        </div>
    </section>
 

      {/* VALORES */}

      <section className='valores'>
        <div className='container'>
            <div className='valores_title'>
                <h2>Nuestros valores</h2>            
            </div>
            <div className='valores_list'>
                <div className='valores_box'>
                    <img src="/assets/images/nosotros/servicio.png" alt='Calidad universepage' />
                    <h3>Calidad</h3>
                    <p>Nos comprometemos a ofrecer sitios web de alta calidad que cumplan con los estándares modernos de diseño, usabilidad y rendimiento.</p>
                </div>
                <div className='valores_box'>
                    <img src="/assets/images/nosotros/cohete.png" alt='innovación universepage' />
                    <h3>Innovación</h3>
                    <p>Nos mantenemos al tanto de las últimas tendencias tecnológicas y de diseño web para ofrecer soluciones innovadoras a nuestros clientes.</p>
                </div>
                <div className='valores_box'>
                    <img src="/assets/images/nosotros/convenio.png" alt='responsabilidad universepage' />
                    <h3>Responsabilidad</h3>
                    <p>Asumimos la responsabilidad de tus proyectos y nos comprometemos con ellos. Cumpliendo con los plazos y entregando resultados que cumplan o superen las expectativas.</p>
                    
                </div>
            </div>
            <div className='valores_list'>
                <div className='valores_box'>
                    <img src="/assets/images/nosotros/adaptacion.png" alt='adaptabilidad universepage' />
                    <h3>Adaptabilidad</h3>
                    <p>El mundo digital está en constante cambio. Somos capaces de adaptarnos rápidamente a las nuevas tecnologías y demandas del mercado.</p>
                </div>

                <div className='valores_box'>
                    <img src="/assets/images/nosotros/inspiracion.png" alt='creatividad universepage' />
                    <h3>Creatividad</h3>
                    <p>Fomentamos un ambiente creativo para generar ideas únicas y soluciones innovadoras en el diseño y desarrollo de todos los proyectos.</p>
                    
                </div>
                <div className='valores_box'>
                    <img src="/assets/images/nosotros/principios-morales.png" alt='etica universepage' />
                    <h3>Ética</h3>
                    <p>Trabajamos de manera ética en todas las áreas, desde la gestión de datos hasta las prácticas de desarrollo. Creemos que la integridad puede construir una reputación sólida.</p>
                    
                </div>
            </div>
        </div>
    </section>

      {/* EQUIPO */}
  
      <section className='nuestro_team'>
        <div className='container'>
            <div className='team_title'>
                <h2>Nuestro equipo</h2> 
                <h3>Colaboradores</h3>
                <p>Nuestra historia no sería completa sin mencionar al equipo increíble que ha estado detrás de cada línea de código y diseño. Somos un grupo diverso de mentes creativas, unidas por la pasión por la innovación.</p>           
            </div>
            <div className='team'>
                <div className='box_team'>
                    <div className='box_team_img'>
                        <img src="/assets/images/team1.webp" alt='universepage team' />                    
                    </div>
                    <label>
                        Diseñador web
                    </label>
                    <label>
                        David Reyes
                    </label>
                </div>
                <div className='box_team'>
                    <div className='box_team_img'>
                        <img src="/assets/images/team2.webp"alt='universepage team' />
                    </div>
                    <label>
                        Diseñador web
                    </label>
                    <label>
                        Ximena Díaz
                    </label>
                </div>
                <div className='box_team'>
                    <div className='box_team_img'>
                        <img src="/assets/images/team4.jpg" alt='universepage team' />
                        
                    </div>
                    <label>
                        Programador web
                    </label>
                    <label>
                        Diana Hernández
                    </label>
                </div>
                <div className='box_team'>
                    <div className='box_team_img'>
                        <img src="/assets/images/team3.jpg" alt='universepage team' /> 
                    </div>
                    <label>
                        Programador web
                    </label>
                    <label>
                        Gustavo Cárdenas
                    </label>
                </div>
            </div>
        </div>

    </section>


      <Footer />
    </>
  );
}

/* COMPONENTES INTERNOS */

function Valor({ title, img }) {
  return (
    <div className="valores_box">
      <Image src={img} alt={title} width={60} height={60} />
      <h3>{title}</h3>
    </div>
  );
}

function TeamCard({ img, name, role }) {
  return (
    <div className="box_team">
      <Image src={img} alt={name} width={220} height={220} />
      <span>{role}</span>
      <strong>{name}</strong>
    </div>
  );
}
