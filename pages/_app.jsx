import Navigation from "../components/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <hr />
      <Navigation />
    </>
  );
}

export default MyApp;
