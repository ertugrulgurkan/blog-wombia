import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords}></meta>
        <meta name="description" content={description}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Search />

      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Blog Wombia",
  keywords: "",
  description: "",
};
