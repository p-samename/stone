import Head from "next/head";

export default function Layout({ children }) {
  return (
  <>
    <div className="container">
      <Head>
        <title>stone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <footer>
       <div>test footer</div>
      </footer>
    </div>
  </>
  )
 }