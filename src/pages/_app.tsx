import "../../styles/globals.scss";
import { CauseContextProvider } from "../hooks/useCause";

function MyApp({ Component, pageProps }) {
  return (
    <CauseContextProvider>
      <Component {...pageProps} />
    </CauseContextProvider>
  );
}

export default MyApp;
