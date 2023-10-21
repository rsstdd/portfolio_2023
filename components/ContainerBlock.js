import Head from "next/head"
import { useRouter } from "next/router"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    name: "Ross Todd",
    title: "Ross Todd - Software Engineer",
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://rsstdd.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://rsstdd.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Ross Todd" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-[#0b0e14] w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
