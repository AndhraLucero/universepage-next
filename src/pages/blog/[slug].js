import Head from "next/head";
import { useRouter } from "next/router";
import blogPosts from "@/data/blogPosts";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <p>Cargando...</p>;

  return (
    <>
      <Head>
        <title>{post.title} | UniversePage</title>
        <meta name="description" content={post.description} />
        <link
          rel="canonical"
          href={`https://universepage.mx/blog/${post.slug}`}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={`https://universepage.mx${post.image}`} />
        <meta property="og:type" content="article" />

      </Head>

      <section className="blog-nota">
        <div className="container">
          {/* ✅ IMAGEN DESTACADA */}
          <div className="blog-featured-image">
            <img
              src={post.image}
              alt={post.title}
              className="blog-header-image"
              
            />
          </div>
          <h1>{post.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
