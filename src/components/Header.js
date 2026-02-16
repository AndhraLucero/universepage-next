import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [scroll, setScroll] = useState(false)
  const [isSubmenu, setIsSubmenu] = useState(null)
  const [isMenu, setIsMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenu(!isMenu)
  const toggleSubmenu = (index) =>
    setIsSubmenu((prev) => (prev === index ? null : index))

  return (
    <>
      {/* MENU DESKTOP */}
      <nav className={`menucarga ${scroll ? "scrolled" : ""}`}>
        <div className="container">
          <div className="nav-menu-carga">
            <div className="logo_carga">
              <Link href="/" className="menu-item">
                <div className="menu_img_show_carga">UNIVERSEPAGE</div>
              </Link>
            </div>

            <div className="menu_medio">
              <ul>
                <li>
                  <a href="#services">
                    SERVICIOS <i className="fi fi-rr-caret-down"></i>
                  </a>
                  <ul className="submenu_carga">
                    <li><Link href="/pagina-web">Página web</Link></li>
                    <li><Link href="/tienda-en-linea">Tienda en línea</Link></li>
                    <li><Link href="/desarrollo-web">Desarrollo de software</Link></li>
                    <li><Link href="/hosting">Hosting y correo</Link></li>
                    <li><Link href="/gestion-web">Administración de sitios</Link></li>
                    <li><Link href="/auditoria-web">Auditoría web</Link></li>
                  </ul>
                </li>

                <li><Link href="/cotizador">COTIZADOR</Link></li>
                <li><Link href="/nosotros">NOSOTROS</Link></li>
                <li><Link href="/blog">BLOG</Link></li>
                <li><Link href="/contacto">CONTACTO</Link></li>

                <li className="navbar-item wp-btn">
                  <a
                    href="https://wa.me/5216121970006?text=Me%20interesa%20una%20cotización"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contactar por WhatsApp"
                    style={{ color: "#fff" }}
                  >
                    WhatsApp <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* MENU RESPONSIVE */}
      <nav className="menu_responsive_carga">
        <div className="container">
          <div className="menu_responsive_carga_content">
            <Link href="/">
              <div className="menu_img_show_carga">UNIVERSEPAGE</div>
            </Link>
            <button
              onClick={toggleMenu}
              aria-label="menu"
              className="btn_menu_responsive_carga"
            >
              <i className="fi fi-br-menu-burger"></i>
            </button>
          </div>
        </div>
      </nav>

      {isMenu && (
        <div className="menu_carga_activo">
          <div className="container">
            <div className="menu_responsive_carga_content">
              <Link href="/">
                <div className="menu_img_show_carga">UNIVERSEPAGE</div>
              </Link>
              <button onClick={toggleMenu}>
                <i className="fi fi-br-cross"></i>
              </button>
            </div>

            <div className="submenu_list_carga">
              <ul>
                <li>
                  <button onClick={() => toggleSubmenu(1)}>
                    SERVICIOS <i className="fi fi-rr-caret-down"></i>
                  </button>
                  {isSubmenu === 1 && (
                    <ul className="submenu_item">
                      <li><Link href="/pagina-web" onClick={toggleMenu}>Página web</Link></li>
                      <li><Link href="/tienda-en-linea" onClick={toggleMenu}>Tienda en línea</Link></li>
                      <li><Link href="/desarrollo-web" onClick={toggleMenu}>Desarrollo de software</Link></li>
                      <li><Link href="/hosting" onClick={toggleMenu}>Hosting y correo</Link></li>
                      <li><Link href="/gestion-web" onClick={toggleMenu}>Administración de sitios</Link></li>
                      <li><Link href="/auditoria-web" onClick={toggleMenu}>Auditoría web</Link></li>
                    </ul>
                  )}
                </li>

                <li><Link href="/cotizador" onClick={toggleMenu}>COTIZADOR</Link></li>
                <li><Link href="/nosotros" onClick={toggleMenu}>NOSOTROS</Link></li>
                <li><Link href="/blog" onClick={toggleMenu}>BLOG</Link></li>
                <li><Link href="/contacto" onClick={toggleMenu}>CONTACTO</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
