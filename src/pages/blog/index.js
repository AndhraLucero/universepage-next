import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import blogPosts from "@/data/blogPosts";

const posts = blogPosts;

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de Desarrollo Web | UniversePage</title>
        <meta
          name="description"
          content="Conoce tendencias, mejores prácticas y recursos para hacer crecer tu negocio en línea."
        />
        <link rel="canonical" href="https://universepage.mx/blog" />

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline:
                    "Estamos en Clutch: esto es lo que opinan nuestros clientes sobre UNIVERSEPAGE",
                author: {
                    "@type": "Organization",
                    name: "UniversePage",
                },
                publisher: {
                    "@type": "Organization",
                    name: "UniversePage",
                    logo: {
                    "@type": "ImageObject",
                    url: "https://universepage.mx/logo.png",
                    },
                },
                mainEntityOfPage:
                    "https://universepage.mx/blog/clutch",
                }),
            }}
            />

      </Head>

      <main>
        {/* HEADER */}
        <section className="headers">
          <div className="container">
            <div className="title">
              <h1>Blog</h1>
              <p>
                Conoce las mejores prácticas, tendencias y recursos que harán
                destacar a tu negocio en línea.
              </p>
            </div>
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="blog">
          <div className="container">
            <div className="blog-container">
              {posts.map((post) => (
                <div key={post.slug} className="blog-content">
                  <Link href={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                    
                      className="blog-img"
                    />

                    <div className="blog-box">
                      <div className="blog-box-text">
                        <h2>{post.title}</h2>
                      </div>
                      <div className="blog-fecha">
                        <label>{post.date}</label>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
