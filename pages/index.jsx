import Head from "next/head";
import Hero from "/components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Halal AlAqsa</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          title={"Halal AlAqsa"}
          tagline={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus."
          }
          img={{
            url: "https://oks.org.il/wp-content/uploads/2021/04/jars-OKS-1.jpg",
            desc: "Home page hero image."
          }}
        />
      </main>
    </div>
  );
}
