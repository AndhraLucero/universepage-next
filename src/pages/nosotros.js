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
          content="Somos una empresa mexicana especializada en desarrollo web, diseño de páginas web y software a la medida para negocios en México."
        />
        <meta
          name="keywords"
          content="desarrollo web, diseño web, páginas web en México, empresa de desarrollo web"
        />
      </Head>

    

      {/* HERO / ABOUT */}
      <section className="about">
        <div className="container content_about">
          <div className="about_img">
            <Image
              src="/assets/images/administracion.png"
              alt="Empresa de desarrollo web en México"
              width={500}
              height={400}
              priority
            />
          </div>

          <div className="about_text_box">
            <h1>Soluciones reales, tus ideas al siguiente nivel</h1>
            <h2>¿Quiénes somos?</h2>
            <p>
              Somos una empresa mexicana especializada en desarrollo web y
              software. Combinamos estrategia, diseño y tecnología para crear
              soluciones digitales modernas, funcionales y escalables.
            </p>
            <p>
              Ayudamos a negocios y emprendedores a fortalecer su presencia
              digital en todo México mediante soluciones web profesionales.
            </p>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section id="nuestra_historia">
        <div className="container">
          <h2>Nuestra historia</h2>
          <h3>El comienzo</h3>
          <p>
            En 2020, un grupo de desarrolladores decidió unir experiencia y
            creatividad con una visión clara: construir productos digitales que
            realmente generen valor.
          </p>
          <p>
            Desde entonces, la capacitación constante y la adopción de nuevas
            tecnologías han sido pilares fundamentales de nuestro crecimiento.
          </p>
          <p>
            Hoy seguimos evolucionando para ofrecer soluciones cada vez más
            sólidas, seguras y eficientes.
          </p>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="mision">
        <div className="container mision_container">
          <div className="mision_content">
            <Image
              src="/assets/images/nosotros/proposito.png"
              alt="Misión desarrollo web"
              width={80}
              height={80}
            />
            <div>
              <h3>Misión</h3>
              <p>
                Brindar soluciones de desarrollo web y software a la medida que
                impulsen la presencia digital de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="mision_content">
            <Image
              src="/assets/images/nosotros/binocular.png"
              alt="Visión desarrollo web"
              width={80}
              height={80}
            />
            <div>
              <h3>Visión</h3>
              <p>
                Ser una empresa referente en México por nuestra innovación,
                calidad y compromiso con cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="valores">
        <div className="container">
          <h2>Nuestros valores</h2>

          <div className="valores_list">
            <Valor title="Calidad" img="/assets/images/nosotros/servicio.png" />
            <Valor title="Innovación" img="/assets/images/nosotros/cohete.png" />
            <Valor title="Responsabilidad" img="/assets/images/nosotros/convenio.png" />
            <Valor title="Adaptabilidad" img="/assets/images/nosotros/adaptacion.png" />
            <Valor title="Creatividad" img="/assets/images/nosotros/inspiracion.png" />
            <Valor title="Ética" img="/assets/images/nosotros/principios-morales.png" />
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="nuestro_team">
        <div className="container">
          <h2>Nuestro equipo</h2>
          <p>
            Somos un equipo multidisciplinario apasionado por la tecnología, el
            diseño y la innovación digital.
          </p>

          <div className="team">
            <TeamCard
              img="/assets/images/team1.webp"
              name="David Reyes"
              role="Diseñador Web"
            />
            <TeamCard
              img="/assets/images/team2.webp"
              name="Ximena Díaz"
              role="Diseñadora Web"
            />
            <TeamCard
              img="/assets/images/team4.jpg"
              name="Gustavo Cárdenas"
              role="Programador Web"
            />
            <TeamCard
              img="/assets/images/team3.jpg"
              name="Diana Hernández"
              role="Programadora Web"
            />
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
