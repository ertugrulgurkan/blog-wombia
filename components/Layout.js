import Head from "next/head";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords}></meta>
        <meta name="description" content={description}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Blog Wombia",
  keywords: "",
  description: "",
};
